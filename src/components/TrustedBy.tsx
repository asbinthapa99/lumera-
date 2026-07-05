import {
  Triangle,
  Square,
  X,
  Cloud,
  Sparkles,
  Circle,
  Layers,
  Boxes,
} from "lucide-react";

const clients = [
  { name: "Vercex", Icon: Triangle },
  { name: "Votion", Icon: Square },
  { name: "XYZ", Icon: X },
  { name: "Search App", Icon: Cloud },
  { name: "Openly AI", Icon: Sparkles },
  { name: "Stries", Icon: Circle },
  { name: "I Combinator", Icon: Layers },
  { name: "Radial", Icon: Boxes },
];

export function TrustedBy() {
  return (
    <section className="border-y border-black/5 bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-neutral-600">Trusted by people at</p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8 lg:gap-4">
          {clients.map(({ name, Icon }) => (
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
