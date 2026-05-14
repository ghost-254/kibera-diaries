"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function submitContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await response.json()) as { message?: string };

    if (response.ok) {
      event.currentTarget.reset();
      setStatus("success");
      setMessage(result.message ?? "Message sent.");
      return;
    }

    setStatus("error");
    setMessage(result.message ?? "Message could not be sent.");
  }

  return (
    <form onSubmit={submitContact} className="rounded-md border border-neutral-200 bg-white p-5 shadow-xl sm:p-7">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-neutral-700">
          Name
          <input name="name" required className="focus-ring h-12 rounded-md border border-neutral-300 px-4" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-700">
          Email
          <input name="email" type="email" required className="focus-ring h-12 rounded-md border border-neutral-300 px-4" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-700">
          Subject
          <input name="subject" required className="focus-ring h-12 rounded-md border border-neutral-300 px-4" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-700">
          Message
          <textarea name="message" rows={6} required className="focus-ring rounded-md border border-neutral-300 px-4 py-3" />
        </label>
      </div>
      <button disabled={status === "loading"} className="focus-ring mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-emerald-800 px-5 font-semibold text-white hover:bg-emerald-700 disabled:opacity-60">
        <Send className="h-4 w-4" />
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
      {message ? (
        <p className={status === "success" ? "mt-4 text-sm font-medium text-emerald-700" : "mt-4 text-sm font-medium text-red-700"}>{message}</p>
      ) : null}
    </form>
  );
}
