import type { ReactNode } from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function About({
  name,
  title,
  description,
  image,
  buttonLink,
  buttonText,
  buttonIcon,
}: {
  name: string;
  title: string;
  description: string;
  image: string;
  buttonLink: string;
  buttonText: string;
  buttonIcon?: ReactNode;
}) {
  return (
    <section id="about" className="bg-yellow-50 px-8 py-8 lg:py-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={image}
            alt={name}
            className="object-cover rounded-xl"
            loading="lazy"
          />
        </div>
        {/* Texto */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <h3 className="text-xl font-semibold mb-4">{name}</h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-linear-to-r from-green-500 to-green-800 text-white px-4 py-2 rounded-xl hover:opacity-80 cursor-pointer text-lg font-bold self-center md:self-start mt-4 inline-flex items-center gap-2"
          >
            {buttonIcon || <BsWhatsapp />}
            <span>{buttonText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}