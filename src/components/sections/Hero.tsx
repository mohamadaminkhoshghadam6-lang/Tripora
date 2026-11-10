
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    navigate(`/destinations?search=${encodeURIComponent(search)}`);
  }

  return (
    <section className="relative flex min-h-[620px] items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1800"
        alt="منظره زیبای سفر"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
        <p className="mb-5 font-bold text-luxury-gold">
          تجربه‌ای متفاوت از سفر
        </p>

        <h1 className="max-w-3xl text-4xl font-black leading-relaxed text-white md:text-6xl">
          دنیا را با تریپورا
          <span className="text-luxury-gold"> متفاوت </span>
          کشف کنید
        </h1>

        <p className="mt-6 max-w-xl leading-8 text-gray-200">
          مقصدهای شگفت‌انگیز، هتل‌های خاص و تورهای فراموش‌نشدنی
          را در یک تجربه متفاوت پیدا کنید.
        </p>

        <div className="mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 sm:flex-row">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && handleSearch()}
            placeholder="کجا دوست دارید سفر کنید؟"
            className="min-w-0 flex-1 px-4 py-3 text-gray-900 outline-none"
          />
          <button
            onClick={handleSearch}
            className="rounded-xl bg-luxury-gold px-8 py-3 font-bold text-luxury-dark"
          >
            جستجوی مقصد
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
