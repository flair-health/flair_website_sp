// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import TestimonialCard from "./testimonialCard";

export default function TestimonialCarousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper pb-10"
      >
        <SwiperSlide>
          <TestimonialCard
            numberStars={5}
            review="I have a better mindset and feel so much more in control of my health. The Flair team has been so supportive and helpful throughout this entire program."
            name="DG"
            about="Flair Health Patient"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            numberStars={5}
            review="I have a better mindset and feel so much more in control of my health. The Flair team has been so supportive and helpful throughout this entire program."
            name="DG"
            about="Flair Health Patient"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            numberStars={5}
            review="I have a better mindset and feel so much more in control of my health. The Flair team has been so supportive and helpful throughout this entire program."
            name="DG"
            about="Flair Health Patient"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
