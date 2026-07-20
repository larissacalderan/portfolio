// Technologies displayed in TechStack component
export const TECHNOLOGIES = [
  "html.svg",
  "css.svg",
  "javascript.svg",
  "typescript.svg",
  "react.svg",
  "nextjs.png",
  "tailwindcss.svg",
  "nodejs.png",
  "expressjs.png",
  "nestjs.svg",
  "mongodb.svg",
  "prisma.png",
  "python.png",
  "javaa.png",
  "git.svg",
  "githubdark.svg",
  "docker.svg",
] as const;

// Icons that need invert filter on dark background
export const INVERTED_TECH_ICONS = [
  "expressjs.png",
  "githubdark.svg",
  "nextjs.png",
  "prisma.png",
];

// Format tech name for display
export const formatTechName = (filename: string): string => {
  const name = filename.split(".")[0];

  const exceptions: Record<string, string> = {
    githubdark: "GitHub",
    javascript: "JavaScript",
    typescript: "TypeScript",
    tailwindcss: "Tailwind CSS",
    mongodb: "MongoDB",
    html: "HTML",
    css: "CSS",
    python: "Python",
    javaa: "Java",
  };

  if (exceptions[name]) return exceptions[name];

  return name.charAt(0).toUpperCase() + name.slice(1).replace("js", ".js");
};

// Check if icon needs invert filter
export const isInvertedIcon = (techName: string): boolean =>
  INVERTED_TECH_ICONS.some((t) => techName.includes(t));
