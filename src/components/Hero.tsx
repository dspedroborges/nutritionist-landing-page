import type { ReactNode } from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function Hero({
  title,
  description,
  buttonLink,
  buttonText,
  mainImage,
  backgroundImage,
  cards = [],
}: {
  title: string;
  description: string;
  buttonLink: string;
  buttonText: string;
  mainImage: string;
  backgroundImage: string;
  cards?: { icon: ReactNode; name: string }[];
}) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-yellow-50 min-h-[80vh] relative px-4 md:px-16 py-8 md:py-0">
      <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-snug mb-4 text-center md:text-left">
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <p className="mb-4 text-gray-700 text-justify md:text-left text-base md:text-lg">
          {description}
        </p>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-r from-green-500 to-green-800 text-white px-4 py-2 rounded-xl hover:opacity-80 cursor-pointer text-lg font-bold self-center md:self-start mt-2 flex items-center gap-2"
        >
          <BsWhatsapp />
          <span>{buttonText}</span>
        </a>
      </div>

      <div className="md:w-1/2 w-full h-64 md:h-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <img src={mainImage} className="relative w-full h-full object-contain" />
      </div>

      <div className="flex flex-wrap gap-4 lg:absolute -bottom-16 md:-bottom-8 left-0 w-full justify-center px-4 z-50">
        {cards.map((card, idx) => (
          <LittleCard key={idx} icon={card.icon} name={card.name} />
        ))}
      </div>
    </div>
  );
}

function LittleCard({ icon, name }: { icon: React.ReactNode, name: string }) {
  return (
    <div className="bg-linear-to-r from-green-700 to-green-600 rounded-xl shrink-0 flex items-center p-4 gap-2 text-white w-full lg:w-auto hover:scale-105 cursor-pointer">
      {icon}
      <span className="text-xl">{name}</span>
    </div>
  )
}