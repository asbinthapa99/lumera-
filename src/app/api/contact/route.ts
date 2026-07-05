import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  company: z.string().max(120).optional().nullable(),
  service: z.string().max(60).optional().nullable(),
  message: z.string().min(10).max(4000),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid input", issues: parsed.error.issues },
      { status: 422 },
    );
  }

  // TODO: integrate with Resend / Postmark / SES / Slack webhook.
  // For now, log server-side and pretend-send.
  const data = parsed.data;
  const summary = `[Lumera contact] ${data.name} <${data.email}> — ${data.service ?? "?"}`;
  // Intentionally not logging the full message body.
  void summary;

  return NextResponse.json({ success: true });
}
