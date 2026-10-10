// Site configuration
export const SITE_CONFIG = {
  name: "Larissa Calderan",
  shortName: "Larissa Calderan",
  description:
    "Desenvolvedora Full-Stack em formação, com foco no ecossistema JavaScript/TypeScript. Tenho desenvolvido projetos utilizando React, Next.js, TypeScript, Tailwind CSS e outras tecnologias modernas, buscando transformar ideias em aplicações funcionais, responsivas e bem estruturadas.\n\nGosto de entender os desafios de cada projeto e criar soluções intuitivas, organizadas e de fácil manutenção. Estou sempre aprendendo novas tecnologias, aprimorando minhas habilidades e seguindo boas práticas de desenvolvimento para evoluir constantemente como profissional.",
  email: "larissacalderan@gmail.com",
} as const;

// Social media links
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/larissacalderan/",
  github: "https://github.com/larissacalderan",
  discord: "https://discord.gg/zKZn94BgBY",
  whatsapp: "https://wa.me/5543996767663",
} as const;

// Social cards for Hero section
export const SOCIAL_CARDS: SocialCard[] = [
  {
    name: "Instagram",
    url: SOCIAL_LINKS.instagram,
    icon: "/insta.png",
    color: "#E1306C",
  },
  {
    name: "GitHub",
    url: SOCIAL_LINKS.github,
    icon: "/githubdark.svg",
    invert: true,
  },
  {
    name: "Discord",
    url: SOCIAL_LINKS.discord,
    icon: "/discord.svg",
    color: "#5865F2",
  },
  {
    name: "WhatsApp",
    url: SOCIAL_LINKS.whatsapp,
    icon: "/whatsapp.png",
    color: "#25D366",
  },
];

// Social card type
interface SocialCard {
  name: string;
  url: string;
  icon: string;
  color?: string;
  invert?: boolean;
}

// FormSubmit configuration
export const FORM_CONFIG = {
  endpoint: `https://formsubmit.co/ajax/${SITE_CONFIG.email}`,
} as const;
