const HowItWorks = () => {
  return (
    <>
      <div
        className="container 2xl:text-4xl text-2xl md:w-[82%] pt-8 md:pt-28 md:mb-8 md:m-auto md:marker:w-[70%] font-semibold md:text-center tracking-tight"
        id="functionality"> How Specialty Pharmacies Work With Us
      </div>
      <div className="container md:w-[92%] flex flex-col md:flex-row md:space-x-2 m-auto py-4 md:mt-4 md:py-4 lg:grid-cols-11">
        <div className="flex flex-col md:flex-row items-center justify-between w-full my-8 md:my-4 md:w-1/4 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 py-6 md:py-8 dark:from-[#4F54DC]">
          <span className="inline-flex items-center gap-2">
            <span className="text-7xl font-bold text-gray-200 md:text-8xl"> 1 </span>
            <div>
              <p className="text-lg leading-normal sm:text-xl sm:font-medium"> Identifying </p>
              <p className="text-sm text-gray-500"> 
              through our AI any unresolved claims with payers or manufacturers and find opportunities for alternate funding - reducing financial leakage.
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
              <p className="text-lg leading-normal sm:text-xl sm:font-medium"> Automatically </p>
              <p className="text-sm text-gray-500">
                following up on those claim statuses - enabling real-time A/R tracking through one portal.
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
              <p className="text-lg leading-normal sm:text-xl sm:font-medium"> Centralizing  </p>
              <p className="text-sm text-gray-500">
              all logins into multiple portals to track claim amounts and patient assistance funds, simplifying access for financial teams.
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
              Matching 
              </p>
              <p className="text-sm text-gray-500">
              unmarked checks and EFT payments to patient accounts, ensuring accuracy.
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
              Analyzing
              </p>
              <p className="text-sm text-gray-500">
              financial data into real-time analytics highlighting claims statuses and trends for your accounting team.
              </p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;