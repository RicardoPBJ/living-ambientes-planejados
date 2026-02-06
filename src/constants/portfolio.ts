/*** src/constants/portfolio.ts ***/
/**
 * Categorias disponíveis para filtragem no portfólio.
 */
export const PORTFOLIO_CATEGORIES = [
  "Todos",
  "Cozinhas",
  "Dormitórios",
  "Salas",
  "Banheiros",
];

/**
 * Interface que define a estrutura de um projeto no portfólio.
 */
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

/**
 * Lista de projetos exibidos na seção de portfólio.
 * @todo Substituir por dados vindos de uma API ou CMS no futuro.
 */
export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Cozinha Minimalista",
    category: "Cozinhas",
    image: "/portfolio/kitchen-1.jpg",
  },
  {
    id: 2,
    title: "Suíte Master",
    category: "Dormitórios",
    image: "/portfolio/bedroom-1.jpg",
  },
  {
    id: 3,
    title: "Home Theater",
    category: "Salas",
    image: "/portfolio/living-1.jpg",
  },
  {
    id: 4,
    title: "Cozinha Gourmet",
    category: "Cozinhas",
    image: "/portfolio/kitchen-2.jpg",
  },
  {
    id: 5,
    title: "Closet Walk-in",
    category: "Dormitórios",
    image: "/portfolio/closet-1.jpg",
  },
  {
    id: 6,
    title: "Banheiro Spa",
    category: "Banheiros",
    image: "/portfolio/bath-1.jpg",
  },
];
