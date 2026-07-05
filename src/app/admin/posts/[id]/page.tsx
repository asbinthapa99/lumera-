import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { isAuthed } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { PostEditor } from "@/components/admin/PostEditor";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!(await isAuthed())) redirect("/admin");
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) notFound();
  return (
    <div>
      <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>
      <h1 className="mt-4 font-heading text-2xl font-medium tracking-tight text-neutral-900">
        Edit post
      </h1>
      <div className="mt-8">
        <PostEditor
          initial={{
            id: post.id,
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            body: post.body,
            tag: post.tag,
            cover: post.cover,
            author: post.author,
            readMinutes: post.readMinutes,
            published: post.published,
          }}
        />
      </div>
    </div>
  );
}
