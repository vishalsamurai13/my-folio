export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "DNK Worldwide",
    description:
      "Built a full-stack logistics web application that enables users to send packages worldwide at competitive rates.",
    technologies: ["MongoDB", "NextJs", "ExpressJS"],
    github: "https://github.com/vishalsamurai13/dnk-worldwide",
    demo: "https://www.dnkwordwide.com/",
    image: require(".//../../public/projects/DnkImage.png"),
    available: true,
  },
  {
    id: 1,
    name: "Noted",
    description:
      "Designed and Developed a collaborative note-taking platform with real-time syncing, enabling seamless teamwork with clean UI.",
    technologies: ["React", "NextJs", "Redux", "Convex.Dev"],
    github: "https://github.com/vishalsamurai13/next14-Noted",
    demo: "https://noted-web-app.vercel.app/",
    image: require(".//../../public/projects/Noted.png"),
    available: true,
  },
  {
    id: 2,
    name: "Dilli District",
    description:
      "Developed a e-commerce website with modern outfits at affordable prices",
    technologies: ["React", "Next.js", "Shopify", "PostgreSQL"],
    github: "https://github.com/rushiii3/dilli-disco-district",
    demo: "https://dilli-disco-district.vercel.app/product",
    image: require(".//../../public/projects/DDD.png"),
    available: true,
  },
  {
    id: 3,
    name: "Valorant Space",
    description:
      "Designed and developed a space serving valorant community to find teammates and explore marketplace to buy/sell/trade accounts or skins.",
    technologies: ["React", "Tailwind CSS", "GSAP"],
    github: "https://github.com/vishalsamurai13/valorant-website",
    demo: "https://valorant-website-inky.vercel.app/",
    image: require(".//../../public/projects/Valorant.png"),
    available: true,
  },
  {
    id: 4,
    name: "Cirrcle Up",
    description:
      "A website for a startup which helps companies choose their board of directors and also helps achieve the leadership and build strategies.",
    technologies: ["Next.js", "Typescript", "Tailwind CSS"],
    github: "https://github.com/vishalsamurai13/CirrcleUp",
    demo: "https://cirrcleup.com/",
    image: require(".//../../public/projects/CirrcleUp.png"),
    available: true,
  },
];