import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";

const CareModel = () => {
  const [url, setUrl] = useState("/hospital_new.png");

  return (
    <div className="container md:w-[82%] flex flex-col 2xl:items-center mt-8 md:mt-30 md:gap-2 gap-2">
      <div className="2xl:text-4xl w-full text-2xl 2xl:w-[70%] font-semibold md:text-center tracking-tight">
      Who We Serve
      </div>
      <div className="md:text-center font-normal text-gray-500 2xl:text-base mb-8">
      Flair's platform reduces financial leakage for sites that dispense specialty medications - simplifying A/R workflows.
      </div>


      <div className="container w-full flex xl:w-[70%] m-auto md:flex-row flex-col justify-between md:items-center">
        <div className="mx-auto">
          <img src={url} className="h-[200px] md:h-[150px]" alt="features" />
        </div>
        <Accordion type="single" collapsible className="md:w-[60%]">
          <AccordionItem value="item-1" data-aos="fade-up">
            <AccordionTrigger
              className="md:text-2xl text-xl"
              onClick={() => {
                setUrl("/hospital_new.png");
              }}
            >
              <div className="flex justify-center items-center gap-2">
                Health System Pharmacies
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              <ul className="list-disc pl-5 space-y-2">
                  Increase your payments collection rate with a platform that integrates across your health system's technology infrastructure and talks to different teams.
              </ul>
            </AccordionContent>
            <AccordionTrigger
              className="md:text-2xl text-xl"
              onClick={() => {
                setUrl("/buyandbill.jpg");
              }}
            >
              <div className="flex justify-center items-center gap-2">
                Buy and Bill Programs
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              <ul className="list-disc pl-5 space-y-2">
                  Resolve payments reconciliation post-dispense faster by unburdening your billing team and freeing up time spent on backlogged claims.
              </ul>
            </AccordionContent>
          </AccordionItem>
            <AccordionItem value="item-2" data-aos="fade-up" data-aos-delay="50">
            <AccordionTrigger
              className="md:text-2xl text-xl"
              onClick={() => {
                setUrl("/infusion.jpg");
              }}
            >
              <div className="flex justify-center items-center gap-2">
              Infusion Centers
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              <ul className="list-disc pl-5 space-y-2">
              Identify claims with complex coverage limits fast, and put patients on alternate funding solutions faster.
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" data-aos="fade-up" data-aos-delay="150">
            <AccordionTrigger
              className="md:text-2xl text-xl"
              onClick={() => {
                setUrl("/pharmacy_new.png");
              }}
            >
              <div className="flex justify-center items-center gap-2">
                Other Specialty Pharmacies
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              <ul className="list-disc pl-5 space-y-2">
                  Adopt an accounts receivable solution that increases receivables, helping you to remain competitive in the ecosystem.
              </ul>
            </AccordionContent>
          </AccordionItem>
                  </Accordion>
      </div>
    </div>
  );
};

export default CareModel;