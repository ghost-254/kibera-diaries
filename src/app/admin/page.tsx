"use client";

import Link from "next/link";
import { Children, useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { LogOut, Mail, ShieldCheck, Ticket, type LucideIcon } from "lucide-react";
import { auth, db, firebaseConfigured } from "@/lib/firebase/client";

type BookingRecord = {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  tourTitle?: string;
  tourDate?: string;
  status?: string;
  createdAt?: string;
};

type MessageRecord = {
  id: string;
  name?: string;
  email?: string;
  subject?: string;
  createdAt?: string;
};

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(!auth);
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [messages, setMessages] = useState<MessageRecord[]>([]);

  useEffect(() => {
    if (!auth) {
      return;
    }

    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);
    });
  }, []);

  useEffect(() => {
    if (!user || !db) return;

    const bookingsQuery = query(collection(db, "bookings"), orderBy("createdAt", "desc"), limit(12));
    const messagesQuery = query(collection(db, "contactMessages"), orderBy("createdAt", "desc"), limit(12));

    const unsubscribeBookings = onSnapshot(bookingsQuery, (snapshot) => {
      setBookings(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as BookingRecord)));
    });
    const unsubscribeMessages = onSnapshot(messagesQuery, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as MessageRecord)));
    });

    return () => {
      unsubscribeBookings();
      unsubscribeMessages();
    };
  }, [user]);

  if (!authReady) {
    return <AdminShell title="Loading admin..." />;
  }

  if (!firebaseConfigured) {
    return (
      <AdminShell title="Admin setup needed">
        <p className="max-w-2xl leading-7 text-neutral-600">
          The private dashboard is not ready yet. Finish the secure admin configuration before using this area.
        </p>
      </AdminShell>
    );
  }

  if (!user) {
    return (
      <AdminShell title="Admin access">
        <p className="leading-7 text-neutral-600">Please sign in to manage bookings and messages.</p>
        <Link href="/admin/login" className="focus-ring mt-5 inline-flex h-11 items-center justify-center rounded-md bg-emerald-800 px-5 font-semibold text-white hover:bg-emerald-700">
          Sign in
        </Link>
      </AdminShell>
    );
  }

  return (
    <AdminShell title="Dashboard">
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-md border border-neutral-200 bg-white p-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-800">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold">{user.email}</p>
            <p className="text-sm text-neutral-600">Signed in to the private dashboard</p>
          </div>
        </div>
        <button onClick={() => auth && signOut(auth)} className="focus-ring inline-flex h-10 items-center justify-center gap-2 rounded-md border border-neutral-300 px-4 text-sm font-semibold hover:bg-neutral-50">
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AdminPanel icon={Ticket} title="Recent bookings" empty="No bookings yet.">
          {bookings.map((booking) => (
            <div key={booking.id} className="border-b border-neutral-100 py-4 last:border-0">
              <p className="font-semibold">{booking.firstName} {booking.lastName}</p>
              <p className="mt-1 text-sm text-neutral-600">{booking.tourTitle} on {booking.tourDate}</p>
              <p className="mt-1 text-sm text-neutral-500">{booking.email} | {booking.status ?? "pending"}</p>
            </div>
          ))}
        </AdminPanel>
        <AdminPanel icon={Mail} title="Recent messages" empty="No messages yet.">
          {messages.map((message) => (
            <div key={message.id} className="border-b border-neutral-100 py-4 last:border-0">
              <p className="font-semibold">{message.subject}</p>
              <p className="mt-1 text-sm text-neutral-600">{message.name} | {message.email}</p>
            </div>
          ))}
        </AdminPanel>
      </div>
    </AdminShell>
  );
}

function AdminShell({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-32 sm:px-8 lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">Admin</p>
      <h1 className="mt-3 text-5xl font-semibold tracking-normal">{title}</h1>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function AdminPanel({
  icon: Icon,
  title,
  empty,
  children,
}: {
  icon: LucideIcon;
  title: string;
  empty: string;
  children: ReactNode;
}) {
  const hasItems = Children.count(children) > 0;

  return (
    <section className="rounded-md border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
        <Icon className="h-5 w-5 text-amber-500" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {hasItems ? <div>{children}</div> : <p className="py-8 text-neutral-600">{empty}</p>}
    </section>
  );
}
