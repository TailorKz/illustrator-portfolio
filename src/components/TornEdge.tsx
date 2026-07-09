export function TornEdge({ bottomColor = "#f2e8da" }: { bottomColor?: string }) {
  // CURVA 1 (BRANCA)
  const whiteEdge = "M0,12 C40,16 80,22 120,20 C160,18 200,8 240,10 C280,12 320,25 360,26 C400,28 440,14 480,16 C520,18 560,30 600,28 C640,26 680,10 720,12 C760,14 800,28 840,26 C880,24 920,12 960,14 C1000,16 1040,28 1080,26 C1120,24 1160,10 1200,12 C1240,14 1280,28 1320,26 C1360,24 1400,16 1440,18";
  
  // CURVA 2 (BASE DA PRÓXIMA SEÇÃO)
  const bottomEdgePath = "M0,20 C40,23 80,29 120,28 C160,27 200,12 240,14 C280,16 320,33 360,34 C400,35 440,18 480,21 C520,24 560,39 600,37 C640,35 680,15 720,17 C760,19 800,35 840,32 C880,29 920,17 960,19 C1000,21 1040,37 1080,36 C1120,35 1160,15 1200,18 C1240,21 1280,35 1320,33 C1360,31 1400,22 1440,25";

  return (
    <div
      className="absolute bottom-0 left-0 w-full z-30 pointer-events-none"
      style={{ lineHeight: 0 }}
    >
      <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-[40px] sm:h-[50px] md:h-[65px] block">
        <path d={`${whiteEdge} L1440,50 L0,50 Z`} fill="white" />
        {/* Aqui ele desenha a cor sólida, mas a textura Global cobrirá por cima! */}
        <path d={`${bottomEdgePath} L1440,50 L0,50 Z`} fill={bottomColor} />
      </svg>
    </div>
  );
}