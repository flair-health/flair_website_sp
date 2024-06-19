import GlassCard from "../glassComponent/glassCard";
import Lottie, { Options } from "react-lottie";
import animationData from "../../lotties/animation-9yyzZ.json";

const HeroSection = () => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="relative w-full overflow-x-clip mt-10 md:mt-14">
        <div className="absolute -left-[530px] -z-50 ">
          <img
            src="/HeroMesh.svg"
            alt="gradient-bg"
            width="1000"
            height="1000"
          />
        </div>
        <div className="absolute -right-[390px] -top-80 -z-50 hidden md:block">
          <img src="/HeroMesh.svg" alt="gradient-bg" width="900" height="900" />
        </div>
      </div>
      <div className="container 2xl:gap-8 gap-2 2xl:flex-row">
        <div className="flex">
          <div className="2xl:text-6xl text-4xl font-bold md:w-[60%]">
            Integrated, Whole-Person &nbsp;
            <span className="inline-block">
              Care
              <svg
                width="100"
                height="12"
                viewBox="0 0 97 12"
                fill="none"
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.10938 9.99996C16.5301 5.44512 55.2734 -1.84575 94.8806 5.42957"
                  stroke="#FF9BFB"
                  strokeWidth="2.9866"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Services For Clinics
          </div>
          <div className="absolute right-0 left-0 mx-auto sm:w-full sm:max-w-xs md:right-20 overflow-hidden hidden md:block md:overflow-visible">
            <Lottie
              options={defaultOptions}
              height={700} // Reduced height
              width={700} // Reduced width
            />
          </div>
        </div>
        <div className="flex flex-col justify-between my-auto">
          <div
            className="2xl:text-lg text-sm md:w-[50%] mt-2 text-black md:text-gray-600 font-normal"
            data-aos="fade-up"
          >
            Flair Health is a virtual extension for medical practices, providing
            high-touch nutrition and health coaching services to patients with
            chronic conditions.
          </div>
          <div className="flex">
            <GlassCard />
          </div>
        </div>
      </div>
      {/* <div className="container mt-10">
        <div className="border-gray-200 border-[1px] shadow-sm shadow-blue-500/20 rounded-xl box-shadow">
          <video
            src="https://res.cloudinary.com/diftttclq/video/upload/v1718629473/gurl_1_mxfc1g.mp4"
            autoPlay={true}
            muted
            loop
            className="h-auto w-full max-h-[507px] object-cover md:h-[507px] rounded-xl "
          ></video>
        </div>
      </div> */}
      {/* <div className="container md:p-0 text-xs mt-2 md:mt-8  text-gray-500">
        Flair Health revolutionizes healthcare with cutting-edge technology,
        personalized care, and unparalleled convenience, ensuring optimal health
        and wellness from anywhere.
      </div> */}
    </div>
  );
};

export default HeroSection;
