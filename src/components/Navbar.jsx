import { useRecoilState } from "recoil";
import StateNav from "../state/StateNav";
import { useState } from "react";

function NavBar() {
  const [nav, setNav] = useRecoilState(StateNav);
  const [isOpen, setIsOpen] = useState(1);
  const [oldValue, setOldValue] = useState(1);

  return (
    <div className="w-[80%] h-20 border-b-2 border-white flex items-center gap-4 mb-6 sm:mb-8">
      <h1
        className="md:mr-[19%] xl:mr-[56%] text-[#7BE141] sm:text-[2em] font-bold cursor-pointer"
        onClick={() => setNav(1)}
      >
        {"<VT/>"}
      </h1>

      <button
        className={`w-auto sm:pl-6 sm:pr-6 p-2 cursor-pointer border-2 border-white h-[70%] rounded-xl transition-all duration-400 ${
          isOpen === 1 ? "bg-white text-black" : "text-white"
        }`}
        onClick={() => {
          setNav(1);
          setOldValue(1);
          setIsOpen(1);
        }}
        onMouseEnter={() => setIsOpen(1)}
        onMouseLeave={() => setIsOpen(oldValue)}
      >
        Home
      </button>

      <button
        className={`w-auto sm:pl-6 sm:pr-6 p-2 cursor-pointer border-2 border-white h-[70%] rounded-xl transition-all duration-400 ${
          isOpen === 2 ? "bg-white text-black" : "text-white"
        }`}
        onClick={() => {
          setNav(2);
          setOldValue(2);
          setIsOpen(2);
        }}
        onMouseEnter={() => setIsOpen(2)}
        onMouseLeave={() => setIsOpen(oldValue)}
      >
        Tecnologias
      </button>

      <button
        className={`w-auto sm:pl-6 sm:pr-6 p-2 cursor-pointer border-2 border-white h-[70%] rounded-xl transition-all duration-400 ${
          isOpen === 3 ? "bg-white text-black" : "text-white"
        }`}
        onClick={() => {
          setNav(3);
          setOldValue(3);
          setIsOpen(3);
        }}
        onMouseEnter={() => setIsOpen(3)}
        onMouseLeave={() => setIsOpen(oldValue)}
      >
        Projetos
      </button>
    </div>
  );
}

export default NavBar;
