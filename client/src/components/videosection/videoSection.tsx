const VideoSection = () => {
  return (
    <div className=" container md:mt-20 mb-0 mt-0">
      <div className="2xl:text-4xl w-full text-2xl 2xl:w-[40%] m-auto font-semibold 2xl:text-center md:mb-4 mb-2">
        Hear what our team have to say.
      </div>
      <p className="text-base mt-0 text-gray-500 m-auto md:text-center md:w-[40%] text-left md:pb-8 pb-4">
        Discover Our Mission, Values, and the Dedicated Team Driving Our
        Commitment to Excellence and Innovation
      </p>

      <div className="flex flex-col-reverse 2xl:flex-row md:gap-8">
        <div className="2xl:w-3/4 my-auto">
          <div className="text-left text-xl md:text-2xl">Diva Sharma</div>
          <div className="text-left text-sm mb-4 text-[#14a8e1]">
            Co-founder of Flair Health
          </div>
          <div className="text-justify md:mb-8 mb-4">
            We find that there has been a tremendous acceleration of adoption
            over the last 3.5 years. And a big reason is the customer
            benefitting from the reduction in cost and the increase in
            operational effectiveness.
          </div>
          <div className="text-left text-xl md:text-2xl">Shobha Dasari</div>
          <div className="text-left text-sm mb-4 text-[#14a8e1]">
            Co-founder of Flair Health
          </div>
          <div className="text-justify mb-4">
            We find that there has been a tremendous acceleration of adoption
            over the last 3.5 years. And a big reason is the customer
            benefitting from the reduction in cost and the increase in
            operational effectiveness.
          </div>
        </div>
        <div
          id="w-node-_6230c4da-7d66-19a2-84f5-770748d1424a-509fcf08"
          className=" m-auto w-full md:h-[400px] h-[250px] youtube-video my-6 md:my-0"
          data-aos="fade-up"
        >
          <iframe
            src="https://www.youtube.com/embed/j0bnCxfp7e0"
            className="rounded-2xl w-full h-full border-none"
            allow="autoplay; encrypted-media"
            title="Tennr Builds Specialized Language Models on AWS to Help Industry Customers Automate"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;
