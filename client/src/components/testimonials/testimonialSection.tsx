import TestimonialCarousel from "./testimonialCarousel";

const Testomials = () => {
  return (
    <div className="py-10" id="testimonials">
      <div className="container md:text-center ">
        <div className="md:text-4xl text-2xl  font-semibold mt-4 md:mt-8 md:mb-2 tracking-tight">
          Testimonials
        </div>
        <div className=" text-base  text-gray-600 pb-6 md:pb-12">
          Hear from our customers
        </div>
        <div className="flex justify-between md:gap-8 gap-2 flex-col lg:flex-row">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testomials;
