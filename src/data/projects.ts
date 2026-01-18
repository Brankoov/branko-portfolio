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
    title: "Ruttoptimeraren (Examensarbete)",
    description:
      "Mobilanpassad fullstack-lösning som ersätter papperslistor med digital effektivitet. " +
      "Backend i Java beräknar optimal körordning via en egenutvecklad hybrid-algoritm (Nearest Neighbor, 2-Opt & Simulated Annealing) för att lösa TSP. " +
      "Innehåller även ett 'körläge' för mobil med realtidsnavigering.",
    stack: [
      "Java 17 & Spring Boot 3",
      "Algoritmer (NN, 2-Opt, SA)",
      "PostgreSQL (Docker)",
      "OpenRouteService API",
      "React (Vite, TypeScript)",
      "Leaflet Maps",
      "Render + Vercel"
    ],
    repo: "https://github.com/Brankoov/routing-app",
    live: "https://routing-app-green.vercel.app/",
  },

  {
    title: "Mafia Game Manager",
    description:
      "En interaktiv 'Game Master'-app för sällskapsspelet Maffia. " +
      "Digitaliserar spelupplevelsen genom att hantera rollutdelning (via 'pass-and-play' med swipe-gester), nattfaser och vinstvillkor.\n" +
      "Fokus på mobil UX, komplex state-hantering och mjuka animationer.",
    stack: [
      "React (Vite)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
      "Context API"
    ],
    // Fyll i dina länkar här:
    repo: "https://github.com/Brankoov/mafia-game", 
    live: "https://mafia-game-alpha.vercel.app/",
  },

  // 2. Weather Kids Wear – TOP RIGHT
  {
    title: "Weather Kids Wear",
    description:
      "Väderbaserad klädguide för småbarnsföräldrar – visar vad barnet bör ha på sig vid lämning. \n\nGäst-login: qwerty1234",
    stack: ["React", "TypeScript", "Vite", "PostgreSQL", "Node.js"],
    live: "https://kladerforvader.se/",
    repo: "https://github.com/Brankoov/Weatherapp",
    url: "https://kladerforvader.se/",
  },

  // 3. AI Agent – BOTTOM LEFT
  {
    title: "Personal AI agent/assistant (Work in progress)",
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