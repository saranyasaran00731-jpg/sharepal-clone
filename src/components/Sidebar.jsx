export default function Sidebar({ items, active, onSelect, accent }) {
  return (
    <aside className="hidden w-28 shrink-0 flex-col items-center gap-4 rounded-2xl bg-[#F6F3E8] py-4 md:flex">
      {items.map(([name, icon]) => (
        <button key={name} onClick={() => onSelect(name)} className="group flex flex-col items-center gap-1 text-center text-xs font-medium">
          <span style={active === name ? { borderColor: accent } : {}}
            className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 text-2xl transition group-hover:scale-105 ${
              active === name ? "bg-white" : "border-transparent bg-white/60"}`}>{icon}</span>
          <span>{name}</span>
        </button>
      ))}
    </aside>
  );
}