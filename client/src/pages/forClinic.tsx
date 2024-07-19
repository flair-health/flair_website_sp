import Footer from "../components/footer/footer";
import Navbar from "../components/navbar";
import CollaborativeCare from "../components/collaborativeCare/collaborativeCare";
import Working from "../components/howitWorks/working";
import OurOutcomes from "../components/outcomes/ourOutcomes";
import MarqueeEffect from "../components/collab/collab";
import Process from "../components/process/process";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
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
              For Clinics
            </div>
            <div className="text-sm font-normal md:w-[80%] 2xl:text-base">
              Our patient experience is led by dietitians and health coaches
              through a combination of digital platforms and human touchpoints.
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <CollaborativeCare />
      </div>
      <Working />
      <Process />
      <OurOutcomes />
      <MarqueeEffect />
      <Footer />
    </>
  );
};

export default ForClinic;
