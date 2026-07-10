import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, "src", "assets", "webp");

// filtra apenas os .webp
const files = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".webp"));

let imports = "";
let projects = "export const generatedProjects = [\n";

// Lista de decorações e formatos para variar entre as artes
const decors = ["clip", "tape", "pin", "none"];
const aspects = ["square", "portrait", "wide"];

files.forEach((file, index) => {
  let rawName = file.replace(".webp", "");

  // Limpa o nome do arquivot
  let varName = rawName.replace(/[^a-zA-Z0-9]/g, "_").replace(/^_+|_+$/g, "");
  if (/^[0-9]/.test(varName)) varName = "img_" + varName;

  // Cria o import apontando para a pasta webp
  imports += `import ${varName} from "../assets/webp/${file}";\n`;

  // Cria o objeto do projeto
  projects += `  {
    id: "${rawName.replace(/\s+/g, "-").toLowerCase()}",
    title: "${rawName.replace(/_/g, " ")}",
    category: "Ilustração",
    year: "2026",
    tags: ["Geral"],
    decoration: "${decors[index % decors.length]}",
    accent: "from-mint-deep to-butter-deep",
    aspect: "${aspects[index % aspects.length]}",
    image: ${varName},
  },\n`;
});

projects += "];\n";

// Salva o arquivo na raiz
fs.writeFileSync("projetos_prontos.ts", imports + "\n" + projects);
console.log(
  `Arquivo projetos_prontos.ts criado. (${files.length} imagens processadas)`,
);
