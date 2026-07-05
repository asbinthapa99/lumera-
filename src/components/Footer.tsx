import Link from "next/link";

export function Footer() {
  const groups: { title: string; links: { href: string; label: string }[] }[] = [
    {
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/careers", label: "Careers" },
        { href: "/insights", label: "Insights" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/app-development", label: "App Development" },
        { href: "/services/ai-development", label: "AI Development" },
        { href: "/services/ai-automation", label: "AI Automation" },
        { href: "/services/cloud-backend", label: "Cloud & DevOps" },
        { href: "/services/maintenance", label: "Maintenance" },
      ],
    },
    {
      title: "Work",
      links: [
        { href: "/work/sajilo-pay", label: "Sajilo Pay" },
        { href: "/work/himal-freight", label: "Himal Freight" },
        { href: "/work/aakash-edtech", label: "Aakash EdTech" },
        { href: "/work/mero-clinic", label: "Mero Clinic" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-black text-white text-[13px] font-semibold">
                L
              </span>
              <span className="font-heading text-[15px] font-medium tracking-tight">
                Lumera <span className="text-neutral-500">Technologies</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-neutral-500 leading-relaxed">
              Software built in Kathmandu, for the world.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                {g.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-neutral-600 hover:text-neutral-900"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lumera Technologies Pvt. Ltd. All rights reserved.</p>
          <p>Made with care in Kathmandu, Nepal.</p>
        </div>
      </div>
    </footer>
  );
}
