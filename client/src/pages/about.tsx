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
            Flair's platform helps pharmacies and dispensing sites recover payments by resolving misallocated and unaccounted claims, helping you close your books faster.
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
              Founded in 2023, Flair Health's team of RCM specialists (with over 40 years of combined experience) and software engineers helps clinics, infusion centers, and specialty pharmacies streamline their financial and A/R workflows.
              </p>
              <br></br>
              <p className="pb-2">
              Our goal is to improve patient access to specialty medications by supporting the pharmacy teams and patient coordinators, who deal with inefficient, complex applications and processes to receive medication quickly and affordably.
              </p>
              <br></br>
              <p className="pb-2">
              We understand the importance of smooth integration with existing systems. That’s why our engineers take the lead in minimizing IT burdens by ensuring our platform integrates seamlessly with existing tools.
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
              Flair Health was founded by Stanford computer science graduates Diva Sharma and Shobha Dasari, inspired by Shobha’s personal struggle in obtaining her specialty medication. 
              </div>
              <div className=" text-sm font-normal 2xl:text-base md:mb-8 mb-4 ">
              Shobha was prescribed a specialty medication for an autoimmune condition. For the next few months, she endured many long phone calls with her insurance and pharmacy – sometimes as often as 2-3 times a week – to get answers about why her medication was taking so long to get approved. After multiple prior authorization denials and a copay maximizer program, Shobha finally got her medication, 4 months after the initial prescription was written. 
              </div>
              <div className=" text-sm font-normal 2xl:text-base md:mb-8 mb-4 ">
              Shobha's experience is not unique – countless patients struggle to access their specialty medications, and we wanted to help solve the problem. To better understand the challenges faced by both patients and coordinators, we shadowed multiple health systems and clinics, gaining deep insights into specialty billing workflows. This firsthand knowledge directly shaped the development of our solution, designed to effectively address these obstacles.     
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