import { categories } from "../data/categories";

export default function CategoryTabs({ active, onChange }) {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl justify-around px-6">
        {Object.keys(categories).map((t) => (
          <button key={t} onClick={() => onChange(t)}
            style={t === active ? { borderColor: categories[t].accent, color: categories[t].accent } : {}}
            className={`border-b-2 py-3 text-sm font-medium transition ${
              t === active ? "" : "border-transparent text-gray-600 hover:text-black"}`}>
            {t}
          </button>
        ))}
      </div>
    </nav>
  );
}