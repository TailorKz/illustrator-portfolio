// src/data/projects.ts

export type ProjectAspect = "square" | "portrait" | "tall" | "wide";
export type ProjectDecoration = "tape" | "pin" | "clip" | "none";
import redragon from "../assets/redragon_artev2.webp";
import aniver from "../assets/20sbirthday.webp";
import hades from "../assets/hades(1).webp";
import obito from "../assets/obito_rin (1).webp";
import bro from "../assets/1000173942.webp";
import ruko from "../assets/comission_rukoreiko.webp";
import sandy from "../assets/sandy_thumbnail-art-scale-4_00x-gigapixel.webp";
import gabialice from "../assets/gabialice.webp";
import mossgroto from "../assets/mossgroto.webp";


export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  tags: string[];

  // miniatura para o grid
  image?: string; 
  // imagem em para o Modal
  fullImage?: string; 
  // texto descritivo do projeto
  description?: string; 

  decoration: ProjectDecoration;
  accent: string;
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
    fullImage: redragon,
    description: "Uma arte criada para estampar mousepads da Redragon.",
  },
  {
    id: "identidade-petit",
    title: "Comission Sask",
    category: "Comission",
    year: "2026",
    tags: ["Comission", "Anime"],
    decoration: "pin",
    accent: "from-butter to-butter-deep",
    aspect: "tall",
    image: hades,
    fullImage: hades,
    description: "Uma comission feita para o artista Sask.",},
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
    image: aniver,
  },
  {
    id: "papelaria-criativa",
    title: "imagem",
    category: "imagem",
    year: "2024",
    tags: [ "Criativa"],
    decoration: "pin",
    accent: "from-pink-soft to-pink-deep",
    aspect: "tall",
    image: gabialice,
  },
  {
    id: "mundo-pixel",
    title: "Brawl",
    category: "Brawl",
    year: "2025",
    tags: ["Game",],
    decoration: "clip",
    accent: "from-mint-deep to-butter-deep",
    aspect: "wide",
    image: mossgroto,
    fullImage: mossgroto,
    description: "Uma arte criada para estampar criada para estampar m criada para estampar m criada para estampar m mousepads da  criada para estampar m criada para estampar m criada para estampar m criada para estampar m criada para estampar m criada para estampar mRedragon.",
  },
  {
    id: "bro",
    title: "bro",
    category: "Brawl",
    year: "2025",
    tags: ["Game",],
    decoration: "clip",
    accent: "from-mint-deep to-butter-deep",
    aspect: "portrait",
    image: bro,
  },
  {
    id: "ruko",
    title: "ruko",
    category: "ruko",
    year: "2025",
    tags: ["Game",],
    decoration: "clip",
    accent: "from-mint-deep to-butter-deep",
    aspect: "portrait",
    image: ruko,
  },
  {
    id: "mossgroto",
    title: "mossgroto",
    category: "mossgroto",
    year: "2025",
    tags: ["Game",],
    decoration: "clip",
    accent: "from-mint-deep to-butter-deep",
    aspect: "square",
    image: sandy,
  },

];