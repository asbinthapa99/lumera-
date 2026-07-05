import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/db";
import { isAuthed } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminBookings() {
  if (!(await isAuthed())) redirect("/admin");
  const bookings = await prisma.booking.findMany({ orderBy: [{ date: "desc" }, { time: "desc" }] });

  return (
    <div>
      <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>
      <h1 className="mt-4 font-heading text-2xl font-medium tracking-tight text-neutral-900">
        Office visit bookings
      </h1>
      {bookings.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-10 text-center text-sm text-neutral-500">
          No bookings yet.
        </div>
      ) : (
        <ul className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
          {bookings.map((b) => (
            <li key={b.id} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-medium text-neutral-900">
                  {b.name} <span className="text-neutral-400">·</span>{" "}
                  <a href={`mailto:${b.email}`} className="text-neutral-600 hover:underline">
                    {b.email}
                  </a>
                </div>
                {b.notes && (
                  <p className="mt-1 max-w-xl text-sm text-neutral-600 whitespace-pre-line">
                    {b.notes}
                  </p>
                )}
              </div>
              <div className="text-sm text-neutral-700">
                {new Date(`${b.date}T${b.time}:00`).toLocaleDateString("en-GB", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}{" "}
                · {b.time}
                <span className={
                  "ml-3 rounded-full px-2 py-0.5 text-xs " +
                  (b.status === "confirmed"
                    ? "bg-emerald-100 text-emerald-700"
                    : b.status === "cancelled"
                      ? "bg-neutral-100 text-neutral-500"
                      : "bg-amber-100 text-amber-700")
                }>
                  {b.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
