import TestimonialCard from "./testimonialsCard";

const Testomials = () => {
  return (
    <div className="bg-[#05071c] py-10" id="testimonials">
      <div className="container md:text-center ">
        <div className="md:text-4xl text-2xl  font-semibold text-white mt-8 md:mb-4">
          Testimonials
        </div>
        <div className=" text-base mt-0 text-gray-200 pb-8">
          Hear from our customers
        </div>
        <div className="flex justify-between md:gap-8 gap-2 flex-col lg:flex-row">
          <div data-aos="fade-up">
            <TestimonialCard />
          </div>
          <div data-aos="fade-up" data-aos-delay="50">
            <TestimonialCard />
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <TestimonialCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testomials;
