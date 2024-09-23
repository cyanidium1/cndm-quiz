import Button from "./Button";

const Card = () => {
  return (
    <div className="relative p-7 border-2 bg-white font-sans min-w-80 flex flex-col items-center">
      <h2
        style={{ fontFamily: "var(--font-sansation-bold)" }}
        className="text-2xl uppercase font-bold text-center max-w-60"
      >
        Ваша цIль купIвлI сайту?
      </h2>
      <p
        className="pt-3 pb-8 font-bold text-lg text-[#FF55E4]"
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        2 / 8
      </p>
      <Button text="Ну типа" />
      <Button text="Ага" action={true} />
      <div className="absolute -top-2 -right-2 transform -rotate-45 transform-origin-bottom-left border-l-2  bg-black w-4 h-4 z-10"></div>
    </div>
  );
};

export default Card;
