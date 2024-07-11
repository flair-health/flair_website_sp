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
        className="mySwiper"
      >
        <SwiperSlide>
          <ConditionCard
            name="Rheumatoid Arthritis (RA)"
            image="/arthritis.png"
          />
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
