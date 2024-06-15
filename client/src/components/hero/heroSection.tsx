const HeroSection = () => {
  return (
    <div>
      <div className="relative w-full overflow-x-clip mt-10">
        <div className="absolute -left-[530px] -z-50 ">
          <img
            src="/HeroMesh.svg"
            alt="gradient-bg"
            width="1000"
            height="1000"
          />
        </div>
        <div className="absolute -right-[390px] -top-80 -z-50 ">
          <img src="/HeroMesh.svg" alt="gradient-bg" width="900" height="900" />
        </div>
      </div>
      <div className="container flex 2xl:gap-8 gap-2 flex-col 2xl:flex-row">
        <div className="2xl:text-6xl text-4xl font-semibold font-serif">
          Integrated, Whole-Person Care Services For Clinics
        </div>
        <div className="flex flex-col justify-between">
          <div className="2xl:text-md text-sm w-[85%] font-normal">
            Flair Health is a virtual extension for medical practices, providing
            high-touch nutrition and health coaching services to patients with
            chronic conditions.
          </div>
          <div className="mt-2">
            <button className="text-md bg-blue-400 text-white p-1 rounded-2xl px-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-10">
        <video
          src="/gurl.mp4"
          autoPlay
          className="h-auto w-full max-h-[507px] object-cover md:h-[507px] rounded-xl border-gray-400 border-2"
        ></video>
      </div>
    </div>
  );
};

export default HeroSection;
