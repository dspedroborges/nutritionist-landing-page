import { BiDumbbell, BiFoodMenu } from "react-icons/bi";
import { BsGithub, BsGlobe, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { MdWoman } from "react-icons/md";
import { SiPortainer } from "react-icons/si";
import Hero from "./components/Hero";
import Reasons from "./components/Reasons";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Reviews from "./components/Reviews";

const reasons = [
  {
    title: "Saúde e Bem-estar",
    content: "Acompanhamento nutricional ajuda a manter seu corpo saudável, prevenindo doenças e melhorando sua qualidade de vida."
  },
  {
    title: "Controle de Peso",
    content: "Planos alimentares personalizados auxiliam no emagrecimento saudável ou no ganho de massa muscular de forma equilibrada."
  },
  {
    title: "Energia e Performance",
    content: "Uma alimentação adequada aumenta sua energia, melhora o desempenho físico e mental e fortalece o sistema imunológico."
  }
];

const faqs = [
  {
    question: "Por que a nutrição é importante?",
    answer: "Uma alimentação equilibrada fornece os nutrientes necessários para o bom funcionamento do corpo, melhora a imunidade e previne doenças."
  },
  {
    question: "Como funciona o acompanhamento nutricional?",
    answer: "O nutricionista avalia seu histórico, hábitos alimentares e objetivos para criar um plano alimentar personalizado."
  },
  {
    question: "Qual é a diferença entre dietas populares e nutricionismo?",
    answer: "Dietas populares podem ser restritivas e temporárias, enquanto o acompanhamento nutricional foca em hábitos saudáveis e sustentáveis a longo prazo."
  },
  {
    question: "Quais benefícios posso esperar?",
    answer: "Acompanhamento nutricional pode melhorar energia, digestão, composição corporal e saúde mental."
  },
  {
    question: "Nutricionismo é só para quem quer emagrecer?",
    answer: "Não, é para todas as idades e objetivos, incluindo ganho de massa muscular, prevenção de doenças e melhora da qualidade de vida."
  },
];

function App() {
  return (
    <>
      <BackToTop />
      <Hero
        title={"Atendimento\nNutricional Online"}
        description="Transforme sua saúde com acompanhamento nutricional personalizado. Planos alimentares pensados para você, que equilibram bem-estar, energia e qualidade de vida."
        buttonLink="https://wa.me/5561996524269"
        buttonText="Agendar Consulta"
        mainImage="man.webp"
        backgroundImage="leafs.webp"
        cards={[
          { icon: <SiPortainer />, name: "Nutrição Esportiva" },
          { icon: <BiDumbbell />, name: "Hipertrofismo" },
          { icon: <MdWoman />, name: "Emagrecimento" },
          { icon: <BiFoodMenu />, name: "Educação Alimentar" },
        ]}
      />
      <Reasons title={`Por que preciso de\num nutricionista?`} backgroundImage="food.png" reasons={reasons} />
      <About
        name="Dr. João Silva"
        title="Permita-me apresentar"
        description="Dr. João Silva é nutricionista formado pela Universidade XYZ, com mais de 12 anos de experiência em nutrição clínica e esportiva. Ele cria planos alimentares personalizados que ajudam cada paciente a atingir saúde, bem-estar e qualidade de vida."
        image="/man.webp"
        buttonLink="https://wa.me/5561996524269"
        buttonText="Agendar Consulta"
        buttonIcon={<BsWhatsapp />}
      />
      <Reviews
        reviews={[
          {
            name: "Ana Souza",
            date: "10 de Outubro de 2025",
            rating: 5,
            text: "As consultas com o Dr. João foram transformadoras! Ele cria planos alimentares personalizados de acordo com minhas necessidades, e já percebi melhorias na minha saúde e disposição.",
          },
          {
            name: "Carlos Mendes",
            date: "5 de Setembro de 2025",
            rating: 5,
            text: "O acompanhamento nutricional do Dr. João é excelente. Ele explica tudo de forma clara e acompanha meu progresso de perto. Me sinto mais saudável e com energia todos os dias.",
          },
          {
            name: "Beatriz Lima",
            date: "22 de Agosto de 2025",
            rating: 4,
            text: "Adorei o plano alimentar personalizado! Alguns ajustes foram desafiadores no começo, mas já notei melhorias significativas no meu bem-estar e hábitos alimentares.",
          },
        ]}
      />
      <FAQ
        faqs={faqs}
        buttonLink="https://wa.me/5561996524269"
        buttonText="Agendar Consulta"
        buttonIcon={<BsWhatsapp />}
      />
      <Footer
        nav={[
          { label: "Sobre", href: "#about" },
          { label: "Perguntas Frequentes", href: "#faq" },
          { label: "Motivos", href: "#reasons" },
        ]}
        social={[
          { icon: <BsLinkedin />, href: "https://www.linkedin.com/in/dspedroborges/" },
          { icon: <BsGithub />, href: "https://github.com/dspedroborges" },
          { icon: <BsGlobe />, href: "https://borgespedro.com.br/" },
        ]}
        copyright={`© ${new Date().getFullYear()} - made by Pedro Borges`}
      />
    </>
  )
}

export default App
