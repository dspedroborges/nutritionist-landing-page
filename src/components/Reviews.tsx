import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  const [current, setCurrent] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1 },
    loop: true,
    slideChanged(slider) {
      setCurrent(slider.track.details.rel);
    },
  });

  return (
    <div className="bg-amber-50 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
          Testemunhos
        </h2>

        <div ref={sliderRef} className="keen-slider">
          {reviews.map((review, idx) => (
            <div key={idx} className="keen-slider__slide">
              <div className="flex flex-col gap-3 rounded-lg bg-white border border-gray-300 p-6">
                <div>
                  <span className="block font-bold">{review.name}</span>
                  <span className="block text-sm text-gray-500">
                    {review.date}
                  </span>
                </div>

                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) =>
                    i < review.rating ? (
                      <AiFillStar key={i} className="text-yellow-400" />
                    ) : (
                      <AiOutlineStar key={i} className="text-gray-300" />
                    )
                  )}
                </div>

                <p className="text-gray-600">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-2 w-2 rounded-full ${
                current === idx ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}