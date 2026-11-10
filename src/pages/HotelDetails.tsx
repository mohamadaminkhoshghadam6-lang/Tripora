
import { Link, useParams } from "react-router-dom";
import { hotels } from "../data/hotels";

function HotelDetails() {
  const { id } = useParams();
  const item = hotels.find((hotel) => hotel.id === Number(id));

  if (!item) return <div className="p-20 text-center">هتل پیدا نشد.</div>;

  return (
    <section className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <img src={item.image} alt={item.name} className="h-96 w-full rounded-3xl object-cover" />
      <h1 className="mt-8 text-4xl font-bold">{item.name}</h1>
      <p className="mt-4 text-gray-400">{item.location}</p>
      <p className="mt-4 text-yellow-400">امتیاز: {item.rating} از ۵</p>
      <p className="mt-6 text-xl font-bold text-luxury-gold">
        هر شب {item.price.toLocaleString("fa-IR")} تومان
      </p>
      <Link to="/booking" className="mt-8 inline-block rounded-xl bg-luxury-gold px-8 py-3 font-bold text-luxury-dark">
        درخواست رزرو
      </Link>
    </section>
  );
}

export default HotelDetails;
