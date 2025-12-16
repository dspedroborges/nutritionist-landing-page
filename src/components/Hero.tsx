import { useEffect, type ReactNode } from "react";
import { BsWhatsapp } from "react-icons/bs";
import 'aos/dist/aos.css';
import AOS from 'aos';

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
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center bg-yellow-50 min-h-screen relative px-4 lg:px-16 py-8 lg:py-0">
      <div className="lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0">
        <h2 data-aos="fade-up" className="text-4xl lg:text-6xl font-extrabold leading-tight lg:leading-snug mb-4 text-center lg:text-left">
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <p data-aos="fade-up"  className="mb-4 text-gray-700 text-justify lg:text-left text-base lg:text-lg">
          {description}
        </p>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-auto text-center bg-linear-to-r from-green-500 to-green-800 text-white px-4 py-2 rounded-xl hover:opacity-80 cursor-pointer text-lg font-bold self-center lg:self-start mt-2 flex justify-center items-center gap-2"
        >
          <BsWhatsapp />
          <span>{buttonText}</span>
        </a>
      </div>

      <div className="lg:w-1/2 w-full h-1/2 lg:h-full relative mb-4">
        <div
          data-aos="fade-down"
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <img
          data-aos="fade-up"
          src={mainImage}
          alt="Image of a man"
          className="relative w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-wrap gap-4 lg:absolute -bottom-16 lg:-bottom-8 left-0 w-full justify-center px-4 z-50">
        {cards.map((card, i) => (
          <div data-aos="fade-up" data-aos-duration={`${i * 750}`} ><LittleCard key={i} icon={card.icon} name={card.name} /></div>
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