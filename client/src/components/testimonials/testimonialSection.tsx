import TestimonialCard from "./testimonialsCard";

const Testomials = () => {
  return (
    <div className="bg-[#05071c] py-20">
      <div className="container text-center ">
        <div className="text-4xl font-semibold text-white uppercase mt-8 mb-4">
          Testimonials
        </div>
        <div className=" text-base mt-0 text-gray-200 pb-8">
          Hear from out customers
        </div>
        <div className="flex justify-between gap-8 flex-col lg:flex-row">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testomials;
