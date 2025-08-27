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
          Oi! Sou Vitor Losina Trevisan, alguém movido por desafios e pela
          vontade de aprender constantemente. Gosto de explorar novas ideias,
          testar soluções diferentes e criar projetos que realmente funcionem e
          façam sentido. Sou detalhista, focado e organizado, mas também
          valorizo criatividade e inovação na hora de resolver problemas. Fora
          do mundo do código, estou sempre buscando evoluir, aprendendo coisas
          novas e expandindo perspectivas. Meu objetivo é desenvolver projetos
          que não apenas funcionem, mas que tenham impacto, propósito e tragam
          resultados reais.
        </p>
        <div className="flex items-center justify-end gap-4">
          <img
            src="./github.png"
            className="w-[15%] h-[15%] cursor-pointer"
            onClick={() =>
              window.open("https://github.com/VToMagnata", "_blank")
            }
          />
          <img
            src="./linked.png"
            className="w-[14%] h-[14%] rounded-xl cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/vitor-trevisan-143467354",
                "_blank"
              )
            }
          />
        </div>
      </aside>
    </main>
  );
}

export default Sobre;
