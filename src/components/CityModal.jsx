const popular = ["Delhi", "Hyderabad", "Mumbai", "Pune", "Chennai", "Bangalore"];
const other = ["Faridabad", "Kolkata", "Gurgaon", "Noida", "Ghaziabad"];

export default function CityModal({ open, onClose, city, onSelect }) {
  if (!open) return null;
  const pick = (c) => { onSelect(c); onClose(); };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl animate-[fadeIn_.25s_ease] rounded-3xl bg-white p-6">
        <h2 className="text-center text-2xl font-semibold">Select Your City</h2>
        <p className="my-4 text-center text-sm text-gray-400">Popular Cities</p>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {popular.map((c) => (
            <button key={c} onClick={() => pick(c)}
              className={`flex flex-col items-center gap-2 rounded-xl border p-3 text-sm transition hover:-translate-y-1 hover:shadow ${
                c === city ? "border-[#2F6FDB] bg-blue-50" : "border-transparent"}`}>
              <span className="text-3xl">🏛️</span>{c}
            </button>
          ))}
        </div>
        <p className="my-4 text-center text-sm text-gray-400">Other Cities</p>
        <div className="flex flex-wrap justify-center gap-3">
          {other.map((c) => (
            <button key={c} onClick={() => pick(c)}
              className="rounded-full border px-4 py-1 text-sm transition hover:bg-gray-100">{c}</button>
          ))}
        </div>
      </div>
    </div>
  );
}