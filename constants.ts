import { Globe, Palette, Server, Rocket, Lightbulb, Smartphone } from 'lucide-react';
import { Project, Experience, Service, TechItem } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/sgm1018",
  linkedin: "https://linkedin.com/in/sergiogm1999",
  email: "1018sgm10182@gmail.com",
  repo: "https://github.com/sgm1018/portfolio"
};

export const SERVICES: Service[] = [
  { id: 1, title: "Desarrollo Web Completo", icon: Globe },
  { id: 2, title: "Frontend Development", icon: Palette },
  { id: 3, title: "Backend Development", icon: Server },
  { id: 4, title: "Soluciones DevOps", icon: Rocket },
  { id: 5, title: "Consultoría", icon: Lightbulb },
  { id: 6, title: "Aplicaciones Móviles", icon: Smartphone },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "GitLLMTrainer",
    description: "Herramienta de entrenamiento para modelos de lenguaje basada en repositorios Git.",
    tags: ["Python", "AI", "Git"],
    image: "https://picsum.photos/id/1/600/400",
    repoUrl: SOCIAL_LINKS.github
  },
  {
    id: 2,
    title: "Web App Builder",
    description: "Plataforma para generar aplicaciones web dinámicas con arquitectura moderna.",
    tags: [".NET", "Angular", "Docker", "MongoDB"],
    image: "https://picsum.photos/id/2/600/400",
    repoUrl: SOCIAL_LINKS.github
  },
  {
    id: 3,
    title: "Star Repo Graph",
    description: "Visualización gráfica de estrellas de repositorios en tiempo real.",
    tags: ["Astro", "Redis", "Tailwind"],
    image: "https://picsum.photos/id/3/600/400",
    repoUrl: SOCIAL_LINKS.github
  },
  {
    id: 4,
    title: "TeacherCloud",
    description: "Sistema de gestión educativa en la nube.",
    tags: ["Spring Boot", "Angular", "MySQL", "Docker"],
    image: "https://picsum.photos/id/4/600/400",
    repoUrl: SOCIAL_LINKS.github
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 0,
    role: "Responsable de Desarrollo",
    company: "TCH Labs",
    period: "Actualidad",
    description: [
      "Liderazgo de un equipo de 4 desarrolladores.",
      "Desarrollo activo de la infraestructura y software clave de la empresa.",
      "Cumplimiento de objetivos estratégicos y esperados."
    ]
  },
  {
    id: 1,
    role: "Full Stack DevSecOps Developer",
    company: "TCH Labs",
    period: "2024 - Presente",
    description: [
      "Desarrollo de APIs avanzadas y aplicaciones frontend con Angular y Astro.",
      "Orquestación con Kubernetes y gestión de caché con Redis.",
      "Implementación de pipelines CI/CD con GitLab.",
      "Integración de visión artificial y modelos LLMs."
    ]
  },
  {
    id: 2,
    role: "DevSecOps",
    company: "CSA",
    period: "2023 - 2024",
    description: [
      "Aseguramiento de despliegues con Docker.",
      "Colaboración directa con el departamento de ciberseguridad.",
      "Automatización de procesos de seguridad en el ciclo de vida del desarrollo."
    ]
  }
];

export const TECH_STACK: { category: string; items: TechItem[] }[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Rust", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Angular", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Spring", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: ".NET", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "NestJS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "Astro", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg" },
    ]
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Google Cloud", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Ansible", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ]
  }
];