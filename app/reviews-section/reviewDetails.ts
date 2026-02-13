import { StaticImageData } from "next/image";
import alex from "../../public/boiboi.jpeg";
import jerry from "../../public/zaid.png";
import mauro from "../../public/gaurav.jpeg";
import alan from "../../public/debu.jpeg";
import olamide from "../../public/sarthak.png";
import umar from "../../public/pratik.png";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Rishabh Srivastava",
    role: "AI Optimisation Specialist",
    company: "Eltropy",
    profileImg: alex,
    testimonial:
      "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  },
  {
    name: "Zaid Shaikh",
    role: "Co Founder",
    company: "References",
    profileImg: jerry,
    testimonial:
      "Vishal's work is truly outstanding, and I can't recommend him enough! He completely transformed our branding agency's website. Since launch, we've seen a significant jump in website traffic and, crucially, conversions.",
  },
  {
    name: "Gaurav Patil",
    role: "Team Lead",
    company: "ProDT",
    profileImg: mauro,
    testimonial:
      "Outstanding professional, developed our startup's website, handled and delivered client projects in a very short time and with high quality.",
  },
  {
    name: "Pratik Kumbhar",
    role: "Product Designer",
    company: "References",
    profileImg: umar,
    testimonial:
      "Vishal is hardworking and has great sense of ownership. He was able to contribute in engineering excellent user interfaces and user experiences at References. I’m confident he will be a great asset to any engineering team.",
  },
  {
    name: "Sarthak Kumar",
    role: "Software Developer",
    company: "8lete",
    profileImg: olamide,
    testimonial:
      "Vishal is seriously one of the best frontend developers I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Debasish Phukon",
    role: "SWE",
    company: "Informatica",
    profileImg: alan,
    testimonial:
      "Vishal is a dependable full-stack engineer who writes clean, scalable code and consistently delivers high-quality results. A strong team player with great ownership.",
  },
];
