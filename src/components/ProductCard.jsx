import { useState } from "react";

const tagStyle = {
  Trending: "border-[#F26B3A] text-[#F26B3A]",
  New: "border-[#3B9AE1] text-[#3B9AE1]",
  "Vote to Launch": "border-[#8BC53F] text-[#6a9a2b]",
};

export default function ProductCard({ p, days }) {
  const [liked, setLiked] = useState(false);
  const [imgOk, setImgOk] = useState(true);
  const waitlist = p.tag === "Vote to Launch";

  return (
    <div className="group rounded-2xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        {p.tag ? (
          <span className={`rounded-md border px-2 py-0.5 text-xs ${tagStyle[p.tag] || ""}`}>
            {p.tag}
          </span>
        ) : (
          <span />
        )}
        {!waitlist && (
          <button
            onClick={() => setLiked(!liked)}
            className={`text-lg transition hover:scale-125 ${liked ? "text-red-500" : "text-gray-400"}`}
          >
            {liked ? "♥" : "♡"}
          </button>
        )}
      </div>

      <div className="flex h-44 items-center justify-center overflow-hidden">
        {imgOk ? (
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            onError={() => setImgOk(false)}
            className={`max-h-full object-contain transition duration-300 group-hover:scale-105 ${
              p.out_of_stock ? "opacity-50 grayscale" : ""
            }`}
          />
        ) : (
          <span className="text-sm text-gray-400">Image not available</span>
        )}
      </div>

      <h3 className="mt-3 line-clamp-2 min-h-[40px] text-sm font-medium">{p.name}</h3>

      {waitlist ? (
        <div className="mt-3">
          <p className="text-xs text-gray-500">
            ✨ We launch if 1k people join the waitlist. Get notified first!
          </p>
          <div className="relative mt-2 h-5 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full bg-[#8BC53F]" style={{ width: "1.3%" }} />
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium">
              13/1000 Joined
            </span>
          </div>
          <button className="mt-3 w-full rounded-full bg-[#C5EE3A] py-2 text-sm font-semibold transition hover:brightness-95">
            Join Waitlist
          </button>
        </div>
      ) : (
        <div className="mt-3 flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-400">
              {days ? `For ${days} day${days > 1 ? "s" : ""}` : "Select Dates to view price"}
            </p>
            <p className={`text-sm font-semibold ${days ? "" : "select-none blur-sm"}`}>
              ₹{p.per_day_rent * (days || 1)}
            </p>
          </div>
          {p.out_of_stock ? (
            <span className="text-xs text-red-500">Out of stock</span>
          ) : (
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 text-xl transition hover:bg-[#1E2B4F] hover:text-white">
              +
            </button>
          )}
        </div>
      )}
    </div>
  );
}