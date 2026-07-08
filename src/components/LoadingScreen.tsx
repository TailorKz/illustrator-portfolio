import { motion, type Variants } from "framer-motion";

/* ==========================================================================
   🖊️  ASSINATURA "PATY NETE" — duas linhas dentro do quadrado
   --------------------------------------------------------------------------
   Os 32 traços originais foram reagrupados em 8 letras com base na posição
   (x/y) de cada um. O "N" já tava confirmado pelo seu comentário original;
   os outros eu inferi pela geometria — dá uma conferida visual rápida e
   me avisa se algum traço ficou na letra errada.
   ========================================================================== */

const framePath =
  "M26.2204 931H127.72L483.72 930.5H575.22H600.22H604.22L606.72 928.5L608.72 926V921.5V67V15L607.22 11L605.22 8.5H598.22H237.22H59.2205H11.7205L8.72037 11V15.5V754.5C8.55371 807.167 8.32037 914.5 8.72037 922.5C9.12037 930.5 13.5537 931.5 15.7204 931H26.2204Z";

type LetterGroup = { id: string; row: 1 | 2; strokes: string[] };

const letterGroups: LetterGroup[] = [
  {
    id: "P",
    row: 1,
    strokes: [
      "M90.9903 286L92.7205 399.5L94.0852 428.5",
      "M90.9903 286L87.7205 71.5C87.0538 67.3334 85.5205 58.3 84.7205 55.5C83.7205 52 93.7205 45.5 115.22 45C136.72 44.5 169.22 54.5 178.72 63C188.22 71.5 204.22 92.5 204.72 109C205.22 125.5 199.72 156 191.22 172C182.72 188 145.72 246 134.72 255.5C123.72 265 109.22 275.5 104.72 279C101.12 281.8 94.067 284.833 90.9903 286Z",
      "M94.0852 428.5L94.7205 442C95.7205 445.667 97.5205 451.4 96.7205 445C95.9205 438.6 94.6303 431.333 94.0852 428.5Z",
    ],
  },
  {
    id: "A",
    row: 1,
    strokes: [
      "M359.72 460.5L354.72 427L347.72 389L339.22 344L325.22 279L319.72 260.5L304.22 198.5L297.22 171L288.22 138L267.72 50C264.554 47.8334 257.22 45.7 253.22 54.5C249.22 63.3 248.887 65.5 249.22 65.5L245.22 98L241.72 131.5L221.22 317L203.72 480.5",
      "M221.22 317L228.22 310.5L255.22 301L279.22 293.5L341.72 275.5L372.72 264",
      "M355.634 439C357.496 444.833 361.42 458.1 362.22 464.5C363.02 470.9 360.887 464.5 359.72 460.5L355.634 439L325.22 279",
    ],
  },
  {
    id: "T1",
    row: 1,
    strokes: [
      "M431.22 50V160V223.5L427.695 442.5",
      "M431.22 50L464.97 47L498.72 44H524.22H532.47",
      "M431.22 50L389.22 53.5L354.22 57.6667",
      "M532.47 44H540.72C546.887 45 557.22 46.7 549.22 45.5C541.22 44.3 534.72 44 532.47 44Z",
      "M427.695 442.5L427.22 472C426.72 475 426.02 479.5 427.22 473.5C428.42 467.5 428.037 450.333 427.695 442.5Z",
      "M354.22 57.6667L347.22 58.5L306.22 64C301.554 64.1667 294.62 64.1 304.22 62.5C313.82 60.9 341.554 58.6111 354.22 57.6667Z",
    ],
  },
  {
    id: "Y",
    row: 1,
    strokes: [
      "M532.72 259C527.887 251.667 517.52 234.6 514.72 225C511.22 213 497.72 173 494.22 160C490.72 147 484.22 123 484.22 113C484.22 112.746 484.22 112.5 484.22 112.264",
      "M532.72 259L524.72 291.5L497.22 366.5L472.22 433",
      "M532.72 259L549.72 211.5L568.22 145L582.22 96.5001C585.387 83.0001 587.72 58.0001 586.22 70.5001C584.72 83 578.054 106.667 576.72 117.5",
      "M472.22 433L460.22 463L457.72 471.5L472.22 433Z",
      "M484.22 112.264C484.22 105.071 484.22 106.098 484.22 104C484.554 100.667 485.02 95.6001 484.22 102C483.42 108.4 483.887 111.509 484.22 112.264Z",
    ],
  },
  {
    id: "N",
    row: 2,
    strokes: [
      "M204.22 475C201.887 494.167 200.92 495.8 199.72 505C198.22 516.5 193.22 572.5 192.22 588C191.22 603.5 184.72 660.5 183.72 671C182.92 679.4 177.054 736.5 174.22 764C172.22 783.667 168.12 825.2 167.72 834C167.32 842.8 164.22 887 164.22 889.5C164.22 892 152.62 842 150.22 834C147.22 824 120.22 732 117.22 717.5C114.22 703 85.2205 583.5 83.7205 576.5C82.5205 570.9 73.8871 528.167 69.7205 507.5L62.2205 436C61.5538 434.5 59.8205 432.4 58.2205 436C56.6205 439.6 55.2205 460.5 54.7205 470.5L52.7205 511L44.7205 633L38.7205 759L31.245 873",
    ],
  },
  {
    id: "E1",
    row: 2,
    strokes: [
      "M230.825 682.5V705V824C229.991 839.167 228.825 870.7 230.825 875.5C232.825 880.3 236.991 881.167 238.825 881H262.325H292.325",
      "M230.825 682.5V634V572.5V525V498.5L234.825 494.5H241.325H252.825H285.325H316.825",
      "M230.825 682.5H255.325",
      "M292.325 881H316.325H320.825C321.658 881.333 322.125 882 317.325 882C312.525 882 306.325 881.667 303.825 881.5L292.325 881Z",
      "M255.325 682.5H264.325C280.491 682.833 308.725 683.3 292.325 682.5C275.925 681.7 260.825 682.167 255.325 682.5Z",
    ],
  },
  {
    id: "T2",
    row: 2,
    strokes: [
      "M315.22 494.5L371.72 498.5H400.22",
      "M400.22 498.5L398.22 513V530.5L400.22 571V622.5V681V732.5V804.5V821.5L401.22 831L402.619 867",
      "M400.22 498.5H442.22L468.72 496.5",
      "M402.619 867L403.22 882.5C402.887 887.5 402.42 895.4 403.22 887C404.02 878.6 403.152 870.167 402.619 867Z",
    ],
  },
  {
    id: "E2",
    row: 2,
    strokes: [
      "M518.72 893.803C514.505 893.456 510.113 893.096 505.72 892.737C488.574 891.337 471.423 889.962 464.72 889.5C453.12 888.7 450.554 885.167 450.72 883.5V869.5V852V820.5L448.72 779L446.72 726L445.22 699.5V679.5V646L443.22 613V573.5L441.22 543.5V514L442.22 499L459.22 498C466.72 497.167 482.12 493.3 495.72 492.5C506.363 491.874 516.81 488.896 525.22 486.021",
      "M445.22 699.5L474.22 698C478.102 698 483.1 698 488.72 698",
      "M525.22 486.021C530.244 484.303 534.542 482.622 537.72 481.5C544.22 478.167 555.12 472.5 546.72 476.5C538.32 480.5 528.887 484.514 525.22 486.021Z",
      "M488.72 698C490.339 698 492.01 698 493.72 698C502.72 697.5 519.22 696.8 513.22 698C507.22 699.2 494.387 698.5 488.72 698Z",
      "M518.72 893.803C526.531 894.446 533.736 895.043 539.22 895.5C549.22 895 566.22 894.3 554.22 895.5C542.22 896.7 533.22 896 530.22 895.5L518.72 893.803Z",
    ],
  },
];

/* ==========================================================================
   ⏱️  TIMING — quadrado desenha, depois cada letra desenha e "assenta"
   ========================================================================== */

// Ajuste aqui se precisar acelerar/desacelerar tudo de uma vez
const FRAME_DELAY = 0.02;
const FRAME_DURATION = 0.22;
const STROKE_DRAW_DURATION = 0.08;
const STROKE_INTRA_STAGGER = 0.01; // traços dentro da mesma letra
const LETTER_GAP = 0.025; // pausa entre uma letra e a próxima
// Com os 8 grupos de letra atuais, a sequência completa (quadrado + letras)
// termina por volta de ~1.3s — cabe folgado dentro do minTime de 1.8s do App.tsx

type LetterTiming = { start: number; duration: number };

function computeLetterTimings(): LetterTiming[] {
  let cursor = FRAME_DELAY + FRAME_DURATION;
  return letterGroups.map((letter) => {
    const duration =
      STROKE_INTRA_STAGGER * (letter.strokes.length - 1) + STROKE_DRAW_DURATION;
    const timing = { start: cursor, duration };
    cursor = timing.start + duration + LETTER_GAP;
    return timing;
  });
}

const letterTimings = computeLetterTimings();
const lastLetter = letterTimings[letterTimings.length - 1];
const SEQUENCE_END = lastLetter.start + lastLetter.duration;
const TEXT_START = Math.max(SEQUENCE_END - 0.35, FRAME_DELAY + FRAME_DURATION + 0.1);

const frameVariant: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: FRAME_DURATION, delay: FRAME_DELAY, ease: "easeOut" },
  },
};

const strokeVariant: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

// Blobs de aquarela flutuando bem devagar no fundo
const blobs = [
  { size: 380, top: "-10%", left: "-8%", color: "#f6c9bd", duration: 14 },
  { size: 300, top: "55%", left: "70%", color: "#f9d9cf", duration: 18 },
  { size: 220, top: "5%", left: "68%", color: "#f2bfae", duration: 11 },
];

// Confetes de papel subindo
const confetti = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${8 + Math.random() * 84}%`,
  size: 4 + Math.random() * 6,
  duration: 6 + Math.random() * 5,
  delay: Math.random() * 4,
  rotate: Math.random() * 360,
}));

// Brilhinhos piscando pelo fundo
const sparkles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: 3 + Math.random() * 5,
  duration: 1.4 + Math.random() * 1.6,
  delay: Math.random() * 2,
}));

export function LoadingScreen() {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 30% 20%, #fdeae5 0%, #fae1db 45%, #f6cfc4 100%)",
      }}
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: b.color,
            filter: "blur(60px)",
            opacity: 0.55,
          }}
          animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: b.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="paper-grain absolute inset-0 z-0 pointer-events-none opacity-80" />

      {confetti.map((c) => (
        <motion.span
          key={c.id}
          className="absolute rounded-sm pointer-events-none"
          style={{
            left: c.left,
            bottom: "-5%",
            width: c.size,
            height: c.size,
            background: "var(--color-ink)",
            opacity: 0.12,
          }}
          animate={{
            y: ["0%", "-120vh"],
            rotate: [c.rotate, c.rotate + 180],
            opacity: [0, 0.16, 0],
          }}
          transition={{ duration: c.duration, delay: c.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {sparkles.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: "#fff8f5",
            boxShadow: "0 0 6px 1px rgba(255,255,255,0.8)",
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1, 0.4] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.svg
          viewBox="0 0 618 940"
          className="w-40 md:w-48 h-auto drop-shadow-sm"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="17"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="hidden"
          animate="visible"
        >
          <motion.g
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: SEQUENCE_END + 0.15, ease: "easeInOut" }}
          >
            <motion.path d={framePath} variants={frameVariant} />

            {letterGroups.map((letter, li) => {
              const timing = letterTimings[li];
              return (
                <motion.g
                  key={letter.id}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.035, 1] }}
                  transition={{ duration: 0.35, delay: timing.start + timing.duration, ease: "easeOut" }}
                >
                  {letter.strokes.map((d, si) => (
                    <motion.path
                      key={`${letter.id}-${si}`}
                      d={d}
                      variants={strokeVariant}
                      transition={{
                        duration: STROKE_DRAW_DURATION,
                        delay: timing.start + si * STROKE_INTRA_STAGGER,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.g>
              );
            })}
          </motion.g>
        </motion.svg>

        <LoadingText delay={TEXT_START} />
      </div>
    </motion.div>
  );
}

function LoadingText({ delay }: { delay: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="mt-6 font-hand text-4xl text-[var(--color-ink)] tracking-wider w-56 text-center pb-1 flex items-end justify-center gap-[2px]"
    >
      Carregando
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: delay + 0.5 + i * 0.15, ease: "easeInOut" }}
        >
          .
        </motion.span>
      ))}
    </motion.p>
  );
}