
import { hotels } from "../../data/hotels";
import HotelCard from "../cards/HotelCard";

function FeaturedHotels() {
  return (
    <section className="bg-luxury-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm text-luxury-gold">اقامت خاص</p>
        <h2 className="mb-10 mt-3 text-3xl font-bold">هتل‌های منتخب</h2>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((item) => (
            <HotelCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedHotels;
