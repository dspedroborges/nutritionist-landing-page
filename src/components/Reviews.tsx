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
  return (
    <div className="bg-amber-50 min-h-screen flex items-center py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
          Testemunhos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col gap-3 rounded-lg bg-white border border-gray-300 p-4 md:p-6">
              <div>
                <span className="block text-sm font-bold md:text-base">{review.name}</span>
                <span className="block text-sm text-gray-500">{review.date}</span>
              </div>

              {/* Stars */}
              <div className="-ml-1 flex gap-0.5">
                {[...Array(5)].map((_, i) =>
                  i < review.rating ? (
                    <AiFillStar key={i} className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <AiOutlineStar key={i} className="h-5 w-5 text-gray-300" />
                  )
                )}
              </div>

              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}