import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { isAuthed } from "@/lib/auth";

const postSchema = z.object({
  slug: z.string().min(1).max(120).regex(/^[a-z0-9-]+$/, "lowercase letters, numbers, dashes only"),
  title: z.string().min(1).max(200),
  excerpt: z.string().min(1).max(400),
  body: z.string().min(1).max(50_000),
  tag: z.string().min(1).max(40),
  cover: z.string().url().or(z.literal("")),
  author: z.string().min(1).max(80),
  readMinutes: z.number().int().min(1).max(120),
  published: z.boolean(),
});

export async function GET() {
  const authed = await isAuthed();
  const posts = await prisma.post.findMany({
    where: authed ? undefined : { published: true },
    orderBy: { publishedAt: "desc" },
  });
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }
  const payload = await request.json().catch(() => null);
  const parsed = postSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid input", issues: parsed.error.issues },
      { status: 422 },
    );
  }
  try {
    const post = await prisma.post.create({ data: parsed.data });
    return NextResponse.json({ success: true, post });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to create post";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
