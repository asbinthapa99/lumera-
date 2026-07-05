import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";

const bookingSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  notes: z.string().max(2000).optional().default(""),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date"),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time"),
});

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = bookingSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid input", issues: parsed.error.issues },
      { status: 422 },
    );
  }
  const { date, time } = parsed.data;
  // Reject dates in the past
  const now = new Date();
  const target = new Date(`${date}T${time}:00`);
  if (target.getTime() < now.getTime()) {
    return NextResponse.json({ success: false, error: "Slot is in the past" }, { status: 400 });
  }

  const clash = await prisma.booking.findFirst({
    where: { date, time, status: { not: "cancelled" } },
  });
  if (clash) {
    return NextResponse.json({ success: false, error: "Slot already taken" }, { status: 409 });
  }

  const booking = await prisma.booking.create({ data: { ...parsed.data, status: "pending" } });
  return NextResponse.json({ success: true, id: booking.id });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  if (!date) return NextResponse.json({ taken: [] });
  const bookings = await prisma.booking.findMany({
    where: { date, status: { not: "cancelled" } },
    select: { time: true },
  });
  return NextResponse.json({ taken: bookings.map((b) => b.time) });
}
