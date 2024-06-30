import Card from "../card";

const About = () => {
  return (
    <div className="container flex flex-col 2xl:items-center mt-10 md:mt-40 md:gap-4 gap-2">
      <div className="2xl:text-4xl w-full text-2xl 2xl:w-[70%] font-semibold 2xl:text-center tracking-tight">
        Flair Health helps rheumatology practices provide patients with
        personalized nutrition and health coaching support, covered by
        insurance.
      </div>
      <div className="2xl:text-center text-sm font-normal text-gray-500 2xl:text-base 2xl:w-[40%] mb-8">
        We are setting new standard of care for families across geographies,
        cultural and background.
      </div>
      <div className="flex md:gap-12 gap-4 md:flex-row flex-col">
        <div data-aos="fade-up">
          <Card
            head="For Employers"
            desc="Flair’s lifestyle-based care management services empower doctors to
        support patients with chronic"
            url="firefighter.gif"
          />
        </div>
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
