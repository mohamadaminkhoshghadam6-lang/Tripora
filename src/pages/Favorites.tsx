
import { destinations } from "../data/destinations";
import DestinationCard from "../components/cards/DestinationCard";

function Favorites() {
  const favoriteIds: number[] = JSON.parse(
    localStorage.getItem("tripora-favorites") || "[]"
  );

  const favoriteItems = destinations.filter((item) =>
    favoriteIds.includes(item.id)
  );

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 py-16">
      <h1 className="mb-10 text-3xl font-bold text-luxury-gold">
        علاقه‌مندی‌های من
      </h1>

      {favoriteItems.length === 0 ? (
        <p className="text-gray-400">
          هنوز مقصدی به علاقه‌مندی‌ها اضافه نشده است.
        </p>
      ) : (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {favoriteItems.map((item) => (
            <DestinationCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;
