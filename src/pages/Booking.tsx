
import { useState } from "react";

function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const booking = {
      name,
      phone,
      date,
      createdAt: new Date().toISOString(),
    };

    const oldBookings = JSON.parse(
      localStorage.getItem("tripora-bookings") || "[]"
    );

    localStorage.setItem(
      "tripora-bookings",
      JSON.stringify([...oldBookings, booking])
    );

    setSuccess(true);
    setName("");
    setPhone("");
    setDate("");
  }

  return (
    <section className="mx-auto min-h-screen max-w-2xl px-6 py-20">
      <h1 className="mb-4 text-3xl font-bold text-luxury-gold">درخواست رزرو</h1>
      <p className="mb-8 text-gray-400">
        اطلاعات خود را وارد کنید.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام و نام خانوادگی"
          className="w-full rounded-xl border border-luxury-border bg-luxury-card p-4 outline-none"
        />

        <input
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="شماره تماس"
          className="w-full rounded-xl border border-luxury-border bg-luxury-card p-4 outline-none"
        />

        <input
          required
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-xl border border-luxury-border bg-luxury-card p-4 outline-none"
        />

        <button className="w-full rounded-xl bg-luxury-gold p-4 font-bold text-luxury-dark">
          ثبت درخواست
        </button>
      </form>

      {success && (
        <p className="mt-6 text-green-400">
         درخواست شما در مرورگر ثبت شد. 
        </p>
      )}
    </section>
  );
}

export default Booking;
