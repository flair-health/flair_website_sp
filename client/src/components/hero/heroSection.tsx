import Lottie, { Options } from "react-lottie";
import animationData from "../../lotties/animation-9yyzZ.json";
import { Button } from "../../../components/ui/button";

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
    <div className=" md:pb-20  2xl:mt-14  justify-center m-auto pt-10 ">
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

        <div className="flex flex-col">
          <div className="  mx-auto sm:w-full  sm:max-w-xs  hidden md:block md:overflow-visible">
            <Lottie
              options={defaultOptions}
              width={150}
              // Reduced width
            />
          </div>
          <div className="container md:text-center text-4xl font-bold sm:px-10 sm:text-5xl md:text-[60px] md:leading-[81px]">
            Reimagining patient journeys <br />
            in{" "}
            <span className="inline-block tracking-tighter">
              autoimmune
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
            <div className="tracking-tighter inline-block"> care</div>
          </div>
        </div>
        <div className="flex flex-col justify-between my-auto">
          <div
            className="container md:text-center text-left sm:text-base 2xl:text-lg  md:mt-8 mt-4 text-gray-500 md:w-[65%] m-auto"
            data-aos="fade-up"
          >
            Flair Health is a virtual extension for medical practices treating
            patients with inflammatory conditions, elevating the care experience
            for those affected by autoimmune diseases while generating revenue
            for clinics.
          </div>
          <div className="container flex md:justify-center md:m-auto md:mt-8 mt-4">
            <Button className="border-[#14a8e1] hover:text-#14a8e1 bg-#14a8e1 cursor-pointer dark:border-cornblue-500/80 text-[#14a8e1]  group relative inline-flex rounded-full border font-semibold backdrop-blur hover:bg-zinc-50 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white md:py-4 md:px-6">
              <a href="#about">Learn More</a>
            </Button>{" "}
            {/* Open the modal on click */}
          </div>
        </div>
        <div></div>
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
