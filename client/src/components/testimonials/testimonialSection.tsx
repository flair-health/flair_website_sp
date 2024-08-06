import TestimonialCarousel from "./testimonialCarousel";

const Testimonials = () => {
  return (
    <div className="md:py-20 py-4" id="testimonials">
      <div className="container md:text-center ">
        <div className="md:text-4xl text-2xl  font-semibold mt-4 md:mt-8 md:mb-2 tracking-tight">
          Testimonials
        </div>
        <div className="md:text-center font-normal text-gray-500 2xl:text-base mb-8">
          Hear what patients have to say.
        </div>
        <div className="flex justify-between md:gap-8 gap-2 flex-col lg:flex-row">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;