import Partners from "../partners/partners";
import ContactSection from "../contact/Contact";
import TeamCard from "./teamCard";

const TeamSection = () => {
  return (
    <div className="container pt-10 md:w-[82%]">
      <div className=" 2xl:text-4xl md:text-center m-auto font-semibold text-2xl 2xl:pb-2 pb-2 tracking-tight">
        Our Team
      </div>
      <div className="md:text-center font-normal text-gray-500 2xl:text-base mb-8">
        Our team at Flair is dedicated to enabling specialty medication access by making your billing workflows robust.
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
      {/*<div className="flex md:gap-4 gap-2 md:flex-row flex-col  items-center justify-center m-auto">
        <TeamCard
          name="Bonnie Kuss"
          img="/bonnie_kuss.jpeg"
          title="Registered Dietitian"
          bios="(MPH, RD, LD)"
        />
        <TeamCard
          name="Heather Finn"
          img="/heather_finn.jpeg"
          bios="(MS, BCBA, NBC-HWC)"
          title="Health Coach"
        />
        <TeamCard
          name="Kendall Cwik"
          bios="(MS)"
          img="/kendall_cwik.jpeg"
          title="Health Coach"
        />
      </div>*/}

      <Partners />
      <ContactSection />
    </div>
  );
};

export default TeamSection;
