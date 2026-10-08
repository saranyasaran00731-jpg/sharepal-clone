import { useState } from "react";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import DateModal from "./components/DateModal";
import { categories } from "./data/categories";
import data from "./data/products.json";

export default function App() {
  const [tab, setTab] = useState("Gaming");
  const [cat, setCat] = useState("All");
  const [visible, setVisible] = useState(12);
  const [modal, setModal] = useState(false);
  const [dates, setDates] = useState(null);

  const cfg = categories[tab];
  const all = tab === "Gaming" ? data.products : [];
  const products =
    cat === "All" ? all
    : cat === "PS5 Console" ? all.filter((p) => p.name.includes("PS5"))
    : [];

  return (
    <div className="min-h-screen bg-[#FAF8F0]">
      <Header onOpenDates={() => setModal(true)} dates={dates} />
      <CategoryTabs active={tab} onChange={(t) => { setTab(t); setCat("All"); setVisible(12); }} />
      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-6">
        <Sidebar items={cfg.side} active={cat} accent={cfg.accent}
          onSelect={(c) => { setCat(c); setVisible(12); }} />
        <main className="min-w-0 flex-1">
          <Banner cfg={cfg} />
          <div className="mt-6 flex items-end justify-between border-b pb-2">
            <h1 className="text-2xl font-semibold">{cfg.title}</h1>
            <span className="text-sm text-gray-400">Total items: {products.length} items</span>
          </div>

          {products.length === 0 ? (
            <p className="py-20 text-center text-gray-400">
              {tab === "Gaming" ? "No items in this category yet." : "🚧 Coming soon! This assignment covers the Gaming page."}
            </p>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {products.slice(0, visible).map((p) => (
                <ProductCard key={p.id} p={p} days={dates?.days} />
              ))}
            </div>
          )}

          {visible < products.length && (
            <div className="mt-8 text-center">
              <p className="mb-3 text-sm text-gray-400">Showing {visible} of {products.length} results</p>
              <button onClick={() => setVisible((v) => v + 12)}
                className="rounded-full border border-gray-700 px-10 py-2 font-medium transition hover:bg-[#1E2B4F] hover:text-white">
                Show More
              </button>
            </div>
          )}
        </main>
      </div>

      <DateModal open={modal} onClose={() => setModal(false)} onConfirm={setDates} />
      {!dates && (
        <button onClick={() => setModal(true)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full border-2 border-[#8BC53F] bg-[#1E2B4F] px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-105">
          📅 Select rental dates to view prices
        </button>
      )}
    </div>
  );
}