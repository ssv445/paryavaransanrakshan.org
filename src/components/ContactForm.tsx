"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "ok" | "err";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.error ?? "Something went wrong.");
      setStatus("ok");
      setMessage("Thanks — your message has been sent. We will be in touch soon.");
      form.reset();
    } catch (err) {
      setStatus("err");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Your name" required />
        <Field name="email" label="Email" type="email" required />
      </div>
      <Field name="subject" label="Subject" />
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-ink outline-none transition-colors focus:border-vana focus:ring-2 focus:ring-vana/20"
        />
      </label>
      {/* honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-vana px-5 py-3 font-semibold text-cream transition-colors hover:bg-vana-dark disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>

      {status === "ok" && (
        <p role="status" className="rounded-lg bg-vana/10 px-4 py-3 text-sm text-vana-dark">
          {message}
        </p>
      )}
      {status === "err" && (
        <p role="alert" className="rounded-lg bg-terracotta/10 px-4 py-3 text-sm text-terracotta">
          {message}
        </p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-terracotta">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-ink outline-none transition-colors focus:border-vana focus:ring-2 focus:ring-vana/20"
      />
    </label>
  );
}
