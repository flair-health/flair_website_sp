import Lottie, { Options } from "react-lottie";
import animationData from "../../lotties/animation-9yyzZ.json";
import CTAButton from "../button";

const HeroSection = () => {
  const defaultOptions: Options = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="md:pb-20 pb-10">
      <div className="relative w-full overflow-x-clip mt-10 md:mt-14"></div>
      <div className="container 2xl:gap-8 gap-2 2xl:flex-row">
        <div className="flex">
          <div className="absolute left-40 -right-40 top-24  mx-auto sm:w-full  sm:max-w-xs  overflow-hidden hidden md:block md:overflow-visible">
            <Lottie
              options={defaultOptions}
              height={480} // Reduced height
              width={600} // Reduced width
            />
          </div>
          <div className="2xl:text-6xl text-4xl font-bold md:w-[60%] 2xl:leading-[72px] md:tracking-tight tracking-tighter">
            Reimagining patient journeys in{" "}
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
            className="2xl:text-lg text-sm md:w-[50%] mt-4 text-black md:text-gray-600 font-normal leading-[21.6px]"
            data-aos="fade-up"
          >
            Flair Health is a virtual extension for medical practices treating
            patients with inflammatory conditions, elevating the care experience
            for those affected by autoimmune diseases while generating revenue
            for clinics.
          </div>
          <form
            target="_blank"
            action="https://formsubmit.co/b502af0edb5c06969c992fbc4f10ee95"
            method="POST"
            className="relative max-w-[480px] pt-6"
          >
            <CTAButton title="Learn more" /> {/* Open the modal on click */}
          </form>
          <div className="flex"></div>
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
