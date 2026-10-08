export default function PromoBanner() {
  const items = [
    ["Monthly Earnings", "From rental assets"],
    ["Upto ₹10,000", "Instant Wallet credits"],
    ["10% Off", "Exclusive discount when you rent"],
    ["Get 10% Cashback", "On every order"],
  ];
  return (
    <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#1E2B4F] to-[#2A4A8A] p-6 text-white">
      <h3 className="font-['Poppins'] text-2xl font-bold md:text-3xl">
        Become an <span className="text-[#A6E22E]">Asset Partner.</span> Earn Monthly.
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map(([a, b]) => (
          <div key={a}>
            <p className="font-['Poppins'] text-lg font-semibold text-[#A6E22E]">{a}</p>
            <p className="text-xs opacity-80">{b}</p>
          </div>
        ))}
      </div>
      <button className="mt-5 rounded-full bg-[#C5EE3A] px-6 py-2 font-semibold text-black transition hover:brightness-95">
        Know More ↗
      </button>
    </div>
  );
}