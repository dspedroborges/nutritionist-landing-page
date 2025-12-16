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
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1 },
    loop: true,
  });

  return (
    <div className="bg-amber-50 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
          Testemunhos
        </h2>

        <div className="relative">
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

          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 cursor-pointer text-2xl"
          >
            ‹
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 cursor-pointer text-2xl"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
