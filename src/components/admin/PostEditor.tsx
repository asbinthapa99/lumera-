"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

export interface EditorPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  tag: string;
  cover: string;
  author: string;
  readMinutes: number;
  published: boolean;
}

const EMPTY: EditorPost = {
  slug: "",
  title: "",
  excerpt: "",
  body: "",
  tag: "Insights",
  cover: "",
  author: "Lumera Team",
  readMinutes: 3,
  published: true,
};

export function PostEditor({ initial }: { initial?: EditorPost }) {
  const router = useRouter();
  const [post, setPost] = useState<EditorPost>(initial ?? EMPTY);
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [preview, setPreview] = useState(false);

  function update<K extends keyof EditorPost>(k: K, v: EditorPost[K]) {
    setPost((p) => ({ ...p, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("saving");
    setError("");
    const url = initial?.id ? `/api/posts/${initial.id}` : "/api/posts";
    const method = initial?.id ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: post.slug.trim(),
        title: post.title.trim(),
        excerpt: post.excerpt.trim(),
        body: post.body,
        tag: post.tag.trim(),
        cover: post.cover.trim(),
        author: post.author.trim(),
        readMinutes: Number(post.readMinutes) || 3,
        published: post.published,
      }),
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      setError(j.error ?? "Save failed");
      setStatus("error");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-4">
        <Field label="Title">
          <input
            required
            value={post.title}
            onChange={(e) => update("title", e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5"
          />
        </Field>

        <Field label="Slug (URL)">
          <input
            required
            value={post.slug}
            onChange={(e) => update("slug", e.target.value.toLowerCase())}
            placeholder="how-we-work-in-nepal"
            pattern="[a-z0-9-]+"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5"
          />
        </Field>

        <Field label="Excerpt">
          <textarea
            required
            rows={3}
            value={post.excerpt}
            onChange={(e) => update("excerpt", e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5"
          />
        </Field>

        <div className="rounded-xl border border-black/10 bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-4 py-2">
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Body (Markdown)
            </span>
            <button
              type="button"
              onClick={() => setPreview((v) => !v)}
              className="text-xs text-neutral-600 hover:text-neutral-900"
            >
              {preview ? "Edit" : "Preview"}
            </button>
          </div>
          {preview ? (
            <div className="prose prose-neutral max-w-none p-6 text-sm">
              <ReactMarkdown>{post.body || "*Nothing to preview yet.*"}</ReactMarkdown>
            </div>
          ) : (
            <textarea
              required
              rows={18}
              value={post.body}
              onChange={(e) => update("body", e.target.value)}
              placeholder="# Heading\n\nWrite in Markdown. Supports **bold**, *italics*, [links](https://), lists, images…"
              className="w-full rounded-b-xl bg-white px-4 py-3 font-mono text-sm focus:outline-none"
            />
          )}
        </div>
      </div>

      <aside className="space-y-4">
        <Field label="Cover image URL">
          <input
            value={post.cover}
            onChange={(e) => update("cover", e.target.value)}
            placeholder="https://…"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5"
          />
          {post.cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.cover} alt="" className="mt-2 aspect-[16/9] w-full rounded-lg object-cover" />
          )}
        </Field>

        <Field label="Tag">
          <input
            value={post.tag}
            onChange={(e) => update("tag", e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5"
          />
        </Field>

        <Field label="Author">
          <input
            value={post.author}
            onChange={(e) => update("author", e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5"
          />
        </Field>

        <Field label="Read time (minutes)">
          <input
            type="number"
            min={1}
            max={120}
            value={post.readMinutes}
            onChange={(e) => update("readMinutes", Number(e.target.value))}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5"
          />
        </Field>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={post.published}
            onChange={(e) => update("published", e.target.checked)}
          />
          Published
        </label>

        <button
          type="submit"
          disabled={status === "saving"}
          className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-70"
        >
          {status === "saving" ? "Saving…" : initial?.id ? "Save changes" : "Create post"}
        </button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </aside>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
