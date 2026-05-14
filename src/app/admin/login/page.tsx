"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LockKeyhole } from "lucide-react";
import { useState } from "react";
import { auth, firebaseConfigured } from "@/lib/firebase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!auth) {
      setError("Admin access is not ready yet. Please finish the private dashboard setup.");
      return;
    }

    setLoading(true);
    setError("");
    const formData = new FormData(event.currentTarget);

    try {
      await signInWithEmailAndPassword(auth, String(formData.get("email")), String(formData.get("password")));
      router.push("/admin");
    } catch {
      setError("Login failed. Check your email and password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto flex min-h-[80svh] max-w-md items-center px-5 py-32">
      <form onSubmit={login} className="w-full rounded-md border border-neutral-200 bg-white p-7 shadow-xl">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-emerald-800">
          <LockKeyhole className="h-6 w-6" />
        </div>
        <h1 className="text-3xl font-semibold">Admin login</h1>
        <p className="mt-2 leading-7 text-neutral-600">Sign in to manage bookings and messages.</p>
        {!firebaseConfigured ? (
          <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
            Admin access is not configured yet.
          </p>
        ) : null}
        <div className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-medium text-neutral-700">
            Email
            <input name="email" type="email" required className="focus-ring h-12 rounded-md border border-neutral-300 px-4" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-neutral-700">
            Password
            <input name="password" type="password" required className="focus-ring h-12 rounded-md border border-neutral-300 px-4" />
          </label>
        </div>
        <button disabled={loading} className="focus-ring mt-5 h-12 w-full rounded-md bg-neutral-950 font-semibold text-white hover:bg-emerald-900 disabled:opacity-60">
          {loading ? "Signing in..." : "Sign in"}
        </button>
        {error ? <p className="mt-4 text-sm font-medium text-red-700">{error}</p> : null}
        <Link href="/" className="mt-5 inline-block text-sm font-medium text-emerald-800 hover:text-emerald-700">
          Back to website
        </Link>
      </form>
    </section>
  );
}
