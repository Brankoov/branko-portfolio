export type Project = {
  title: string;
  description: string;
  stack: string[];      // enhetlig nyckel för tekniklista
  url?: string;         // valfri: t.ex. repo eller huvudsida
  repo?: string;        // valfri: GitHub-länk
  repoFrontend?:string; // valfri: GitHub-länk för frontend (om separerad)
  live?: string;        // valfri: live-demo
  image?: string;       // valfri: thumbnail
};


// url/ repo/ live valfria.

export const projects: Project[] = [
  // 1. Routing – TOP LEFT
  {
    title: "Routing & Optimization App (Examensarbete – WIP)",
    description:
      "Ett examensarbete där jag bygger en molnbaserad fullstack-lösning för ruttoptimering riktad mot yrkeschaufförer. " +
      "Systemet beräknar optimal ordning för upp till 48 stopp baserat på verklig körtid och innehåller ett dedikerat körläge för mobil med live-navigering, avbockning av stopp och ETA-uppdateringar. " +
      "Projektet genomförs med agila arbetssätt och inkluderar löpande UX-samarbete kring flöden, användarvänlighet och interaktionsdesign.",
    stack: [
      "Java 17 & Spring Boot 3",
      "PostgreSQL (Supabase & Docker)",
      "JWT Authentication",
      "OpenRouteService API",
      "Custom TSP-algoritmer (NN + 2-Opt)",
      "React (Vite, TypeScript)",
      "React-Leaflet",
      "Docker",
      "Render + Vercel"
    ],
    repo: "https://github.com/Brankoov/routing-app",
    live: "https://routing-app-green.vercel.app/",
  },

  // 2. Weather Kids Wear – TOP RIGHT
  {
    title: "Weather Kids Wear",
    description:
      "Väderbaserad klädguide för småbarnsföräldrar – visar vad barnet bör ha på sig vid lämning på förskolan. " +
      "Byggt i ett agilt team med fokus på enkel UX, tydliga användarflöden och snabba iterationer. ACCESS KOD = qwerty1234.",
    stack: ["React", "TypeScript", "Vite", "PostgreSQL"],
    live: "https://kladerforvader.se/",
    repo: "https://github.com/Brankoov/Weatherapp",
    url: "https://kladerforvader.se/",
  },

  // 3. AI Agent – BOTTOM LEFT
  {
    title: "Personal AI agent/assistant",
    description:
      "En helt offline och privat AI-agent som kör lokalt via en webbaserad chatt. " +
      "Systemet använder Ollama för lokala LLM-modeller och RAG för att kunna läsa egna filer, kod och anteckningar. " +
      "Work in progress!",
    stack: [
      "Backend: Spring Boot 3 (Java 17), WebFlux, SSE",
      "Frontend: React, TypeScript, Vite",
      "AI: Ollama (lokala LLMs) + RAG",
      "PostgreSQL + pgvector",
      "Flyway",
      "Docker"
    ],
    repo: "https://github.com/Brankoov/ai-agent",
    repoFrontend: "https://github.com/Brankoov/ai-agent-ui",
  },

  // 4. Foodtruck – BOTTOM RIGHT
  {
    title: "Foodtruck webbpage",
    description:
      "En enkel men stilren webbplats med startsida, meny, om-oss och kontaktformulär. " +
      "Del av kursprojekt med UX-designers där vi arbetade iterativt enligt agila metoder.",
    stack: ["React", "TypeScript", "Vercel"],
    live: "https://sandysfoodtruck.vercel.app/",
    repo: "https://github.com/Brankoov/FR_UX_Grupp4",
    url: "https://sandysfoodtruck.vercel.app/",
  },
];