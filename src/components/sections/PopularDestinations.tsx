
import { destinations } from "../../data/destinations";
import DestinationCard from "../cards/DestinationCard";
import { Link } from "react-router-dom";

function PopularDestinations() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-luxury-gold">مقاصد منتخب</p>
          <h2 className="mt-3 text-3xl font-bold">مقاصد محبوب</h2>
        </div>
        <Link to="/destinations" className="text-sm text-luxury-gold">
          مشاهده همه ←
        </Link>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((item) => (
          <DestinationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;
