const Process = () => {
  return (
    <>
      <div className="container md:w-[92%] flex flex-col md:flex-row md:space-x-2 m-auto py-4 md:mt-4 md:py-4 lg:grid-cols-11">
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4 md:mb-0 md:w-1/4 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 dark:from-[#4F54DC]">
          <span className="inline-flex items-center gap-2">
            <span className="text-7xl font-bold text-gray-200 md:text-8xl">
              1
            </span>
            <div>
              <p className="text-lg leading-normal sm:text-xl sm:font-medium">
                Enroll
              </p>
              <p className="text-sm text-gray-500">
                Refer patients to our program through your existing medical
                record
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

        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4 md:mb-0 md:w-1/4 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-4 dark:from-[#4F54DC]">
          <span className="inline-flex items-center gap-2">
            <span className="text-7xl font-bold text-gray-200 md:text-8xl">
              2
            </span>
            <div>
              <p className="text-lg leading-normal sm:text-xl sm:font-medium">
                Onboard
              </p>
              <p className="text-sm text-gray-500">
                Patients meet with a qualified dietitian and health coach in
                less than 2 weeks.
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

        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4 md:mb-0 md:w-1/4 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 dark:from-[#4F54DC]">
          <span className="inline-flex items-center gap-2">
            <span className="text-7xl font-bold text-gray-200 md:text-8xl">
              3
            </span>
            <div>
              <p className="text-lg leading-normal sm:text-xl sm:font-medium">
                Engage
              </p>
              <p className="text-sm text-gray-500">
                Flair team provides nutrition and lifestyle services to patients
                for 30-60 mins per month.
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

        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-1/4 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 dark:from-[#4F54DC]">
          <span className="inline-flex items-center gap-2">
            <span className="text-7xl font-bold text-gray-200 md:text-8xl">
              4
            </span>
            <div>
              <p className="text-lg leading-normal sm:text-xl sm:font-medium">
                Monitor
              </p>
              <p className="text-sm text-gray-500">
                Continuous monitoring of patients' progress and providing
                feedback.
              </p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Process;
