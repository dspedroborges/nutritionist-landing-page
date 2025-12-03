import type { ReactNode } from "react";
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
  return (
    <section id="faq" className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">
            Perguntas Frequentes
          </h2>
          <p className="mx-auto max-w-3xl text-center text-gray-500 md:text-lg">
            Aqui você encontra respostas para as dúvidas mais comuns sobre acompanhamento nutricional e hábitos alimentares saudáveis.
          </p>
        </div>
        {/* text - end */}

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg bg-gray-100 p-5">
              <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4 border-gray-300">
                <h3 className="font-semibold text-gray-500 sm:text-lg md:text-xl">{faq.question}</h3>
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-linear-to-r from-green-500 to-green-800 text-white px-4 py-4 rounded-xl hover:opacity-80 cursor-pointer font-bold self-center md:self-start mt-16 mx-8 flex items-center gap-2 justify-center text-2xl"
      >
        {buttonIcon || <BsWhatsapp />}
        <span>{buttonText}</span>
      </a>
    </section>
  );
}