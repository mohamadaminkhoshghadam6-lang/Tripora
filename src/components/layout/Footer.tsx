
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-[#292F3A] bg-[#121722] text-[#F5F2EA]">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <h2 className="mb-4 text-3xl font-bold text-[#D6B46A]">
            ✈ Tripora
          </h2>
          <p className="text-sm leading-8 text-gray-400">
            با تریپورا، دنیا را متفاوت ببینید.
            مقصدهای خاص و تجربه‌های فراموش‌نشدنی
            در انتظار شما هستند.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-bold">دسترسی سریع</h3>
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <Link to="/" className="hover:text-[#D6B46A]">صفحه اصلی</Link>
            <Link to="/destinations" className="hover:text-[#D6B46A]">مقاصد گردشگری</Link>
            <Link to="/hotels" className="hover:text-[#D6B46A]">هتل‌ها</Link>
            <Link to="/tours" className="hover:text-[#D6B46A]">تورهای گردشگری</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold">درباره تریپورا</h3>
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <Link to="/about" className="hover:text-[#D6B46A]">درباره ما</Link>
            <Link to="/contact" className="hover:text-[#D6B46A]">تماس با ما</Link>
            <Link to="/dashboard" className="hover:text-[#D6B46A]">حساب کاربری</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold">ایمیل</h3>

          <a
            href="mailto:mohamadaminkhoshghadam6@gmail.com"
            dir="ltr"
            className="break-all text-sm text-gray-400 hover:text-[#D6B46A]"
          >
            ✉mohamadaminkhoshghadam6@gmail.com
          </a>

          <div className="mt-6">
            <a
              href="https://github.com/mohamadaminkhoshghadam6-lang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#292F3A] px-4 py-2 text-sm text-gray-300 transition hover:border-[#D6B46A] hover:text-[#D6B46A]"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-[#292F3A] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-gray-500 sm:flex-row">
          <p>© 2026 Tripora | تمامی حقوق محفوظ است.</p>

          <p>
            ساخته شده توسط
            <span className="mr-1 font-bold text-[#D6B46A]">
              محمد امین خوش قدم
            </span>
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
