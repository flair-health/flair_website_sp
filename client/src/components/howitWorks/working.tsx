import StepCard from "../stepCard";

const Working = () => {
  return (
    <>
      <div
        className="container 2xl:text-4xl text-2xl md:w-[82%] pt-8 md:pt-28 md:mb-8 mb-4 md:m-auto md:marker:w-[70%] font-semibold md:text-center tracking-tight"
        id="functionality"
      >
        How It Works
      </div>
      <div className="container flex  flex-wrap xl:flex-row  gap-4 justify-center">
        <StepCard
          head="Step 1"
          desc="Flair’s team reviews health history and nutrition assessment to understand current dietary habits/status. "
        />
        <StepCard
          head="Step 2"
          desc="RD provides initial individualized nutritional recommendations and resources, using  anti-inflammatory or other specialized protocol.
 "
        />
        <StepCard
          head="Step 3"
          desc="Follow up visits with RD or HC to evaluate dietary changes and progress (e.g., reduced flares, improved digestion, etc) based on patient goals.
 "
        />
        <StepCard
          head="Step 4"
          desc="Use existing billing codes (99426 and 99490) to cover the patient’s visit under insurance and generate additional revenue for the practice.
"
        />
      </div>
    </>
  );
};

export default Working;
