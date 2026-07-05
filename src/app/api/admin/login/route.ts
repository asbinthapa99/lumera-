import { NextResponse } from "next/server";
import { checkPassword, setAdminCookie } from "@/lib/auth";

export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({ password: "" }));
  if (!checkPassword(password ?? "")) {
    return NextResponse.json({ success: false, error: "Wrong password" }, { status: 401 });
  }
  await setAdminCookie();
  return NextResponse.json({ success: true });
}
