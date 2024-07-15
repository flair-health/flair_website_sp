import { Star } from "lucide-react";

type Ttesticontent = {
  numberStars: number;
  review: string;
  name: string;
  about: string;
};

const TestimonialCard = (props: Ttesticontent) => {
  const stars = Array.from({ length: props.numberStars }, (_, index) => (
    <Star key={index} className="md:w-8 md:h-8" color="#14a8e1" />
  ));

  return (
    <div className="flex flex-col md:gap-8 gap-4">
      <div className="flex md:m-auto">{stars}</div>
      <div className="md:w-3/4 text-base md:text-center text-left  md:text-3xl m-auto">
        &quot;{props.review}&quot;
      </div>
      <div className="flex flex-col text-left md:text-center">
        <div className="text-sm md:text-base font-semibold">{props.name}</div>
        <div className="text-sm md:text-base text-gray-500">{props.about}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
