function CardTec({ icon, title, description }) {
  return (
    <div className="flex flex-col justify-between w-[80%] sm:w-[105%] lg:w-[95%] h-[8em] bg-white rounded-xl border-4 border-[#7BE141] p-3 cursor-pointer transition-transform duration-300 hover:scale-110">
      <section className="flex justify-between items-center w-full">
        <h1 className="font-bold text-lg">{title}</h1>
        <img src={icon} alt={title} className="w-8 h-8 object-contain" />
      </section>

      <div className="w-full text-center px-2">
        <p
          className="text-sm font-normal leading-snug"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default CardTec;
