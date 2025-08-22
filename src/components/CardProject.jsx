function CardProject({ img, title, description, tecnologies, links, temSite }) {
  return (
    <main className="flex flex-col items-center justify-start h-[27em] w-[80%] sm:w-[105%] lg:w-[80%] border-3 border-[#7BE141] rounded-xl overflow-hidden bg-white/20 backdrop-blur-2xl">
      <img src={img} className="h-[40%] w-[100%] rounded-[0.1em] mb-4" />
      <div className="w-[100%] h-[20%] flex justify-center items-center flex-wrap gap-1">
        {tecnologies.map((tec, index) => (
          <span
            key={index}
            className="px-2 py-1 border rounded text-sm rounded-full"
            style={{
              fontFamily: "Poppins, sans-serif",
              backgroundColor:
                tec === "html"
                  ? "#FF5722"
                  : tec === "css"
                  ? "#2965F1"
                  : tec === "javascript" || tec === "js"
                  ? "#F7DF1E"
                  : tec === "react"
                  ? "#61DAFB"
                  : tec === "sass"
                  ? "#CC6699"
                  : tec === "tailwind"
                  ? "#06B6D4"
                  : tec === "node.js" || tec === "node"
                  ? "#339933"
                  : tec === "prisma"
                  ? "#2D3748"
                  : tec === "mongodb"
                  ? "#47A248"
                  : tec === "git"
                  ? "#F05032"
                  : tec === "github"
                  ? "#181717"
                  : tec === "typescript"
                  ? "#3178C6"
                  : "#7BE141",
            }}
          >
            {tec}
          </span>
        ))}
      </div>
      <div className="text-center text-white flex flex-col p-2 w-[100%]">
        <h1 className="mb-2 text-[1.4em] font-bold text-[#7BE141]">{title}</h1>
        <p
          className="break-words mb-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {description}
        </p>
      </div>
      <figure className="w-full h-auto flex justify-center items-center gap-4">
        {temSite ? (
          <a href={links.site} target="_blank" rel="noopener noreferrer">
            <img
              src="/rede.jpeg"
              alt="rede"
              className="cursor-pointer w-auto h-auto"
            />
          </a>
        ) : null}

        <a href={links.git} target="_blank" rel="noopener noreferrer">
          <img
            src="/code.jpeg"
            alt="code"
            className="cursor-pointer w-auto h-auto"
          />
        </a>
      </figure>
    </main>
  );
}

export default CardProject;
