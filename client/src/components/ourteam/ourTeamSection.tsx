import MarqueeEffect from "../collab/collab";
import TeamCard from "./teamCard";

const OurTeamSection = () => {
  return (
    <div className="container py-10">
      <div className="2xl:text-4xl md:text-center m-auto font-semibold text-2xl 2xl:pb-4 pb-2">
        Meet the team making it happen.
      </div>
      <div className="md:text-center text-sm font-normal text-gray-500 2xl:text-base 2xl:w-[60%] mb-8 m-auto">
        Discover the dedicated experts behind Flair Health, transforming chronic
        care through personalized nutrition and lifestyle coaching for better
        health outcomes.
      </div>

      <div className="flex md:gap-4 gap-2 flex-wrap items-center justify-center m-auto">
        <TeamCard
          name="Diva Sharma"
          img="/diva_sharma.jpeg"
          title="Co-founder"
          desc="Diva studied Computer Science at Stanford with a focus on Human Computer Interaction and Design. Prior to Tennr he built automation systems at Goldman Sachs as an automation engineer."
        />
        <TeamCard
          name="Shobha Dasari"
          img="/shobha_dasari.png"
          title="Co-founder"
          desc="Shobha studied Computer Science at Stanford with a focus on Human Computer Interaction and Design. Prior to Tennr he built automation systems at Goldman Sachs as an automation engineer."
        />
      </div>
      <div className="flex md:gap-4 gap-2 flex-wrap items-center justify-center m-auto">
        <TeamCard
          name="Bonnie Kuss, MPH, RD, LD"
          img="/bonnie_kuss.jpeg"
          title="Registered Dietitian"
          desc="Bonnie studied Computer Science at Stanford with a focus on Human Computer Interaction and Design. Prior to Tennr he built automation systems at Goldman Sachs as an automation engineer."
        />
        <TeamCard
          name="Heather Finn"
          img="/heather_finn.jpeg"
          title="Health Coach"
          desc="Heather studied Computer Science at Stanford with a focus on Human Computer Interaction and Design. Prior to Tennr he built automation systems at Goldman Sachs as an automation engineer."
        />
        <TeamCard
          name="Kendall Cwik"
          img="/kendall_cwik.jpeg"
          title="Health Coach"
          desc="Heather studied Computer Science at Stanford with a focus on Human Computer Interaction and Design. Prior to Tennr he built automation systems at Goldman Sachs as an automation engineer."
        />
      </div>

      <MarqueeEffect />
    </div>
  );
};

export default OurTeamSection;
