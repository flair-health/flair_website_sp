import Footer from "../components/footer/footer";
import Navbar from "../components/navbar";
import TeamSection from "../components/team/teamSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "../../components/ui/button";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#14a8e1]">
        <Breadcrumb className="container pt-10 md:w-[82%]">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="w-[15px] text-gray-200 hover:opacity-75" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbPage className="underline text-white">
                About Us
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="container py-20 md:w-[82%] text-white">
          <div className="my-auto">
            <div className=" font-semibold  md:text-6xl w-full text-2xl md:pb-4 pb-2 md:tracking-tighter">
              About Us
            </div>
            <div className="text-med font-normal md:w-[90%] 2xl:text-base">
              Flair Health is a virtual extension for medical practices treating patients 
              with inflammatory conditions, elevating the care experience for those affected 
              by autoimmune diseases.
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container md:w-[82%] py-10 flex ">
          <div className="">
            <div className=" font-semibold  2xl:text-6xl w-full text-2xl pb-4 tracking-tighter">
              About Flair Health
            </div>
            <div className="text-sm font-normal md:w-[80%] 2xl:text-base md:mb-8 mb-4">
              <p className="pb-2">
                Flair Health is a virtual extension for clinics and pharmacies treating patients 
                with inflammatory conditions, elevating the patient journey for those affected by 
                autoimmune diseases.
              </p>
              <p className="pb-2">
                Patients diagnosed with autoimmune conditions often face a challenging road ahead 
                in managing their health. They must navigate a complex array of fluctuating symptoms 
                that can dramatically impact daily life and receive very little education about the 
                critical role of lifestyle factors in managing autoimmune diseases. 
                </p>
              <p className="pb-2">
                Autoimmune disease patients also often require biologic medications, which can be 
                pivotal in managing their symptoms effectively. However, accessing these treatments 
                often involves navigating complex insurance protocols and significant administrative 
                hurdles, which can be both time-consuming and overwhelming. Many patients face delays 
                and difficulties in obtaining approval for these essential medications, leading to 
                prolonged periods of discomfort and the potential worsening of their condition.
              </p>
              <p className="pb-2">
                Flair has introduced a specialized care management program for individuals with 
                autoimmune disorders, offering support through a virtual team of dietitians and 
                health coaches to create personalized lifestyle plans that enhance overall health. 
                Additionally, Flair's proprietary tech streamlines the process of accessing biologic 
                medications by navigating insurance and pharmacy protocols, significantly improving 
                patient outcomes and reducing administrative burdens for the patient's clinic and 
                specialty pharmacy.
              </p>
              <p className="pb-2">
                In short: we enable doctors and pharmacies to offer nutrition care, 
                health coaching, and medication access support to their patients. Our ultimate goal 
                is to change the paradigm of care for the 20 million Americans with autoimmune 
                conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#14a8e1]">
        <div className="container py-20 md:w-[82%] text-white">
          <div className="flex gap-10  md:flex-row flex-col">
            <img src="/team.jpeg" className="rounded-2xl md:w-1/2" />

            <div className="my-auto">
              <div className=" font-semibold  2xl:text-4xl w-full text-2xl pb-4 tracking-tight">
                Our Story
              </div>

              <div className=" text-sm font-normal 2xl:text-base md:mb-8 mb-4 ">
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
              </div>
              <div className=" text-sm font-normal 2xl:text-base md:mb-8 mb-4 ">
                We're building what we wish we had for ourselves and our loved
                ones battling autoimmune conditions – personalized support to
                live with Flair.
              </div>
              <Button asChild variant="outline"
                className="border-[#14a8e1] hover:text-#14a8e1 cursor-pointer dark:border-cornblue-500/80 
                text-[#14a8e1]  group relative inline-flex rounded-full border font-semibold backdrop-blur 
                hover:bg-zinc-50 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white" >
                <Link to="contact" activeClass="active" smooth spy className="font-semibold text-lg" >
                  Connect With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <TeamSection />
      <Footer />
    </>
  );
};

export default AboutUs;