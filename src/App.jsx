import NavBar from "./components/Navbar";
import StateNav from "./state/StateNav";
import { useRecoilState } from "recoil";
import Sobre from "./components/Sobre";
import Tecnologias from "./components/Tecnologias";
import Projetos from "./components/Projetos";

function App() {
  const [nav, setNav] = useRecoilState(StateNav);

  return (
    <main>
      <div className="w-screen min-h-screen bg-black flex flex-col items-center overflow-hidden">
        <NavBar />
        {nav === 1 ? (
          <Sobre />
        ) : nav === 2 ? (
          <Tecnologias />
        ) : nav === 3 ? (
          <Projetos />
        ) : null}
      </div>
    </main>
  );
}

export default App;
