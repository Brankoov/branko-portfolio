export type Project = {
  title: string;
  url: string;
  stack: string[];
  description: string;
};

export const projects: Project[] = [
  {
    title: "ATM (SOLID/TDD)",
    url: "https://github.com/Brankoov/atm-simulator",
    stack: ["Java", "JUnit 5", "SOLID", "TDD"],
    description:
      "Bankomatlogik byggd med SOLID-principer och TDD. Fokus på testbarhet och ren arkitektur.",
  },
  {
    title: "Weather Kids Wear",
    url: "https://github.com/Brankoov/Weatherapp",
    stack: ["React", "TypeScript", "REST API"],
    description:
      "Klädrekommendationer för barn baserat på väder. Lättanvänt, responsivt UI.",
  },
  {
    title: "Secure User Portal",
    url: "https://github.com/Brankoov/SecureSpringProjekt",
    stack: ["Spring Boot", "Spring Security", "Thymeleaf", "JPA"],
    description:
      "Registrering/inloggning, rollbaserad åtkomst, CSRF-skydd och MockMvc-tester.",
  },
  {
    title: "Foodtruck webbpage",
    url: "https://github.com/Brankoov/FR_UX_Grupp4",
    stack: ["React", "TypeScript", "Email/API"],
    description:
      "En enkel Foodtruck hemsida till en existerande foodtruck med Startsida, Om oss, Kontaktformulär",
  },
];
