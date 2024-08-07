import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";

const CareModel = () => {
  const [url, setUrl] = useState("/unnamed.png");

  return (
    <div className="container md:w-[82%] flex flex-col 2xl:items-center mt-10 md:mt-40 md:gap-2 gap-2">
      <div className="2xl:text-4xl w-full text-2xl 2xl:w-[70%] font-semibold md:text-center tracking-tight">
        Our Collaborative Care Model
      </div>
      <div className="md:text-center font-normal text-gray-500 2xl:text-base mb-8">
        Flair provides a top-notch virtual patient experience, with access to
        registered dietitians, certified health coaches, and a technology
        platform.
      </div>

      <div className="container w-full flex xl:w-[70%] m-auto md:flex-row flex-col justify-between md:items-center">
        <div className="mx-auto">
          <img src={url} className="h-[300px] md:h-[250px]" alt="features" />
        </div>
        <Accordion type="single" collapsible className="md:w-[60%]">
          <AccordionItem value="item-1" data-aos="fade-up">
            <AccordionTrigger
              className="md:text-2xl text-xl"
              onClick={() => {
                setUrl("/unnamed.png");
              }}
            >
              <div className="flex justify-center items-center gap-2">
                Rheumatologist
              </div>
            </AccordionTrigger>
            <AccordionContent className="md:text-base text-gray-500">
              <ul className="list-disc pl-5 space-y-2">
                <li>Diagnosis of rheumatic disease.</li>
                <li>
                  Prescribe and adjust medications to manage symptoms and
                  disease progression.
                </li>
                <li>Track disease activity and progression.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" data-aos="fade-up" data-aos-delay="50">
            <AccordionTrigger
              className="md:text-2xl text-xl"
              onClick={() => {
                setUrl("/plate.png");
              }}
            >
              <div className="flex justify-center items-center gap-2">
                Registered Dietitian
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Development of tailored anti-inflammatory diets to manage
                  symptoms and improve overall health.
                </li>
                <li>
                  Patient education about dietary triggers of inflammation and
                  optimizing overall nutrition.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" data-aos="fade-up" data-aos-delay="150">
            <AccordionTrigger
              className="md:text-2xl text-xl"
              onClick={() => {
                setUrl("/happy.png");
              }}
            >
              <div className="flex justify-center items-center gap-2">
                Health Coach
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Sustainable lifestyle change plans, bridging the gap between
                  medical advice and practical implementation.
                </li>
                <li>
                  Non-pharmacological pain/energy management techniques (e.g.,
                  mindfulness, pacing activities).
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default CareModel;