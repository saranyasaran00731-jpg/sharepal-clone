export default function Header({ onOpenDates, onOpenCity, city, dates }) {
  const fmt = (d) => d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
  return (
    <header className="sticky top-0 z-40 bg-[#1E2B4F] px-4 pb-2 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 py-3">
        <div className="-mt-3 rounded-b-xl bg-[#2F6FDB] px-4 py-3 text-xl font-bold italic text-white md:px-5 md:text-2xl">
          Share<span className="text-[#8BE04E]">Pal</span>
        </div>

        <div className="order-3 flex w-full items-center overflow-hidden rounded-full bg-white text-xs md:order-none md:w-auto md:text-sm">
          <button onClick={onOpenCity} className="bg-[#C9DBF5] px-3 py-2 font-medium md:px-4">📍 {city} ⌄</button>
          <button onClick={onOpenDates} className="flex-1 px-3 py-2 text-gray-500 hover:bg-gray-100 md:px-4">
            {dates ? fmt(dates.start) : "Delivery Date"}
          </button>
          <button onClick={onOpenDates} className="flex-1 px-3 py-2 text-gray-500 hover:bg-gray-100 md:px-4">
            {dates ? fmt(dates.end) : "Pickup Date"}
          </button>
          <button onClick={onOpenDates} className="bg-[#1E2B4F] px-4 py-2 text-white transition hover:bg-black md:px-5">
            Select
          </button>
        </div>

        <div className="flex items-center gap-3 text-white md:gap-4">
          <span>🔍</span>
          <span>🛒</span>
          <span className="text-sm font-medium">Hi, Login</span>
        </div>
      </div>
    </header>
  );
}