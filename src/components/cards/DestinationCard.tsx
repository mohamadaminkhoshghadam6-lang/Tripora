
import type { Destination } from "../../types";
import { Link } from "react-router-dom";

function DestinationCard({ item }: { item: Destination }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-luxury-border bg-luxury-card transition hover:-translate-y-1 hover:border-luxury-gold">
      <img
        src={item.image}
        alt={item.name}
        className="h-56 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-sm text-luxury-gold">{item.country}</p>
        <h3 className="mt-2 text-xl font-bold">{item.name}</h3>
        <p className="mt-3 text-sm leading-7 text-gray-400">
          {item.description}
        </p>
        <p className="mt-4 font-bold text-luxury-gold">
          از {item.price.toLocaleString("fa-IR")} تومان
        </p>
        <Link
          to={`/destinations/${item.id}`}
          className="mt-5 block rounded-xl bg-luxury-gold py-3 text-center font-bold text-luxury-dark hover:bg-luxury-goldDark"
        >
          مشاهده مقصد
        </Link>
      </div>
    </article>
  );
}

export default DestinationCard;
