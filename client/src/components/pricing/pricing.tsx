import CTAButton from "../button";

const Pricing = () => {
  return (
    <div className=" mt-10 md:mt-20 pb-20" id="pricing">
      <h1 className="container 2xl:text-4xl text-2xl pb-2 md:pb-4 2xl:w-[70%] font-semibold md:text-center">
        Pricing
      </h1>
      <p className="container text-base md:text-center mt-0 text-gray-500">
        Plans that work for everyone
      </p>
      <div className="flex justify-center flex-wrap my-8">
        <div
          className="container flex flex-wrap flex-col md:flex-row justify-center 2xl:w-1/2"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="p-8 rounded-3xl m-2  bg-gradient-to-br from-gray-200  text-black to-gray-50 flex-1">
            <div className="text-left">
              <span className="text-primary font-semibold text-lg block mb-4">
                Insurance
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $0
                <span className="text-base text-dark font-medium">/ month</span>
              </h2>
              <p className="text-base text-dark pb-8 mb-8 border-b border-gray-300">
                We work with Medicare and most commercial health insurance
                plans.
              </p>
              <div className="mb-7">
                <li className="md:text-base text-sm text-dark leading-loose mb-1">
                  Whole Health Evaluation
                </li>
                <li className="md:text-base text-sm text- text-dark leading-loose mb-1">
                  Personalized Meal Plan From Dietitian
                </li>
                <li className="md:text-base text-sm text-dark leading-loose mb-1">
                  Virtual Health Coaching Sessions
                </li>
                <li className="md:text-base text-sm text-dark leading-loose mb-1">
                  Access to the Flair App
                </li>
              </div>
              <a
                href="#contact"
                className="w-full block text-base font-semibold text-gray-700 bg-primary border border-primary rounded-md text-center p-4 hover:bg-opacity-90 transition"
              >
                Get Started
              </a>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="86"
                      cy="86"
                      r="86"
                      fill="url(#paint0_linear)"
                    ></circle>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09"></stop>
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div
            className="p-8 text-left rounded-3xl text-white m-2   bg-gradient-to-br from-teal-500 to-blue-700  flex-1"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="">
              <span className="text-primary font-semibold text-lg block mb-4">
                {" "}
                Self Pay{" "}
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                {" "}
                $99{" "}
                <span className="text-base text-dark font-medium">
                  {" "}
                  / month{" "}
                </span>{" "}
              </h2>
              <p className="text-base text-dark pb-8 mb-8 border-b border-[#F2F2F2]">
                For direct, cash-pay practices or individual patients.
              </p>
              <div className="mb-7 text-left">
                <li className="md:text-base text-sm text-dark leading-loose mb-1">
                  Whole Health Evaluation
                </li>
                <li className="md:text-base text-sm text-dark leading-loose mb-1">
                  Personalized Meal Plan From Dietitian
                </li>
                <li className="md:text-base text-sm text-dark leading-loose mb-1">
                  Virtual Health Coaching Sessions
                </li>
                <li className="md:text-base text-sm text-dark leading-loose mb-1">
                  Access to the Flair App
                </li>
              </div>
              <a
                href="#contact"
                className="w-full block text-base font-semibold text-primary bg-transparent border border-[#D4DEFF] rounded-md text-center p-4 hover:text-white hover:bg-primary hover:border-primary transition"
              >
                Get Started
              </a>

              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="86"
                      cy="86"
                      r="86"
                      fill="url(#paint0_linear)"
                    ></circle>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09"></stop>
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="container text-center text-base text-gray-500 mb-2">
        Need something different? No problem!
      </p>
      <div className="items-center flex">
        <a href="#" className="m-auto">
          <CTAButton title="Connect With Us" />
        </a>
      </div>
    </div>
  );
};

export default Pricing;
