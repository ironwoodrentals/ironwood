"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import { company } from "@/lib/site";

/**
 * Newsletter signup, wired to Web3Forms (same backend as the quote form)
 * so signups actually land in the inbox instead of going nowhere.
 */
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
  "a8c6af9e-b4b3-460b-85a0-a82350197276";

export default function Inspiration() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "Newsletter signup — Ironwood website");
    data.append("from_name", "Ironwood Website");

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="inspiration" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-sm shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* Photo panel. Swap /public/inspiration.jpg for your own styled
                shot — portrait or square crops sit best here. */}
            <div className="relative min-h-70 md:min-h-full">
              <Image
                src="/inspiration.jpg"
                alt="Round tables dressed in ivory linens with candelabra and string lights at dusk"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-white p-10 sm:p-14">
              <h2 className="font-display text-3xl font-bold italic text-ink sm:text-4xl">
                Get Inspired!
              </h2>
              <div className="mt-4 h-0.5 w-12 bg-forest" />
              <p className="mt-5 text-lg leading-relaxed text-slate">
                Get a first look at new arrivals, seasonal packages and setup
                ideas for your next event or shoot.
              </p>

              {status === "success" ? (
                <p className="mt-7 flex items-center gap-3 rounded-full bg-forest/10 px-6 py-4 font-semibold text-forest">
                  <Icon name="check" size={20} />
                  You&apos;re on the list — watch your inbox.
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-7 flex flex-col gap-3 sm:flex-row"
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="h-12 w-full shrink-0 rounded-full border border-black/15 px-5 text-base text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20 sm:flex-1"
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="h-12 shrink-0 rounded-full bg-forest px-8 text-base font-semibold text-white transition hover:bg-forest-soft disabled:opacity-70"
                  >
                    {status === "sending" ? "Joining…" : "Sign Up"}
                  </button>
                </form>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-red-600">
                  Something went wrong — email us at {company.email} instead.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
