
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-black text-luxury-gold">404</h1>
      <h2 className="mt-5 text-2xl font-bold">صفحه پیدا نشد!</h2>
      <p className="mt-4 text-gray-400">
        صفحه‌ای که دنبال آن هستید وجود ندارد.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-xl bg-luxury-gold px-7 py-3 font-bold text-luxury-dark"
      >
        بازگشت به صفحه اصلی
      </Link>
    </section>
  );
}

export default NotFound;
