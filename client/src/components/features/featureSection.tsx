import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const FeatureSection = () => {
  const [url, setUrl] = useState("goals.png");

  return (
    <div className="container flex flex-col 2xl:items-center mt-10 md:mt-32 md:gap-4 gap-2">
      <div
        className="2xl:text-4xl text-2xl 2xl:w-[70%] font-semibold 2xl:text-center"
        id="functionality"
      >
        How It Works
      </div>
      <div className="2xl:text-center text-sm text-gray-500 font-normal  2xl:text-base 2xl:w-[40%] mb-8">
        Flair provides a top-notch virtual patient experience, with access to
        registered dietitians, certified health coaches, and a technology
        platform.
      </div>
      <div className="w-full flex 2xl:flex-row flex-col justify-between 2xl:w-[70%] 2xl:items-center">
        <div className="mb-8 mx-auto">
          <img src={url} className="h-[400px] md:h-[600px]" alt="features" />
        </div>
        <Accordion
          type="single"
          collapsible
          className="2xl:w-[60%]"
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
                <div className="border-2 w-10 h-10 flex items-center justify-center rounded-full text-blue-400">
                  01
                </div>
                Whole Health Evaluation
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Complete a survey and meet with a registered dietitian to clarify
              your nutrition and health goals, based on your specific health
              conditions and personal preferences.
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
                <div className="border-2 w-10 h-10 flex items-center justify-center rounded-full text-blue-400">
                  02
                </div>
                Personalized Lifestyle Plan
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Receive a personalized nutrition and lifestyle plan that is
              evidence-based, realistic, and sustainable for you. We'll update
              this plan monthly based on your progress.
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
                <div className="border-2 w-10 h-10 flex items-center justify-center rounded-full text-blue-400">
                  03
                </div>
                Virtual Health Coaching Sessions
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Live virtual visits and messaging with a health coach to implement
              your lifestyle plan and get healthier, with you in the driver's
              seat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" data-aos="fade-up" data-aos-delay="200">
            <AccordionTrigger
              className="md:text-2xl text-xl"
              onClick={() => {
                setUrl("tracking.png");
              }}
            >
              <div className="flex justify-center items-center gap-2">
                <div className="border-2 w-10 h-10 flex items-center justify-center rounded-full text-blue-400">
                  04
                </div>
                Track Progress on Flair App
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              Use Flair's app to track your progress towards your health goals,
              receive real-time feedback from your health coach, and get daily
              personalized recommendations on meals, exercise, and health
              content.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FeatureSection;
