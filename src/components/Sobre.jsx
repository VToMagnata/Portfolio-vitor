function Sobre() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:pt-20 w-full px-4">
      <img
        src="/vitor.jpeg"
        alt="vitor"
        className="rounded-full w-64 h-64 border-3 border-[#7BE141] mb-6 lg:mb-0 lg:mr-20 flex-shrink-0"
      />
      <aside className="flex flex-col items-center lg:items-start">
        <h1 className="text-2xl text-[#7BE141]">VITOR</h1>
        <h3 className="mb-4 italic text-gray-400 text-lg sm:text-xl font-['Roboto']">
          Front-End Developer
        </h3>
        <p
          className="text-white max-w-[40em] border-t-2 border-white pt-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Oi! Eu sou Vitor Losina Trevisan, alguém movido por curiosidade e
          paixão pelo que faz. Gosto de desafios, de aprender coisas novas e de
          criar soluções que realmente façam a diferença. Sou detalhista e
          focado, mas também valorizo criatividade e novas perspectivas —
          acredito que os melhores resultados vêm de combinar técnica com
          imaginação. Fora do código, adoro explorar ideias, pensar fora da
          caixa e sempre buscar evolução, tanto pessoal quanto profissional. Meu
          objetivo é construir projetos que não só funcionem, mas que também
          tenham impacto, significado e propósito.
        </p>
      </aside>
    </main>
  );
}

export default Sobre;
