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
  {
    title: "Weather Kids Wear",
    description:
      "Väderbaserad klädrekommendation för småbarnsföräldrar – hjälper till att välja rätt plagg inför förskolan. " +
      "Byggd med React, TypeScript och PostgreSQL. ACCESS KOD = qwerty1234",
    stack: ["React", "TypeScript", "Vite", "PostgreSQL"],
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
  {
    title: "Personal AI agent/assistant",
    description:
      "Det här projektet syftar till att bygga en helt **offline**, **säker** och **personlig AI-agent**. " +
      "En digital assistent som körs lokalt via en webbaserad chatt-UI och kopplas mot dina egna filer/kod/anteckningar. WORK IN PROGRESS!",
    stack: [
      "Backend: Spring Boot 3 (Java 17), WebFlux, SSE",
      "Frontend: React, TypeScript, Vite",
      "AI: Ollama (lokala LLMs) + RAG",
      "Database: PostgreSQL + pgvector",
      "Migrations: Flyway",
      "Containerization: Docker",
      "Embeddings: nomic-embed-text (via Ollama)"
    ],
    repo: "https://github.com/Brankoov/ai-agent",
    repoFrontend: "https://github.com/Brankoov/ai-agent-ui",
  },
   {
    title: "Routing & Optimization App (Examensarbete – WIP)",
  description:
    "Ett examensarbete som utvecklar en komplett ruttoptimeringslösning. " +
    "Användaren kan ange startadress, upp till 30 stopp och en slutadress – " +
    "systemet geokodar, optimerar ordningen och visar rutten på karta med ETA. " +
    "Hela lösningen ska köras lokalt med öppna API:er och Docker-containrar." +
    " WORK IN PROGRESS!",
  stack: [
    "Spring Boot (Web, Security, Data JPA, JWT Sessions)",
    "Flyway (databasmigrationer)",
    "PostgreSQL (Docker)",
    "OSRM & VROOM (routing + optimering, Docker)",
    "Nominatim (geokodning, Docker)",
    "React (Vite)",
    "Tailwind CSS / MUI",
    "React-Leaflet / MapLibre",
    "JUnit 5",
    "GitHub Projects (planering)",
    "Docker Compose (lokal miljö)"
  ],
  repo: "https://github.com/Brankoov/routing-app",
  },
  
];
