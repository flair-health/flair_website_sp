import CTAButton from "../components/button";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar";
import OurTeamSection from "../components/ourteam/ourTeamSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Home } from "lucide-react";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Breadcrumb className="container pt-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="w-[15px]" />
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="underline">About us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="container py-10 flex ">
          <div className="">
            <div className=" font-semibold  2xl:text-6xl w-full text-2xl pb-4 tracking-tighter">
              About Flair Health
            </div>

            <div className="text-sm font-normal md:w-[80%] 2xl:text-base md:mb-8 mb-4">
              <p className="pb-2 font-semibold">
                Flair Health is a virtual extension for medical practices,
                providing high-touch nutrition and health coaching services to
                patients with chronic conditions.
              </p>
              <p className="pb-2">
                80% of chronic conditions can be prevented with improvements in
                lifestyle. However, most doctors are stretched thin and don’t
                have the time to provide patients with adequate education about
                nutrition and lifestyle or have detailed check-ins with patients
                between in-person visits. As a result, patients struggle to
                manage their conditions and become reliant on medications,
                leading to poorer health outcomes and higher costs.
              </p>
              <p className="pb-2">
                Flair’s lifestyle-based care management services help patients
                improve their chronic conditions, while also enabling medical
                practices to unlock additional revenue. We support clinics by
                providing their patients with a virtual care team of dietitians
                and health coaches, and a technology platform for patients to
                set lifestyle goals, track their progress, and access
                personalized meal/exercise recommendations.
              </p>
              <p className="font-semibold">
                In short: we enable doctors to offer lifestyle medicine to their
                patients, both covered by insurance and without any additional
                time and effort by the clinic. Our ultimate goal is to help the
                20 million Americans with autoimmune conditions reverse their
                chronic diseases through data-driven lifestyle medicine.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#14a8e1]">
        <div className="container py-20  text-white">
          <div className="flex gap-10  2xl:flex-row flex-col">
            <img src="/team.jpeg" className="rounded-2xl md:w-1/2" />

            <div className="my-auto">
              <div className=" font-semibold  2xl:text-4xl w-full text-2xl pb-4 tracking-tight">
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
                We’re both deeply driven by the mission of improving the
                experience for patients with autoimmune conditions. We have
                personally experienced or supported loved ones through the
                challenges of autoimmune conditions, including challenges in
                getting a diagnosis, making necessary lifestyle changes, and
                accessing important medications.
                <br />
                <br />
                We're building what we wish we had for ourselves and our loved
                ones battling autoimmune conditions – personalized support to
                live with Flair.
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
