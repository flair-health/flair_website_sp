import Footer from "../components/footer/footer";
import Navbar from "../components/navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container py-20">
        <div className="font-semibold 2xl:text-center 2xl:text-4xl w-full text-2xl pb-4">
          About Flair Health
        </div>

        <div className="2xl:text-center text-sm font-normal text-gray-500 2xl:text-base 2xl:w-[60%] md:mb-8 mb-4 mx-auto">
          Flair Health is a virtual extension for medical practices, providing
          high-touch nutrition and health coaching services to patients with
          chronic conditions.
        </div>
        <div
          id="w-node-_6230c4da-7d66-19a2-84f5-770748d1424a-509fcf08"
          className="2xl:w-[70%] m-auto  md:h-[500px] h-[250px] youtube-video  2xl:pb-8 pb-4"
        >
          <iframe
            src="https://www.youtube.com/embed/j0bnCxfp7e0"
            className="rounded-2xl w-full h-full border-none"
            allow="autoplay; encrypted-media"
            title="Tennr Builds Specialized Language Models on AWS to Help Industry Customers Automate"
          ></iframe>
        </div>
        <div className="text-justify 2xl:w-[70%] m-auto text-sm md:text-base">
          we enable doctors to offer lifestyle medicine to their patients, both
          covered by insurance and without any additional time and effort by the
          clinic. Our ultimate goal is to help 100 million Americans reverse
          their chronic diseases through data-driven lifestyle medicine.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
