import CardProject from "./CardProject";

function Projetos() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:p-8 w-[100%] h-auto items-center justify-items-center sm:w-[80%]">
      <CardProject
        img={"/todolist.jpeg"}
        title={"To-Do List"}
        description={"Lista de tarefas com React, Context API e Tailwind CSS."}
        tecnologies={["html", "react", "tailwind", "javascript"]}
        links={{
          site: "https://todolistvt.netlify.app",
          git: "https://github.com/VToMagnata/To-Do_List",
        }}
        temSite={true}
      />
      <CardProject
        img={"/cinels.png"}
        title={"CineList"}
        description={"App de filmes com Next.js, TypeScript e Tailwind CSS."}
        tecnologies={["Next.js", "TypeScript", "Tailwind CSS", "TMDb API"]}
        links={{
          site: "https://cinelistvt.netlify.app",
          git: "https://github.com/VToMagnata/Cinelist",
        }}
        temSite={true}
      />
      <CardProject
        img={"/projetobook.jpeg"}
        title={"Books"}
        description={
          "Catálogo de livros com React, TypeScript, Axios e Tailwind."
        }
        tecnologies={["html", "react", "tailwind", "typescript", "axios"]}
        links={{
          site: "https://booksvt.netlify.app",
          git: "https://github.com/VToMagnata/Books",
        }}
        temSite={true}
      />
      <CardProject
        img={"/front-back.jpeg"}
        title={"Login Backend/Frontend"}
        description={"Sistema de login completo com front-end e back-end."}
        tecnologies={[
          "html",
          "javascript",
          "react",
          "tailwind",
          "node",
          "express",
          "mongodb",
        ]}
        links={{
          git: "https://github.com/VToMagnata/Login-Front-Back-End",
        }}
        temSite={false}
      />
      <CardProject
        img={"/previsao.jpeg"}
        title={"Previsão do tempo"}
        description={"App de clima em React com previsão do tempo."}
        tecnologies={["html", "javascript", "react", "tailwind"]}
        links={{
          site: "https://previsaovt.netlify.app",
          git: "https://github.com/VToMagnata/Previsao",
        }}
        temSite={true}
      />
    </main>
  );
}

export default Projetos;
