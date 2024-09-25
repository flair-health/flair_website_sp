import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";

const Customers = () => {
  const [url, setUrl] = useState("/hospital_new.png");

  return (
    <div className="container md:w-[82%] flex flex-col md:items-center md:mt-20">
      <div className="2xl:text-4xl w-full text-2xl md:w-[75%] font-semibold md:text-center mb-4 tracking-tight"
        id="about">
        Flair helps pharmacies and dispensing sites maximize reimbursements by accelerating claims processes and unlocking alternative payment sources.
      </div>
      <div className="md:text-center font-normal text-gray-500 2xl:text-base mb-8">
        Our platform optimizes financial workflows around specialty medication billing for pharmacies, clinics, and infusion centers.
      </div>

      <div className="container w-full flex xl:w-[70%] m-auto md:flex-row flex-col justify-between md:items-center">
        <div className="mx-auto">
          <img src={url} className="h-[200px] md:h-[150px]" alt="features" />
        </div>
        <Accordion type="single" collapsible className="md:w-[60%]">
          <AccordionItem value="pharmacy" data-aos="fade-up">
            <AccordionTrigger
              className="md:text-2xl text-xl"
              onClick={() => { setUrl("/pharmacy_new.png")}}
            >
              <div className="flex justify-center items-center gap-2">
                Specialty Pharmacies
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg">
              <ul className="list-disc pl-5 space-y-2">
                Maximize revenue recovery by streamlining claims management and payments through a single platform for pharmacy and billing teams.
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="buy_bill" data-aos="fade-up" data-aos-delay="150">
            <AccordionTrigger className="md:text-2xl text-xl"
              onClick={() => { setUrl("/buyandbill.jpg"); }}>
              <div className="flex justify-center items-center gap-2">
              Buy and Bill Programs
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg">
              <ul className="list-disc pl-5 space-y-2">
                  Manage complex payment breakdowns for patient accounts and reduce admin load by automating claims followup and avoiding write-offs.
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="infusion" data-aos="fade-up" data-aos-delay="50">
            <AccordionTrigger
              className="md:text-2xl text-xl"
              onClick={() => { setUrl("/infusion.jpg") }}>
              <div className="flex justify-center items-center gap-2">
              Infusion Centers
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg">
              <ul className="list-disc pl-5 space-y-2">
                Resolve complex billing processes with real-time payment tracking, timely filing for copay assistance, and faster resolution of patient accounts.
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Customers;