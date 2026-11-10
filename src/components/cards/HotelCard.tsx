
import type { Hotel } from "../../types";
import { Link } from "react-router-dom";

function HotelCard({ item }: { item: Hotel }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-luxury-border bg-luxury-card">
      <img src={item.image} alt={item.name} className="h-56 w-full object-cover" />
      <div className="p-5">
        <p className="text-sm text-luxury-gold">{item.location}</p>
        <h3 className="mt-2 text-xl font-bold">{item.name}</h3>
        <p className="mt-3 text-yellow-400">
          {"★".repeat(item.rating)}
        </p>
        <p className="mt-4 font-bold text-luxury-gold">
          شبی {item.price.toLocaleString("fa-IR")} تومان
        </p>
        <Link
          to={`/hotels/${item.id}`}
          className="mt-5 block rounded-xl bg-luxury-gold py-3 text-center font-bold text-luxury-dark"
        >
          مشاهده هتل
        </Link>
      </div>
    </article>
  );
}

export default HotelCard;
