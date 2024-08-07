import Footer from "../components/footer/footer";
import Navbar from "../components/navbar";
import PharmacyWorklow from "../components/pharmacy/pharmacyWorkflow";
import ContactSection from "../components/contact/Contact";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Home } from "lucide-react";
import ValueProps from "../components/pharmacy/pharmaValueProps";

const ForPharmacy = () => {
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
                For Specialty Pharmacies
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="container py-20 md:w-[82%] text-white">
          <div className="my-auto">
            <div className=" font-semibold  md:text-6xl w-full text-2xl md:pb-4 pb-2 md:tracking-tighter">
              Maximize Patient Access and Adherence for Specialty Therapies
            </div>
            <div className="text-med font-normal md:w-[90%] 2xl:text-base">
              Flair Health empowers specialty pharmacies with digital tools to seamlessly link communication between patients, providers, payers, and manufacturers, ensuring a complete view of the patient journey. 
            </div>
          </div>
        </div>
      </div>
      <PharmacyWorklow />
      <ValueProps />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ForPharmacy;