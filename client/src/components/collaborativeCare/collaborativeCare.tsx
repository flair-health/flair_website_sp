import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import MedicalConditions from "../medicalConditions/medicalConditions";

const CollaborativeCare = () => {
  const [url, setUrl] = useState("goals.png");

  return (
    <div className="  flex flex-col 2xl:items-center mt-10 md:mt-10 md:gap-4 gap-2">
      <div
        className="container 2xl:text-4xl text-2xl md:w-[82%] md:m-auto md:marker:w-[70%] font-semibold md:text-center tracking-tight"
        id="functionality"
      >
        Our Collaborative Care Model
      </div>
      <div className="container md:text-center text-sm md:w-[60%] m-auto text-gray-500 font-normal  md:text-base 2xl:w-[55%] mb-8">
        Flair provides a top-notch virtual patient experience, with access to
        registered dietitians, certified health coaches, and a technology
        platform.
      </div>
      <div className="container w-full flex xl:w-[58%] m-auto md:flex-row flex-col justify-between md:items-center">
        <div className="mb-8 mx-auto">
          <img src={url} className="h-[400px] md:h-[500px]" alt="features" />
        </div>
        <Accordion
          type="single"
          collapsible
          className="md:w-[60%]"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1" data-aos="fade-up">
            <AccordionTrigger
              className="md:text-2xl text-xl"
              onClick={() => {
                setUrl("goals.png");
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
                setUrl("lifestyle.png");
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
                setUrl("visits.png");
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
      <div className="md:-mt-20">
        <MedicalConditions />
      </div>
    </div>
  );
};

export default CollaborativeCare;
