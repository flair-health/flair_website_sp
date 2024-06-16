const Pricing = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-serif  uppercase mt-8 mb-0 ">Pricing</h1>
      <p className="text-base mt-0">Plans that work for everyone</p>
      <div className="flex justify-center flex-wrap my-8">
        <div className=" p-8 rounded-xl m-2 text-white bg-gradient-to-br from-teal-500 to-blue-700">
          <div className="text-left">
            <span className="text-primary font-semibold text-lg block mb-4">
              {" "}
              Insurance{" "}
            </span>
            <h2 className="font-bold text-dark mb-5 text-[42px]">
              {" "}
              $0{" "}
              <span className="text-base text-dark font-medium">
                {" "}
                / month{" "}
              </span>{" "}
            </h2>
            <p className="text-base text-dark pb-8 mb-8 border-b border-[#F2F2F2]">
              {" "}
              We work with Medicare and most commercial health insurance plans.
            </p>
            <div className="mb-7">
              <li className="text-base text-dark leading-loose mb-1">
                Whole Health Evaluation
              </li>
              <li className="text-base text-dark leading-loose mb-1">
                Personalized Meal Plan From Dietitian
              </li>
              <li className="text-base text-dark leading-loose mb-1">
                Virtual Health Coaching Sessions
              </li>
              <li className="text-base text-dark leading-loose mb-1">
                Access to the Flair App{" "}
              </li>
            </div>
            <a
              href="#contact"
              className="w-full block text-base font-semibold text-white bg-primary border border-primary rounded-md text-center p-4 hover:bg-opacity-90 transition"
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

        <div className=" p-8 rounded-xl m-2 text-gray-700 bg-gradient-to-br from-gray-200 to-gray-50">
          <h2 className="uppercase mb-4">Enterprise</h2>
          <p className="text-4xl font-black text-teal-500">
            $49.99<span className="block text-xl font-light">/month</span>
          </p>
          <p className="my-8 leading-loose">
            Eleifend cursus volutpat risus convallis nam sed quam sollicitudin
            eget leo at erat cursus justo
          </p>
          <a
            href="#"
            className="inline-block py-2 px-3 rounded-md uppercase font-bold text-white bg-gray-700 transition-opacity duration-300 hover:opacity-70"
          >
            Join Now
          </a>
        </div>
      </div>
      <p className="text-lg mb-2">Need something different? No problem!</p>
      <a
        href="#"
        className="inline-block py-2 px-3 rounded-md uppercase font-bold text-white bg-teal-500 transition-opacity duration-300 hover:opacity-70 mb-12"
      >
        Get in touch
      </a>
    </div>
  );
};

export default Pricing;
