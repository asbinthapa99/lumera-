import Link from "next/link";
import { isAuthed } from "@/lib/auth";
import { LogoutButton } from "@/components/admin/LogoutButton";

export const metadata = {
  title: "Admin — Lumera Technologies",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await isAuthed();
  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded bg-black text-white text-[11px] font-semibold">
              L
            </span>
            <span className="text-sm font-medium">Lumera admin</span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <Link href="/" target="_blank" className="hover:text-neutral-900">
              View site ↗
            </Link>
            {authed && <LogoutButton />}
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
