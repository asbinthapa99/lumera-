import Link from "next/link";
import { prisma } from "@/lib/db";
import { isAuthed } from "@/lib/auth";
import { LoginForm } from "@/components/admin/LoginForm";
import { DeletePostButton } from "@/components/admin/DeletePostButton";

export const dynamic = "force-dynamic";

export default async function AdminHome() {
  const authed = await isAuthed();
  if (!authed) return <LoginForm />;

  const posts = await prisma.post.findMany({ orderBy: { updatedAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-heading text-2xl font-medium tracking-tight text-neutral-900">
          Posts
        </h1>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/bookings"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
          >
            Bookings
          </Link>
          <Link
            href="/admin/posts/new"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            + New post
          </Link>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-10 text-center text-sm text-neutral-500">
          No posts yet — create your first one.
        </div>
      ) : (
        <ul className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
          {posts.map((p) => (
            <li key={p.id} className="flex items-center justify-between gap-6 p-5">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span
                    className={
                      p.published
                        ? "rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700"
                        : "rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-500"
                    }
                  >
                    {p.published ? "Published" : "Draft"}
                  </span>
                  <span>·</span>
                  <span>{p.tag}</span>
                  <span>·</span>
                  <span>Updated {new Date(p.updatedAt).toLocaleDateString("en-GB")}</span>
                </div>
                <div className="mt-1 truncate font-heading text-base font-medium text-neutral-900">
                  {p.title}
                </div>
                <div className="truncate text-xs text-neutral-500">/insights/{p.slug}</div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Link href={`/admin/posts/${p.id}`} className="rounded-md border border-black/10 px-3 py-1.5 hover:bg-neutral-50">
                  Edit
                </Link>
                <DeletePostButton id={p.id} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
