import Card from "../card";

const About = () => {
  return (
    <div className="container md:w-[82%] flex flex-col md:items-center mt-10  md:mt-20 md:gap-2 gap-2">
      <div
        className="2xl:text-4xl w-full text-2xl pb-4 md:w-[75%] font-semibold md:text-center tracking-tight"
        id="about"
      >
        Flair's platform helps pharmacies and dispensing sites recover payments by resolving misallocated and unaccounted claims,helping you close your books faster.
      </div>

      <div className="flex md:gap-12 gap-4 md:flex-row flex-col">
        <div data-aos="fade-up" data-aos-delay="50">
          <Card
            head="Improved Cash Flow"
            desc="We use AI to identify and recover outstanding claims by following up with payers and manufacturers on denials and ignored claims."
            url="money.png"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <Card
            head="Delegate Task Overload"
            desc="We handle labor-intensive and backlogged tasks efficiently, ensuring your team remains focused on day-to-day operations without disruption."
            url="doctors-office.png"
            data-aos-delay="50"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <Card
            head="Real-Time Insights"
            desc="We simplify real-time claims visibility, aging receivables, and payer performance, speeding up payment resolution and boosting efficiency."
            url="stats.png"
            data-aos-delay="50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;