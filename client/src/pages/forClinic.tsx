import Footer from "../components/footer/footer";
import Navbar from "../components/navbar";
import CareModel from "../components/careModel/careModel";
import HowItWorks from "../components/howitWorks/working";
import OurOutcomes from "../components/outcomes/ourOutcomes";
import Partners from "../components/collab/collab";
import ContactSection from "../components/contact/Contact";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Home } from "lucide-react";

const ForClinic = () => {
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
                For Clinics
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="container py-20 md:w-[82%] text-white">
          <div className="my-auto">
            <div className=" font-semibold  md:text-6xl w-full text-2xl md:pb-4 pb-2 md:tracking-tighter">
              Enhance Autoimmune Care with Personalized Nutrition and Health Coaching
            </div>
            <div className="text-med font-normal md:w-[90%] 2xl:text-base">
              Flair’s autoimmune-focused care management services empower doctors to support patients between visits, covered by insurance.
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <CareModel />
      </div>
      <HowItWorks />
      <OurOutcomes />
      <Partners />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ForClinic;
