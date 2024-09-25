import Lottie, { Options } from "react-lottie";
import animationData from "../../lotties/animation-9yyzZ.json";
import CTAButton from "../button";

const HeroSection = () => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <div className=" md:pb-20 mt-8 2xl:mt-14 xl:mt-10 justify-center m-auto  ">
      <div className=" 2xl:gap-8 gap-2 2xl:flex-row ">
        <div className="relative w-full overflow-x-clip hidden md:block">
          <div className=" absolute -left-[530px] -z-50 ">
            <img
              src="/HeroMesh.svg"
              alt="gradient-bg"
              width="1000"
              height="1000"
            />
          </div>
          <div className="absolute -right-[390px] -top-80 -z-50">
            <img
              src="/HeroMesh.svg"
              alt="gradient-bg"
              width="900"
              height="900"
              className="overflow-x-hidden"
            />
          </div>
        </div>

        <div className="flex flex-col ">
          {/* <div className="container md:text-center 2xl:pb-8">
            <div className="font-medium">Backed by</div>
            <div className="p-0 -mt-4 -ml-2 md:ml-0">
              <img
                className="md:m-auto xl:w-[150px] 2xl:w-[180px]"
                src="/yc.svg"
                alt="yc"
              />
            </div>
          </div> */}
          <div className="  mx-auto sm:w-full  sm:max-w-xs  hidden md:block md:overflow-visible">
            <Lottie options={defaultOptions} width={150} />
          </div>
          <div className="container tracking-tighter md:text-center text-4xl font-bold sm:px-10 sm:text-5xl md:text-[60px] md:leading-[81px]">
            Transforming Accounts Receivable <br />
            for{" "}
            <span className="inline-block tracking-tighter">
            Specialty
              <svg
                width="180"
                height="25"
                viewBox="0 0 97 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  d="M2.10938 9.99996C16.5301 5.44512 55.2734 -1.84575 94.8806 5.42957"
                  stroke="#0099cc"
                  strokeWidth="2.9866"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            <div className="tracking-tighter inline-block"> Medications </div>
          </div>
        </div>
        <div className="flex flex-col justify-between my-auto">
          <div className="container md:text-center text-left sm:text-lg 2xl:text-xl md:mt-8 mt-4 text-gray-500 md:w-[60%] m-auto" data-aos="fade-up">
            Boost collections and cash flow with Flair’s technology-enabled platform, designed for the unique challenges of specialty medication billing.
          </div>
          <div className="container flex md:justify-center md:m-auto md:mt-8 mt-4">
          <CTAButton title="Learn More" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HeroSection;