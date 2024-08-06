import Card from "../card";

const About = () => {
  return (
    <div className="container md:w-[82%] flex flex-col md:items-center mt-10  md:mt-20 md:gap-2 gap-2">
      <div
        className="2xl:text-4xl w-full text-2xl pb-4 md:w-[75%] font-semibold md:text-center tracking-tight"
        id="about"
      >
        Flair Health helps rheumatology practices provide patients with
        personalized nutrition care, health coaching support, and medication access support.
      </div>

      <div className="flex md:gap-12 gap-4 md:flex-row flex-col">
        <div data-aos="fade-up" data-aos-delay="50">
          <Card
            head="For Patients"
            desc="Reach your best health with personalized support from your doctor, dietitian, health coach, and pharmacist."
            url="patient.png"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <Card
            head="For Clinics"
            desc="Provide the best possible experience for autoimmune patients and generate additional revenue, with low admin overhead."
            url="hospital.png"
            data-aos-delay="50"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <Card
            head="For Pharmacies"
            desc="Help more patients start and stay on complex specialty therapies through detailed insights into the full patient journey."
            url="pharmacy.png"
            data-aos-delay="50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;