export default function Banner({ cfg }) {
  return (
    <div
      style={{ background: cfg.gradient }}
      className="rounded-2xl px-6 py-10 text-center text-white transition-all duration-500"
    >
      <h2 className="font-['Ubuntu'] text-4xl font-bold">{cfg.banner}</h2>
      <p className="mx-auto mt-3 max-w-xl font-medium">{cfg.desc}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-6 text-lg font-semibold opacity-90">
        {cfg.brands.map((b) => (
          <span key={b}>{b}</span>
        ))}
      </div>
    </div>
  );
}