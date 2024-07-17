const VideoSection = () => {
  return (
    <div className="container md:w-[82%]  md:mt-40 mb-0 mt-0">
      <div className="2xl:text-4xl w-full text-2xl 2xl:w-[40%] m-auto font-semibold md:text-center md:mb-2 mb-2 tracking-tight">
        Our Collaborative Care Model
      </div>
      <p className="text-base mt-0 text-gray-500 m-auto md:text-center md:w-[50%] text-left md:pb-8 pb-4">
        Our program supports patients with inflammatory and autoimmune diseases
        through health coaches and dietitians.
      </p>

      <div className="flex flex-col-reverse 2xl:flex-row md:gap-8">
        <div
          id="w-node-_6230c4da-7d66-19a2-84f5-770748d1424a-509fcf08"
          className="m-auto w-full youtube-video my-6 md:my-0"
          data-aos="fade-up"
        >
          <div className="w-full md:h-[574px] h-[200px]">
            <iframe
              src="https://www.youtube.com/embed/j0bnCxfp7e0"
              className="w-full h-full rounded-2xl border-none"
              allow="autoplay; encrypted-media"
              title="Tennr Builds Specialized Language Models on AWS to Help Industry Customers Automate"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;
