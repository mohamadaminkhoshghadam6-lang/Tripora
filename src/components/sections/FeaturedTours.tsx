
import { tours } from "../../data/tours";
import TourCard from "../cards/TourCard";

function FeaturedTours() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm text-luxury-gold">پیشنهادهای ویژه</p>
      <h2 className="mb-10 mt-3 text-3xl font-bold">تورهای گردشگری</h2>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((item) => (
          <TourCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedTours;
