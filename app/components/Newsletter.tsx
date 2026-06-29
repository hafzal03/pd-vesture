// app/components/Newsletter.tsx

"use client";

export default function Newsletter() {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#2a2a2a] bg-[#111111] px-8 py-20 text-center lg:px-16">
        <span className="mb-4 block text-sm uppercase tracking-[0.35em] text-[#C9A14A]">
          Exclusive Access
        </span>

        <h2 className="mb-6 text-4xl font-light text-[#F8F6F2] md:text-5xl">
          Join the Pd_vesture Community
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-400">
          Be the first to discover new collections, limited editions, exclusive
          offers, and editorial stories delivered directly to your inbox.
        </p>

        <form className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-full border border-[#333] bg-[#0B0B0B] px-6 py-4 text-white outline-none transition focus:border-[#C9A14A]"
          />

          <button
            type="submit"
            className="rounded-full bg-[#C9A14A] px-8 py-4 font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#d8b05b]"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}