import CardTec from "./CardTec";

function Tecnologias() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 sm:p-8 w-[100%] h-auto items-center justify-items-center sm:w-[80%]">
      <CardTec
        icon={"https://cdn.simpleicons.org/html5/ff5722.svg"}
        title={"HTML"}
        description={
          "Linguagem usada para estruturar o conteúdo de páginas web."
        }
      />

      <CardTec
        icon={
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        }
        title={"CSS"}
        description={
          "Linguagem de estilo que define aparência, layout e cores."
        }
      />

      <CardTec
        icon={"https://cdn.simpleicons.org/javascript/f7df1e.svg"}
        title={"JS"}
        description={
          "Linguagem usada para dar interatividade e dinamismo aos sites."
        }
      />

      <CardTec
        icon={"https://cdn.simpleicons.org/react/61dafb.svg"}
        title={"React"}
        description={
          "Biblioteca moderna usada para criar interfaces reativas de usuário."
        }
      />

      <CardTec
        icon={"https://cdn.simpleicons.org/sass/cc6699.svg"}
        title={"Sass"}
        description={
          "Extensão poderosa do CSS que adiciona funções, variáveis e recursos."
        }
      />

      <CardTec
        icon={"https://cdn.simpleicons.org/tailwindcss/06b6d4.svg"}
        title={"Tailwind"}
        description={"Framework que permite estilização rápida direto no HTML."}
      />

      <CardTec
        icon={"https://cdn.simpleicons.org/nodedotjs/339933.svg"}
        title={"Node.js"}
        description={
          "Ambiente de execução do JavaScript usado no lado servidor."
        }
      />

      <CardTec
        icon={"https://cdn.simpleicons.org/prisma/2D3748.svg"}
        title={"Prisma & MongoDB"}
        description={
          "ORM moderno criado para facilitar o uso e gestão do MongoDB."
        }
      />
      <CardTec
        icon={"https://cdn.simpleicons.org/git/F05032.svg"}
        title={"Git"}
        description={
          "Sistema de controle de versão usado para gerenciar projetos."
        }
      />

      <CardTec
        icon={"https://cdn.simpleicons.org/github/ffffff.svg"}
        title={"GitHub"}
        description={
          "Plataforma online para hospedar projetos e colaborar em equipe."
        }
      />
      <CardTec
        icon={"https://cdn.simpleicons.org/typescript/3178c6.svg"}
        title={"TypeScript"}
        description={
          "Superset do JavaScript que adiciona tipagem estática segura."
        }
      />
    </main>
  );
}

export default Tecnologias;
