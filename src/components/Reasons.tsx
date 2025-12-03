import { BsCheck2Circle } from "react-icons/bs";

type Reason = {
  title: string;
  content: string;
};

export default function Reasons({
  title,
  backgroundImage,
  reasons = [],
}: {
  title: string;
  backgroundImage: string;
  reasons?: Reason[];
}) {
  return (
    <section
      id="reasons"
      className="bg-gray-100 relative flex flex-col md:flex-row items-center justify-center py-24 md:py-32 gap-8 text-white bg-size-[30%] bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2
        style={{ textShadow: "2px 2px 4px black" }}
        className="text-3xl md:text-5xl font-bold text-center md:text-left"
      >
        {title.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </h2>

      <ul className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-6 w-full md:w-1/3">
        {reasons.map((r, i) => (
          <li key={i} className="flex items-center gap-2 mb-4">
            <BsCheck2Circle className="shrink-0 text-green-300 text-3xl md:text-4xl" />
            <div>
              <span className="font-bold mr-2">{r.title}:</span>
              <span>{r.content}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}