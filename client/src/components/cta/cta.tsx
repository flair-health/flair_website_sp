const CTA = () => {
  return (
    <section className="md:mt-20 mt-10">
      <div className="container">
        <div className="bg-[#00A8E1] rounded-md relative overflow-hidden z-10 text-center py-[70px]">
          <div className="max-w-[850px] mx-auto px-6 relative z-10">
            <h2 className="2xl:text-4xl text-2xl 2xl:w-[70%] font-semibold text-white pb-4 2xl:text-center m-auto">
              Interested in learning more about Flair for your practice?
            </h2>
            <form
              target="_blank"
              action="https://formsubmit.co/b502af0edb5c06969c992fbc4f10ee95"
              method="POST"
              className="relative max-w-[480px] mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-full border border-white border-opacity-[13%] bg-white bg-opacity-[15%] px-8 py-4 text-white placeholder-white placeholder-opacity-70 outline-none focus-visible:shadow-none focus:border-opacity-100 transition text-center sm:text-left mb-5 sm:mb-0"
              />
              <button className="bg-white text-primary rounded-full font-semibold text-base py-4 sm:py-[10px] px-5 w-full sm:w-auto sm:absolute right-2 top-2">
                Learn More
              </button>
            </form>
          </div>
          <div className="absolute bottom-0 left-0 right-0 w-full -z-1">
            <svg
              width="818"
              height="286"
              viewBox="0 0 818 286"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <circle
                cx="409"
                cy="409"
                r="408.5"
                stroke="url(#paint0_linear_0:1)"
              ></circle>
              <circle
                cx="409"
                cy="409"
                r="349.5"
                stroke="url(#paint1_linear_0:1)"
              ></circle>
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="-34.5"
                  y1="291.5"
                  x2="851"
                  y2="291.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.35"></stop>
                  <stop
                    offset="0.218415"
                    stopColor="white"
                    stopOpacity="0"
                  ></stop>
                  <stop
                    offset="0.728079"
                    stopColor="white"
                    stopOpacity="0"
                  ></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0.35"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="29.4768"
                  y1="308.45"
                  x2="787.24"
                  y2="308.45"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.35"></stop>
                  <stop
                    offset="0.218415"
                    stopColor="white"
                    stopOpacity="0"
                  ></stop>
                  <stop
                    offset="0.777261"
                    stopColor="white"
                    stopOpacity="0"
                  ></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0.35"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
