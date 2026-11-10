
function Dashboard() {
  const bookings = JSON.parse(
    localStorage.getItem("tripora-bookings") || "[]"
  );

  return (
    <section className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <h1 className="mb-10 text-3xl font-bold text-luxury-gold">
        داشبورد کاربری
      </h1>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-luxury-border bg-luxury-card p-7">
          <p className="text-gray-400">تعداد درخواست‌ها</p>
          <h2 className="mt-4 text-4xl font-bold text-luxury-gold">
            {bookings.length.toLocaleString("fa-IR")}
          </h2>
        </div>

        <div className="rounded-2xl border border-luxury-border bg-luxury-card p-7">
          <p className="text-gray-400">وضعیت حساب</p>
          <h2 className="mt-4 text-2xl font-bold">مهمان</h2>
        </div>
      </div>

      <h2 className="mb-5 mt-12 text-2xl font-bold">درخواست‌های ثبت‌شده</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-400">هنوز درخواستی ثبت نکرده‌اید.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking: { name: string; phone: string; date: string }, index: number) => (
            <div key={index} className="rounded-xl border border-luxury-border bg-luxury-card p-5">
              <p>نام: {booking.name}</p>
              <p className="mt-2 text-gray-400">شماره: {booking.phone}</p>
              <p className="mt-2 text-gray-400">تاریخ: {booking.date}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Dashboard;
