import portfolioImage from "../images/portfolio_page.png";
import htmlIcon from "../images/html5.png";
import astroIcon from "../images/astro.png";
import nextIcon from "../images/nextjs.png";
import reactIcon from "../images/reactjs.png";
import tsIcon from "../images/typescript.png";
import jsIcon from "../images/js.png";
import tailwindIcon from "../images/tailwindcss.png";
import mobileIcon from "../images/android.png";
import nodeIcon from "../images/nodejs.png";

// ORDEN DE LAS SECCIONES si quitas una de estas secciones se ocultará automáticamente.
export const SECTION_ORDER = [
  "presentation",
  "actions",
  "separator",
  "experience",
  "projects",
  "aboutMe",
  "goodAt",
  "contact",
];

// Con esto modificarás el nombre en todos lados!
// Para modificar sección about me ir al archivo src\components\AboutMe.astro
export const OWNER = "Mad Dev";

// Call to actions
export const ACTIONS = [
  { title: "¡Hablemos!", to: "#contacto" },
  { title: "LinkedIn", to: "https://linkedin.com", target: "_blank" },
  {
    title: "Correo",
    to: "mailto:maddevcl@gmail.com",
    target: "_blank",
    last: true,
  },
];

// EXPERIENCIA

export const EXPERIENCE = [
  {
    job: "TikTok",
    date: "2021 - Actualidad",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    tags: ["Senior", "Desarrollo móvil", "CI/CD"],
  },
];

// PROYECTOS

export const PROJECTS = [
  {
    description:
      "Página web desarrollada en Astro junto con Tailwind utilizada como portafolio de un desarrollador de software.",
    tags: ["Astro", "Tailwind"],
    title: "Portafolio",
    image: portfolioImage,
    repositoryURL: "https://github.com/MadDevCL/portfolio",
    siteURL: "https://github.com/MadDevCL/portfolio",
  },
  {
    description:
      "Página web desarrollada en Astro junto con Tailwind utilizada como portafolio de un desarrollador de software.",
    tags: ["React Native", "Inteligencia Artificial", "Desarrollo móvil"],
    title: "HabiToks",
    image: portfolioImage,
    repositoryURL: "https://github.com/MadDevCL/portfolio",
  },
];

// Sección En qué destaco - Para modificar los textos ir al archivo src\components\GoodAt.astro

export const GOOD_AT = {
  education: "Ingeniería en informática",
  specialty: "Aplicaciones móviles y web",
};

// Stacks que conoces, acá puedes descargar iconos que falten:
// https://www.figma.com/design/WcktwhzUBFqGAdzTgv3igd/Tech-Stack-Icons-%26-Design-Stack-Icons-(Community)

export const STACK = [
  {
    src: htmlIcon,
    alt: "Icono de HTML 5",
  },
  {
    src: astroIcon,
    alt: "Icono de Astro",
  },
  {
    src: nextIcon,
    alt: "Icono de NextJS",
  },
  {
    src: jsIcon,
    alt: "Icono de JavaScript",
  },
  {
    src: tsIcon,
    alt: "Icono de TypeScript",
  },
  {
    src: nodeIcon,
    alt: "Icono de NodeJS",
  },
  {
    src: reactIcon,
    alt: "Icono de React",
  },
  {
    src: tailwindIcon,
    alt: "Icono de Tailwind Css",
  },
  {
    src: mobileIcon,
    alt: "Icono de Android",
  },
  {
    src: astroIcon,
    alt: "Icono de Astro",
  },
];

// Sigueme y da like si lees esto ;)
