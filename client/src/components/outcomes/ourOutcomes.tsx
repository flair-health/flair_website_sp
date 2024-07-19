import OutcomeCard from "./outcomeCard";

const OurOutcomes = () => {
  return (
    <>
      <div
        className="container 2xl:text-4xl text-2xl md:w-[82%] pt-8 md:pt-28 md:mb-8 mb-4 md:m-auto md:marker:w-[70%] font-semibold md:text-center tracking-tight"
        id="functionality"
      >
        Our Outcomes
      </div>
      <div className="container flex justify-center ">
        <div className="flex md:max-w-[80%] xl:flex-row flex-col gap-8 m-auto align-middle">
          <OutcomeCard outcomeText="90% of patients continue services for 3+ months 🔥" />
          <OutcomeCard
            outcomeText="<1 min spent by clinic staff to enroll a patient ✨
"
          />
          <OutcomeCard
            outcomeText="4.6 average patient satisfaction (out of 5) ⭐️
"
          />
        </div>
      </div>
    </>
  );
};

export default OurOutcomes;
