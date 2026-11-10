
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Plane, UserRound } from "lucide-react";

const navigation = [
  { title: "صفحه اصلی", path: "/" },
  { title: "مقاصد", path: "/destinations" },
  { title: "هتل‌ها", path: "/hotels" },
  { title: "تورهای گردشگری", path: "/tours" },
  { title: "درباره ما", path: "/about" },
  { title: "تماس با ما", path: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-luxury-border bg-luxury-dark/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-luxury-gold text-luxury-dark">
            <Plane size={23} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-wide text-luxury-gold">
              Tripora
            </h1>
            <p className="text-[10px] text-luxury-muted">
              سفرهای خاص، تجربه‌های ماندگار
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? "font-bold text-luxury-gold"
                    : "text-gray-300 hover:text-luxury-gold"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 rounded-xl border border-luxury-border px-4 py-2 text-sm text-white transition hover:border-luxury-gold hover:text-luxury-gold"
          >
            <UserRound size={17} />
            حساب کاربری
          </Link>

          <Link
            to="/destinations"
            className="rounded-xl bg-luxury-gold px-5 py-2.5 text-sm font-bold text-luxury-dark transition hover:bg-luxury-goldDark"
          >
            شروع سفر
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
          aria-label="باز کردن منو"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-luxury-border bg-luxury-secondary px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-luxury-gold"
                    : "text-gray-300 hover:text-luxury-gold"
                }
              >
                {item.title}
              </NavLink>
            ))}

            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="text-luxury-gold"
            >
              حساب کاربری
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
