import Card from "../card";

const About = () => {
  return (
    <div className="container md:w-[82%] flex flex-col md:items-center mt-10  md:mt-20 md:gap-2 gap-2">
      <div className="2xl:text-4xl w-full text-2xl pb-4 md:w-[75%] font-semibold md:text-center tracking-tight">
        Flair Health helps rheumatology practices provide patients with
        personalized nutrition and health coaching support, covered by
        insurance.
      </div>

      <div className="flex md:gap-12 gap-4 md:flex-row flex-col">
        <div data-aos="fade-up" data-aos-delay="50">
          <Card
            head="For Patients"
            desc="Make progress towards your health coals with additional support from qualified dieticians and health coaches between doctor's visits.
"
            url="gestation.gif"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <Card
            head="For Clinics"
            desc="Provide the best possible patient experience and generate additional revenue, with low admin overhead."
            url="hospital.gif"
            data-aos-delay="50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
