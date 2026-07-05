import {
  Braces,
  Atom,
  Smartphone,
  Cloud,
  Database,
  Palette,
  Container,
  Zap,
  Cpu,
  Server,
  Globe,
  GitBranch,
} from "lucide-react";

const stack = [
  { name: "Next.js", Icon: Globe },
  { name: "TypeScript", Icon: Braces },
  { name: "React Native", Icon: Atom },
  { name: "Flutter", Icon: Smartphone },
  { name: "Node.js", Icon: Server },
  { name: "Python", Icon: Cpu },
  { name: "PostgreSQL", Icon: Database },
  { name: "AWS", Icon: Cloud },
  { name: "Vercel", Icon: Zap },
  { name: "Docker", Icon: Container },
  { name: "GitHub", Icon: GitBranch },
  { name: "Figma", Icon: Palette },
];

export function TechStack() {
  return (
    <section className="border-y border-black/5 bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-neutral-600">Tech we build with</p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-4">
          {stack.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex items-center justify-center gap-2 text-neutral-400 hover:text-neutral-700 transition-colors"
            >
              <Icon className="h-5 w-5" strokeWidth={2} />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
