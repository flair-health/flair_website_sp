import Partners from "./teamLogos";
import ContactSection from "../contact/Contact";
import TeamCard from "./teamCard";

const TeamSection = () => {
  return (
    <div className="container pt-10 md:w-[82%]">
      <div className=" 2xl:text-4xl md:text-center m-auto font-semibold text-2xl 2xl:pb-2 pb-2 tracking-tight">
        Our Team
      </div>
      <div className="md:text-center font-normal text-gray-500 2xl:text-base mb-8">
        Our team at Flair is dedicated to enabling patient access to specialty medications.
      </div>

      <div className="flex md:gap-4 gap-2 md:w-[65%] flex-col md:flex-row  items-center justify-center m-auto">
        <TeamCard
          name="Diva Sharma"
          img="/diva_sharma.jpeg"
          title="Co-Founder"
        />
        <TeamCard
          name="Shobha Dasari"
          img="/shobha_dasari.png"
          title="Co-Founder"
        />
      </div>
      <Partners />
      <ContactSection />
    </div>
  );
};

export default TeamSection;