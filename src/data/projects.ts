export type Project = {
  title: string;
  description: string;
  stack: string[];      // enhetlig nyckel för tekniklista
  url?: string;         // valfri: t.ex. repo eller huvudsida
  repo?: string;        // valfri: GitHub-länk
  live?: string;        // valfri: live-demo
  image?: string;       // valfri: thumbnail
};


// url/ repo/ live valfria.

export const projects: Project[] = [
  {
    title: "Weather Kids Wear",
    description:
      "Väderbaserad klädrekommendation för småbarnsföräldrar – hjälper till att välja rätt plagg inför förskolan – byggd med React, TypeScript och PostgreSQL",
    stack: ["React", "TypeScript", "Vite"],
    live: "https://kladerforvader.se/",
    repo: "https://github.com/Brankoov/Weatherapp", 
    url: "https://kladerforvader.se/",
  },
  {
    title: "Foodtruck webbpage",
    description:
      "En enkel Foodtruck-hemsida med startsida, om oss och kontaktformulär.",
    stack: ["React", "TypeScript", "Vercel"],
    live: "https://sandysfoodtruck.vercel.app/",
    repo: "https://github.com/Brankoov/FR_UX_Grupp4",
    url: "https://sandysfoodtruck.vercel.app/",
  },
];
