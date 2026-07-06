// src/data/projects.ts

export type ProjectAspect = "square" | "portrait" | "tall" | "wide";
export type ProjectDecoration = "tape" | "pin" | "clip" | "none";
import redragon from "C:/Users/INDACI/Desktop/Tailor/redragon_arte.png"
import sask from "C:/Users/INDACI/Desktop/Tailor/sask_comission.png"
import obito from "C:/Users/INDACI/Desktop/Tailor/obito_rin.jpg.jpeg"
import hiksemi from "C:/Users/INDACI/Desktop/Tailor/redragon_hiksemi.png"
export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  /** Tags de estilo usadas no filtro lá em cima (ex: "Criativa", "Realista", "Jogo") */
  tags: string[];
  /** Quando tiver a arte final, importe a imagem e coloque aqui */
  image?: string;
  decoration: ProjectDecoration;
  /** Cor do placeholder enquanto não há imagem (gradiente dentro da paleta do projeto) */
  accent: string;
  /** Proporção do card — dá a variação de altura do masonry */
  aspect: ProjectAspect;
};

/**
 * Pra adicionar uma arte nova:
 * 1. Copie um objeto abaixo e cole no fim do array.
 * 2. Troque id, title, category, year e tags.
 * 3. Se já tiver a imagem: importe no topo do arquivo
 *    (ex: import novaArte from "../assets/images/nova-arte.jpg";)
 *    e coloque em `image: novaArte`.
 * 4. Se ainda não tiver imagem, só deixe `image` de fora — o card
 *    mostra um placeholder colorido com o título, usando a cor de `accent`.
 */
export const projects: Project[] = [
  {
    id: "jardim-outono",
    title: "Redragon teste",
    category: "Redragon Mousepad",
    year: "2025",
    tags: ["Wallpaper", "Realism"],
    decoration: "tape",
    accent: "from-pink-soft to-pink",
    aspect: "wide",
    image: redragon,
  },
  {
    id: "identidade-petit",
    title: "Comission Sask",
    category: "Comission",
    year: "2026",
    tags: ["Comission", "Anime"],
    decoration: "pin",
    accent: "from-butter to-butter-deep",
    aspect: "square",
    image: sask,
  },
  {
    id: "Obito-Rin",
    title: "Obito-Rin",
    category: "Ilustração",
    year: "2023",
    tags: ["Ilustração", "Anime", "Criativa"],
    decoration: "clip",
    accent: "from-mint to-mint-deep",
    aspect: "portrait",
    image: obito,
  },
  {
    id: "horizontes-oniricos",
    title: "texto",
    category: "texto",
    year: "2024",
    tags: ["Ilustração", "Fantasia", "Criativa"],
    decoration: "tape",
    accent: "from-blush to-blush-deep",
    aspect: "square",
    image: hiksemi,
  },
  {
    id: "papelaria-criativa",
    title: "imagem",
    category: "imagem",
    year: "2024",
    tags: [ "Criativa"],
    decoration: "pin",
    accent: "from-pink-soft to-pink-deep",
    aspect: "square",
  },
  {
    id: "mundo-pixel",
    title: "Brawl",
    category: "Brawl",
    year: "2025",
    tags: ["Game",],
    decoration: "clip",
    accent: "from-mint-deep to-butter-deep",
    aspect: "portrait",
  },
];