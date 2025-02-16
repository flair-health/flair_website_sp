import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperstyle.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import ConditionCard from "./conditionCard";

const MedicalConditions = () => {
  return (
    <div className="container md:w-[82%] flex flex-col 2xl:items-center mt-10 md:mt-40   md:gap-2 gap-2">
      <div className="2xl:text-4xl w-full text-2xl 2xl:w-[70%] font-semibold md:text-center tracking-tight">
        Common Conditions We Work With
      </div>
      <div className="md:text-center font-normal text-gray-500 2xl:text-base mb-8">
        We support underserved patient populations who have inflammatory autoimmune diseases and take specialty medications.
      </div>
      
      <Swiper
        spaceBetween={30}
        slidesPerGroup={3}
        autoplay={{
          delay: 5000,
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
        className="mySwiper pb-4 mb-4"
      >
        <SwiperSlide>
          <ConditionCard name="Rheumatoid Arthritis" image="/arthritis.png" />
        </SwiperSlide>
        <SwiperSlide>
          <ConditionCard name="Gout" image="/gout.png" />
        </SwiperSlide>
        <SwiperSlide>
          <ConditionCard name="Fibromyalgia" image="/nerves.png" />
        </SwiperSlide>
        <SwiperSlide>
          <ConditionCard name="Lupus" image="/homeless.png" />
        </SwiperSlide>
        <SwiperSlide>
          <ConditionCard name="Diabetes" image="/diabetes.png" />
        </SwiperSlide>
        <SwiperSlide>
          <ConditionCard name="Obesity" image="/obesity.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MedicalConditions;
