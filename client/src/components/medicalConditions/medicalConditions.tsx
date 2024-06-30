import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperstyle.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import ConditionCard from "./conditionCard";

const MedicalConditions = () => {
  return (
    <div className="container flex flex-col 2xl:items-center mt-10 md:mt-40 md:gap-4 gap-2">
      <div className="2xl:text-4xl w-full text-2xl 2xl:w-[70%] font-semibold 2xl:text-center tracking-tight">
        Common Conditions We Work With
      </div>
      <div className="2xl:text-center text-sm font-normal text-gray-500 2xl:text-base mb-8">
        Comprehensive Care for Common Conditions We Specialize In Managing and
        Treating
      </div>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ConditionCard
            name="Rheumatoid Arthritis (RA)"
            about="Chronic autoimmune disease causing joint inflammation, pain, swelling, and deformities, commonly affecting women."
            image="/arthritis.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ConditionCard
            name="Gout"
            about="Metabolic disorder characterized by sudden, severe attacks of pain, redness, and tenderness in joints."
            image="/gout.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ConditionCard
            name="Fibromyalgia"
            about="Chronic condition causing widespread pain, fatigue, sleep disturbances, and cognitive difficulties, often affecting women."
            image="/nerves.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ConditionCard
            name="Lupus"
            about="Autoimmune disease causing inflammation, pain, and damage to various body systems, including skin, joints, and organs."
            image="/homeless.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ConditionCard
            name="Diabetes"
            about="Metabolic disorder characterized by high blood sugar levels due to insulin deficiency or resistance, affecting multiple organs."
            image="/diabetes.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ConditionCard
            name="Obesity"
            about="Diseases where the immune system mistakenly attacks the body's own tissues, causing inflammation and tissue damage."
            image="/obesity.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MedicalConditions;
