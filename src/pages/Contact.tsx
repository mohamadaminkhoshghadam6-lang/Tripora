
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="mx-auto min-h-screen max-w-3xl px-6 py-20">
      <h1 className="mb-4 text-3xl font-bold text-luxury-gold">
        تماس با ما
      </h1>
      <p className="mb-10 text-gray-400">
        پیام خود را برای ما بنویسید.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="نام شما"
          className="w-full rounded-xl border border-luxury-border bg-luxury-card p-4 outline-none focus:border-luxury-gold"
        />

        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="ایمیل شما"
          className="w-full rounded-xl border border-luxury-border bg-luxury-card p-4 outline-none focus:border-luxury-gold"
        />

        <textarea
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="پیام شما"
          className="w-full rounded-xl border border-luxury-border bg-luxury-card p-4 outline-none focus:border-luxury-gold"
        />

        <button className="rounded-xl bg-luxury-gold px-8 py-3 font-bold text-luxury-dark">
          ارسال پیام
        </button>

        {sent && (
          <p className="text-green-400">
            پیام شما ثبت شد.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
