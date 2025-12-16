import { useState, type ReactNode } from "react";
import { BsWhatsapp } from "react-icons/bs";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({
  faqs = [],
  buttonLink,
  buttonText,
  buttonIcon,
}: {
  faqs?: FAQItem[];
  buttonLink: string;
  buttonText: string;
  buttonIcon?: ReactNode;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">
            Perguntas Frequentes
          </h2>
          <p className="mx-auto max-w-3xl text-center text-gray-500 md:text-lg">
            Aqui você encontra respostas para as dúvidas mais comuns sobre acompanhamento nutricional e hábitos alimentares saudáveis.
          </p>
        </div>

        <ul className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <li key={i} className="rounded-lg bg-gray-100 hover:bg-gray-200">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 border-b border-gray-300 p-5 text-left"
                >
                  <h3 className="font-semibold text-gray-700 cursor-pointer sm:text-lg md:text-xl">
                    {faq.question}
                  </h3>

                  <span className="flex shrink-0 h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-gray-600 text-lg cursor-pointer hover:bg-gray-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-5 pt-4 text-gray-500">
                    {faq.answer}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <a
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-linear-to-r from-green-500 to-green-800 text-white px-4 py-4 rounded-xl hover:opacity-80 cursor-pointer font-bold mt-16 mx-8 flex items-center gap-2 justify-center text-2xl"
      >
        {buttonIcon || <BsWhatsapp />}
        <span>{buttonText}</span>
      </a>
    </section>
  );
}