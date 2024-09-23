const Button = ({ text = "кук", action = false }) => {
  return (
    <div
      className={`inline-block relative p-2 border-2 border-black font-sans ${
        action ? "bg-[#EEFF25] mt-6" : "mt-2"
      }`}
    >
      {text}
      <div className="absolute -top-2 -right-2 transform -rotate-45 transform-origin-bottom-left border-l-2 border-black bg-white w-4 h-4 z-10"></div>
    </div>
  );
};

export default Button;
