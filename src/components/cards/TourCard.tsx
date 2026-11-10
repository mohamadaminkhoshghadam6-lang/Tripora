
import type { Tour } from "../../types";
import { Link } from "react-router-dom";

function TourCard({ item }: { item: Tour }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-luxury-border bg-luxury-card">
      <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
      <div className="p-5">
        <p className="text-sm text-luxury-gold">{item.location}</p>
        <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
        <p className="mt-3 text-sm text-gray-400">{item.duration}</p>
        <p className="mt-4 font-bold text-luxury-gold">
          {item.price.toLocaleString("fa-IR")} تومان
        </p>
        <Link
          to={`/tours/${item.id}`}
          className="mt-5 block rounded-xl bg-luxury-gold py-3 text-center font-bold text-luxury-dark"
        >
          مشاهده تور
        </Link>
      </div>
    </article>
  );
}

export default TourCard;
