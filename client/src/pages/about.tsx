import CTAButton from "../components/button";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar";
import OurTeamSection from "../components/ourteam/ourTeamSection";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#667BC6]">
        <div className="container py-20 flex text-white">
          <div className="">
            <div className=" font-semibold  2xl:text-6xl w-full text-2xl pb-4">
              Who we are?
            </div>

            <div className=" text-sm font-normal md:w-[80%]  2xl:text-base md:mb-8 mb-4 ">
              Flair Health is a virtual extension for medical practices,
              providing high-touch nutrition and health coaching services to
              patients with chronic conditions.
            </div>
            <CTAButton title="Contact Us" />
          </div>
        </div>
      </div>
      <div className="container  w-full  py-10">
        <div className="2xl:text-4xl md:text-center m-auto font-semibold text-2xl">
          What we do?
        </div>
        <div className="md:text-center md:w-1/2 md:mt-4  m-auto">
          Flair’s lifestyle-based care management services help patients improve
          their chronic conditions, while also enabling medical practices to
          unlock additional revenue.
          {/* <p className="pt-2">
            In short: we enable doctors to offer lifestyle medicine to their
            patients, both covered by insurance and without any additional time
            and effort by the clinic. Our ultimate goal is to help 100 million
            Americans reverse their chronic diseases through data-driven
            lifestyle medicine.
          </p> */}
        </div>
      </div>
      <div
        id="w-node-_6230c4da-7d66-19a2-84f5-770748d1424a-509fcf08"
        className="2xl:w-[60%] m-auto mb-10 md:h-[600px] h-[250px] youtube-video  2xl:pb-8 pb-4"
      >
        <iframe
          src="https://www.youtube.com/embed/j0bnCxfp7e0"
          className="rounded-2xl w-full h-full border-none"
          allow="autoplay; encrypted-media"
          title="Tennr Builds Specialized Language Models on AWS to Help Industry Customers Automate"
        ></iframe>
      </div>
      <div className="bg-[#667BC6]">
        <div className="container py-20  text-white">
          <div className="flex gap-10  2xl:flex-row flex-col">
            <img src="/team.jpeg" className="rounded-2xl md:w-1/2" />

            <div className="my-auto">
              <div className=" font-semibold  2xl:text-4xl w-full text-2xl pb-4">
                Our Story
              </div>

              <div className=" text-sm font-normal   2xl:text-base md:mb-4 ">
                We’re Diva and Shobha, the co-founders of Flair Health. We met
                as undergraduates at Stanford and found ourselves geeking out
                about healthcare and preventative care. Both of us have worked
                in the healthcare space for almost a decade combined, across
                companies like Ancestry, Johnson & Johnson, Rock Health, and
                Rupa Health.
              </div>
              <div className=" text-sm font-normal 2xl:text-base md:mb-8 mb-4 ">
                We’re both deeply driven by the mission of helping more patients
                dramatically improve their health through lifestyle and
                nutrition. In fact, both of us have seen the power of nutrition
                and lifestyle change in our own lives – Diva with her
                grandparents, and Shobha has used these techniques to manage her
                own chronic condition.
                <br />
                <br />
                We're building what we wish we had for ourselves and our loved
                ones battling chronic diseases – personalized and evidence-based
                support to help people live with Flair.
              </div>
              <CTAButton title="Connect With Us" />
            </div>
          </div>
        </div>
      </div>
      <OurTeamSection />
      <Footer />
    </>
  );
};

export default AboutUs;
