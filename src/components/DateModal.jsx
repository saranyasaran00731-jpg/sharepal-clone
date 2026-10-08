import { useState } from "react";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const fmt = (d) => (d ? d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "");
const same = (a, b) => a && b && a.toDateString() === b.toDateString();

function Month({ date, start, end, onPick }) {
  const y = date.getFullYear(), m = date.getMonth();
  const first = new Date(y, m, 1).getDay();
  const total = new Date(y, m + 1, 0).getDate();
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const cells = [...Array(first).fill(null), ...Array.from({ length: total }, (_, i) => new Date(y, m, i + 1))];
  return (
    <div className="w-60">
      <p className="mb-2 text-center font-medium">
        {date.toLocaleString("en-IN", { month: "long", year: "numeric" })}
      </p>
      <div className="grid grid-cols-7 gap-y-1 text-center text-xs">
        {DAYS.map((d) => <span key={d} className="text-gray-400">{d}</span>)}
        {cells.map((d, i) => d ? (
          <button key={i} disabled={d < today} onClick={() => onPick(d)}
            className={`mx-auto h-8 w-8 rounded-full transition disabled:text-gray-300 ${
              same(d, start) || same(d, end) ? "bg-[#1E2B4F] text-white"
              : start && end && d > start && d < end ? "bg-[#C9DBF5]" : "hover:bg-gray-200"}`}>
            {d.getDate()}
          </button>
        ) : <span key={i} />)}
      </div>
    </div>
  );
}

export default function DateModal({ open, onClose, onConfirm }) {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [offset, setOffset] = useState(0);
  if (!open) return null;

  const base = new Date(); base.setDate(1); base.setMonth(base.getMonth() + offset);
  const next = new Date(base); next.setMonth(next.getMonth() + 1);

  const pick = (d) => {
    if (!start || (start && end)) { setStart(d); setEnd(null); }
    else if (d > start) setEnd(d);
    else setStart(d);
  };
  const days = start && end ? Math.round((end - start) / 86400000) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-5xl animate-[fadeIn_.25s_ease] flex-col gap-6 overflow-auto rounded-3xl bg-white p-6 md:flex-row">
        <button onClick={onClose} className="absolute right-4 top-4 text-xl text-gray-500 hover:text-black">✕</button>

        <div className="md:w-[40%]">
          <h2 className="text-2xl font-semibold">Select your Dates</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div><p className="mb-1 text-gray-600">Delivery Date <span className="text-red-500">*</span></p>
              <div className="rounded-lg border px-3 py-2 text-gray-500">{fmt(start) || "Select delivery date"}</div></div>
            <div><p className="mb-1 text-gray-600">Pickup Date <span className="text-red-500">*</span></p>
              <div className="rounded-lg border px-3 py-2 text-gray-500">{fmt(end) || "Select pickup date"}</div></div>
          </div>
          <p className="mt-4 rounded-lg bg-blue-50 p-3 text-xs text-blue-700">
            Same-day delivery between 5PM and 11PM. For future dates, you can select a specific time slot at checkout. We pickup between 9AM to 1PM.
          </p>
          <p className="mt-4 text-sm text-gray-600">Your Rental Period:</p>
          <div className="mt-1 flex items-end gap-3 rounded-xl border p-3">
            <span className="text-5xl font-bold">{String(days).padStart(2, "0")}</span>
            <span className="text-gray-400">Day</span>
            <span className="ml-4 text-xs text-gray-500">Chargeable Period:<br />{start && end ? `${fmt(start)} - ${fmt(end)}` : "--"}</span>
          </div>
          <div className="mt-4 rounded-xl bg-[#1E2B4F] p-4 text-white">
            <p className="text-xl font-bold italic text-[#E8C86A]">Save more with us!</p>
            <p className="mt-1 text-xs">Longer rental periods mean bigger savings, enjoy discounts of up to 12%. We don't charge you for delivery and pickup days!</p>
          </div>
          <button disabled={!days} onClick={() => { onConfirm({ start, end, days }); onClose(); }}
            className="mt-5 w-full rounded-full bg-[#C5EE3A] py-3 font-semibold transition enabled:hover:brightness-95 disabled:opacity-40">
            Continue
          </button>
        </div>

        <div className="rounded-2xl bg-[#F6F3E8] p-4 md:w-[60%]">
          <div className="mb-2 flex justify-between">
            <button disabled={offset === 0} onClick={() => setOffset(offset - 1)} className="px-2 disabled:opacity-30">‹</button>
            <button onClick={() => setOffset(offset + 1)} className="px-2">›</button>
          </div>
          <div className="flex flex-wrap justify-around gap-6">
            <Month date={base} start={start} end={end} onPick={pick} />
            <Month date={next} start={start} end={end} onPick={pick} />
          </div>
        </div>
      </div>
    </div>
  );
}