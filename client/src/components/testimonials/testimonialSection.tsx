import TestimonialCard from "./testimonialsCard";

const Testomials = () => {
  return (
    <div className="bg-[#05071c] py-20" id="testimonials">
      <div className="container text-center ">
        <div className="text-4xl font-semibold text-white mt-8 mb-4">
          Testimonials
        </div>
        <div className=" text-base mt-0 text-gray-200 pb-8">
          Hear from our customers
        </div>
        <div className="flex justify-between md:gap-8 gap-4 flex-col lg:flex-row">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testomials;
