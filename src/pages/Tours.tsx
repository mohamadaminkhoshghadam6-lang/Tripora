
import { tours } from "../data/tours";
import TourCard from "../components/cards/TourCard";

function Tours() {
  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 py-16">
      <h1 className="mb-10 text-3xl font-bold text-luxury-gold">
        تورهای گردشگری
      </h1>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((item) => (
          <TourCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
