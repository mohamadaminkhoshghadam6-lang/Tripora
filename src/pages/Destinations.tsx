
import { useSearchParams } from "react-router-dom";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/cards/DestinationCard";

function Destinations() {
  const [params, setParams] = useSearchParams();
  const search = params.get("search") || "";

  const filtered = destinations.filter((item) =>
    `${item.name} ${item.country}`.includes(search)
  );

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold text-luxury-gold">
        مقاصد گردشگری
      </h1>

      <input
        value={search}
        onChange={(event) => setParams({ search: event.target.value })}
        placeholder="جستجوی مقصد..."
        className="mb-10 w-full max-w-md rounded-xl border border-luxury-border bg-luxury-card px-5 py-4 text-white outline-none focus:border-luxury-gold"
      />

      {filtered.length ? (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item) => (
            <DestinationCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">مقصدی پیدا نشد.</p>
      )}
    </section>
  );
}

export default Destinations;
