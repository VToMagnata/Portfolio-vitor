import CardProject from "./CardProject";

function Projetos() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:p-8 w-[100%] h-auto items-center justify-items-center sm:w-[80%]">
      <CardProject
        img={"/todolist.jpeg"}
        title={"To-Do List"}
        description={"Lista de tarefas com React, Context API e Tailwind CSS"}
        tecnologies={["html", "react", "tailwind", "javascript"]}
        links={{
          site: "https://todolistvt.netlify.app",
          git: "https://github.com/VToMagnata/To-Do_List",
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
    </main>
  );
}

export default Projetos;
