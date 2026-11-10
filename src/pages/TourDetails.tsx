
import { Link, useParams } from "react-router-dom";
import { tours } from "../data/tours";

function TourDetails() {
  const { id } = useParams();
  const item = tours.find((tour) => tour.id === Number(id));

  if (!item) return <div className="p-20 text-center">تور پیدا نشد.</div>;

  return (
    <section className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <img src={item.image} alt={item.title} className="h-96 w-full rounded-3xl object-cover" />
      <h1 className="mt-8 text-4xl font-bold">{item.title}</h1>
      <p className="mt-4 text-gray-400">مقصد: {item.location}</p>
      <p className="mt-4 text-gray-400">مدت سفر: {item.duration}</p>
      <p className="mt-6 text-xl font-bold text-luxury-gold">
        {item.price.toLocaleString("fa-IR")} تومان
      </p>
      <Link to="/booking" className="mt-8 inline-block rounded-xl bg-luxury-gold px-8 py-3 font-bold text-luxury-dark">
        درخواست رزرو
      </Link>
    </section>
  );
}

export default TourDetails;
