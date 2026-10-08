export default function Header({ onOpenDates, dates }) {
  const fmt = (d) =>
    d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });

  return (
    <header className="bg-[#1E2B4F] px-6 pb-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-3">
        <div className="-mt-3 rounded-b-xl bg-[#2F6FDB] px-5 py-3 text-2xl font-bold italic text-white">
          Share<span className="text-[#8BE04E]">Pal</span>
        </div>

        <div className="hidden items-center overflow-hidden rounded-full bg-white text-sm md:flex">
          <button className="bg-[#C9DBF5] px-4 py-2 font-medium">📍 Bangalore ⌄</button>
          <button onClick={onOpenDates} className="px-4 py-2 text-gray-500 hover:bg-gray-100">
            {dates ? fmt(dates.start) : "Delivery Date"}
          </button>
          <button onClick={onOpenDates} className="px-4 py-2 text-gray-500 hover:bg-gray-100">
            {dates ? fmt(dates.end) : "Pickup Date"}
          </button>
          <button onClick={onOpenDates} className="bg-[#1E2B4F] px-5 py-2 text-white transition hover:bg-black">
            Select
          </button>
        </div>

        <div className="flex items-center gap-4 text-white">
          <span>🔍</span>
          <span>🛒</span>
          <span className="text-sm font-medium">Hi, Login</span>
        </div>
      </div>
    </header>
  );
}