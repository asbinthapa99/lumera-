export const breakpoints = {
  phone: 390,
  tablet: 810,
  desktop: 1200,
} as const;

export const layout = {
  contentMax: 1600,
  heroTextMax: 840,
  statsMax: 1200,
  frameMax: 1200,
} as const;

export const sectionPadding = {
  hero: "160px 40px 60px 40px",
  heroMain: "40px 0px 40px 0px",
  projects: "10px 5px 100px 5px",
  standard: "100px 80px 100px 80px",
  statsCard: "48px 40px 48px 40px",
} as const;

export const gaps = {
  heroStack: 24,
  buttonRow: 16,
  buttonRowLg: 24,
  majorContainer: 44,
  projectMasonry: 10,
  serviceGrid: 24,
  skillChips: 16,
  experienceList: 20,
  worksLabelRow: 8,
  logoTicker: 100,
  servicesTicker: 24,
  heroMain: 80,
} as const;

export const radii = {
  frame: 48,
  card: 18,
  processImage: 17,
  aboutImage: 4,
  testimonialImage: 8,
  aboutInfo: 20,
  arrow: 40,
} as const;

export const shadows = {
  aboutInfo: "16px 24px 20px 8px rgba(0,0,0,0.4)",
  sectionImage: "20px 30px 20px 8px rgba(0,0,0,0.4)",
} as const;

export const gradients = {
  heroBottom: "linear-gradient(180deg, rgba(4,4,4,0) 55%, #000000 100%)",
  footerOverlay: "linear-gradient(180deg, rgba(0,0,0,0) 10%, #000000 20%)",
} as const;

export interface TextStyle {
  fontFamily: string;
  weight: number;
  sizePx: number;
  lineHeight: string;
  letterSpacing: string;
  color: string;
  tablet?: { sizePx: number };
  phone?: { sizePx: number };
}

export const text: Record<string, TextStyle> = {
  h1: {
    fontFamily: "var(--font-satoshi)",
    weight: 400,
    sizePx: 92,
    lineHeight: "1em",
    letterSpacing: "0em",
    color: "#FFFFFF",
    tablet: { sizePx: 74 },
    phone: { sizePx: 44 },
  },
  h2: {
    fontFamily: "var(--font-satoshi)",
    weight: 400,
    sizePx: 92,
    lineHeight: "1em",
    letterSpacing: "0em",
    color: "#FFFFFF",
    tablet: { sizePx: 64 },
    phone: { sizePx: 44 },
  },
  h3: {
    fontFamily: "var(--font-satoshi)",
    weight: 500,
    sizePx: 36,
    lineHeight: "1.2em",
    letterSpacing: "-0.01em",
    color: "#FFFFFF",
    tablet: { sizePx: 34 },
    phone: { sizePx: 30 },
  },
  h4: {
    fontFamily: "var(--font-plus-jakarta)",
    weight: 600,
    sizePx: 24,
    lineHeight: "1.4em",
    letterSpacing: "0em",
    color: "#FFFFFF",
  },
  body15: {
    fontFamily: "var(--font-inter)",
    weight: 400,
    sizePx: 15,
    lineHeight: "1.5em",
    letterSpacing: "-0.02em",
    color: "rgba(255,255,255,0.65)",
  },
  body18: {
    fontFamily: "var(--font-inter-display)",
    weight: 400,
    sizePx: 18,
    lineHeight: "1.6em",
    letterSpacing: "0em",
    color: "#FFFFFF",
  },
  bodyLarge: {
    fontFamily: "var(--font-inter-display)",
    weight: 400,
    sizePx: 24,
    lineHeight: "140%",
    letterSpacing: "0em",
    color: "rgba(255,255,255,0.65)",
    tablet: { sizePx: 20 },
    phone: { sizePx: 18 },
  },
};
