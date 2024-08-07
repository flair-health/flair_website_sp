const HowItWorks = () => {
  return (
    <>
      <div
        className="container 2xl:text-4xl text-2xl md:w-[82%] pt-8 md:pt-28 md:mb-8 md:m-auto md:marker:w-[70%] font-semibold md:text-center tracking-tight"
        id="functionality"> How It Works
      </div>
      <div className="container md:w-[92%] flex flex-col md:flex-row md:space-x-2 m-auto py-4 md:mt-4 md:py-4 lg:grid-cols-11">
        <div className="flex flex-col md:flex-row items-center justify-between w-full my-8 md:my-4 md:w-1/4 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 py-6 md:py-8 dark:from-[#4F54DC]">
          <span className="inline-flex items-center gap-2">
            <span className="text-7xl font-bold text-gray-200 md:text-8xl"> 1 </span>
            <div>
              <p className="text-lg leading-normal sm:text-xl sm:font-medium"> Enroll </p>
              <p className="text-sm text-gray-500"> 
                Refer patients to the Flair Health program 
                through your existing medical record. 
              </p>
            </div>
          </span>
        </div>

        <div className="flex items-center justify-center mb-4 md:mb-0 md:w-1/24">
          <img
            src="/Arrow.svg"
            alt="Arrow"
            className="my-2 rotate-90 lg:rotate-0"
            width="20"
            height="50"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full my-8 md:my-4 md:w-1/4 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 py-6 md:py-8 dark:from-[#4F54DC]">
          <span className="inline-flex items-center gap-2">
            <span className="text-7xl font-bold text-gray-200 md:text-8xl"> 2 </span>
            <div>
              <p className="text-lg leading-normal sm:text-xl sm:font-medium"> Onboard </p>
              <p className="text-sm text-gray-500">
                Patients meet with a qualified dietitian or health coach in
                less than 2 weeks. Flair’s care team reviews the patient's health history to 
                understand current dietary habits/status.
              </p>
            </div>
          </span>
        </div>

        <div className="flex items-center justify-center mb-4 md:mb-0 md:w-1/24">
          <img
            src="/Arrow.svg"
            alt="Arrow"
            className="my-2 rotate-90 lg:rotate-0"
            width="20"
            height="50"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full my-8 md:my-4 md:w-1/4 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 py-6 md:py-8 dark:from-[#4F54DC]">
          <span className="inline-flex items-center gap-2">
            <span className="text-7xl font-bold text-gray-200 md:text-8xl"> 3 </span>
            <div>
              <p className="text-lg leading-normal sm:text-xl sm:font-medium"> Engage </p>
              <p className="text-sm text-gray-500">
                Flair's dietitians provide individualized nutritional 
                recommendations and resources, using anti-inflammatory protocols 
                customized to the patient.
              </p>
            </div>
          </span>
        </div>

        <div className="flex items-center justify-center mb-4 md:mb-0 md:w-1/24">
          <img
            src="/Arrow.svg"
            alt="Arrow"
            className="my-2 rotate-90 lg:rotate-0"
            width="20"
            height="50"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full my-8 md:my-4 md:w-1/4 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 py-6 md:py-8 dark:from-[#4F54DC]">
          <span className="inline-flex items-center gap-2">
            <span className="text-7xl font-bold text-gray-200 md:text-8xl">
              4
            </span>
            <div>
              <p className="text-lg leading-normal sm:text-xl sm:font-medium">
                Monitor
              </p>
              <p className="text-sm text-gray-500">
                Patients receive followup visits with dietitians and health coaches to 
                evaluate their dietary changes and progress (e.g., reduced flares, 
                improved digestion, etc).
              </p>
            </div>
          </span>
        </div>

        <div className="flex items-center justify-center mb-4 md:mb-0 md:w-1/24">
          <img
            src="/Arrow.svg"
            alt="Arrow"
            className="my-2 rotate-90 lg:rotate-0"
            width="20"
            height="50"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full my-8 md:my-4 md:w-1/4 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 py-6 md:py-8 dark:from-[#4F54DC]">
          <span className="inline-flex items-center gap-2">
            <span className="text-7xl font-bold text-gray-200 md:text-8xl">
              5
            </span>
            <div>
              <p className="text-lg leading-normal sm:text-xl sm:font-medium">
                Billing
              </p>
              <p className="text-sm text-gray-500">
                Clinics can use existing billing codes (99426 and 99490) to 
                cover the patient’s visit under insurance and generate additional 
                revenue for the practice.
              </p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;