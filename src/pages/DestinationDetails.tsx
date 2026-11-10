
import { Link, useParams } from "react-router-dom";
import { destinations } from "../data/destinations";

function DestinationDetails() {
  const { id } = useParams();
  const item = destinations.find((destination) => destination.id === Number(id));

  if (!item) {
    return <div className="p-20 text-center">مقصد پیدا نشد.</div>;
  }

  return (
    <section className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <img src={item.image} alt={item.name} className="h-96 w-full rounded-3xl object-cover" />
      <p className="mt-8 text-luxury-gold">{item.country}</p>
      <h1 className="mt-3 text-4xl font-bold">{item.name}</h1>
      <p className="mt-5 leading-9 text-gray-400">{item.description}</p>
      <p className="mt-6 text-xl font-bold text-luxury-gold">
        از {item.price.toLocaleString("fa-IR")} تومان
      </p>
      <Link to="/booking" className="mt-8 inline-block rounded-xl bg-luxury-gold px-8 py-3 font-bold text-luxury-dark">
        درخواست رزرو
      </Link>
    </section>
  );
}

export default DestinationDetails;
