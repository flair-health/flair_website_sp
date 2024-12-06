import Partners from "./teamLogos";
import ContactSection from "../contact/Contact";

const TeamSection = () => {
  return (
    <div className="container md:w-[82%]">
      <Partners />
      <ContactSection />
    </div>
  );
};

export default TeamSection;