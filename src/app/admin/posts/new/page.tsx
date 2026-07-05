import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { isAuthed } from "@/lib/auth";
import { PostEditor } from "@/components/admin/PostEditor";

export const dynamic = "force-dynamic";

export default async function NewPostPage() {
  if (!(await isAuthed())) redirect("/admin");
  return (
    <div>
      <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>
      <h1 className="mt-4 font-heading text-2xl font-medium tracking-tight text-neutral-900">
        New post
      </h1>
      <div className="mt-8">
        <PostEditor />
      </div>
    </div>
  );
}
