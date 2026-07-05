"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      setStatus("error");
      return;
    }
    router.replace("/admin");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-sm">
      <h1 className="font-heading text-2xl font-medium tracking-tight text-neutral-900">
        Admin sign-in
      </h1>
      <p className="mt-2 text-sm text-neutral-600">
        Enter the admin password to manage posts.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          required
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/5"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-70"
        >
          {status === "loading" ? "Signing in…" : "Sign in"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-600">Wrong password.</p>
        )}
      </form>
    </div>
  );
}
