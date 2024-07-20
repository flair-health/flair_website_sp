import MarqueeEffect from "../collab/collab";
import ContactSection from "../contact/Contact";
import TeamCard from "./teamCard";

const OurTeamSection = () => {
  return (
    <div className="container pt-10 md:w-[82%]">
      <div className=" 2xl:text-4xl md:text-center m-auto font-semibold text-2xl 2xl:pb-2 pb-2 tracking-tight">
        Our Team
      </div>
      <div className="md:text-center text-sm font-normal text-gray-500 2xl:text-base 2xl:w-[60%] mb-8 m-auto">
        Our team at Flair is dedicated to providing innovative, personalized
        support for autoimmune and inflammatory conditions.
      </div>

      <div className="flex md:gap-4 gap-2 md:w-[65%] flex-col md:flex-row  items-center justify-center m-auto">
        <TeamCard
          name="Diva Sharma"
          img="/diva_sharma.jpeg"
          title="Co-Founder"
          desc="Diva studied Computer Science at Stanford with a focus on Human Computer Interaction and Design. Prior to Tennr he built automation systems at Goldman Sachs as an automation engineer."
        />
        <TeamCard
          name="Shobha Dasari"
          img="/shobha_dasari.png"
          title="Co-Founder"
          desc="Shobha studied Computer Science at Stanford with a focus on Human Computer Interaction and Design. Prior to Tennr he built automation systems at Goldman Sachs as an automation engineer."
        />
      </div>
      <div className="flex md:gap-4 gap-2 md:flex-row flex-col  items-center justify-center m-auto">
        <TeamCard
          name="Bonnie Kuss"
          img="/bonnie_kuss.jpeg"
          title="Registered Dietitian"
          bios="(MPH, RD, LD)"
          desc="Bonnie studied Computer Science at Stanford with a focus on Human Computer Interaction and Design. Prior to Tennr he built automation systems at Goldman Sachs as an automation engineer."
        />
        <TeamCard
          name="Heather Finn"
          img="/heather_finn.jpeg"
          bios="(MS, BCBA, NBC-HWC)"
          title="Health Coach"
          desc="Heather studied Computer Science at Stanford with a focus on Human Computer Interaction and Design. Prior to Tennr he built automation systems at Goldman Sachs as an automation engineer."
        />
        <TeamCard
          name="Kendall Cwik"
          bios="(MS)"
          img="/kendall_cwik.jpeg"
          title="Health Coach"
          desc="Heather studied Computer Science at Stanford with a focus on Human Computer Interaction and Design. Prior to Tennr he built automation systems at Goldman Sachs as an automation engineer."
        />
      </div>

      <MarqueeEffect />
      <ContactSection />
    </div>
  );
};

export default OurTeamSection;
