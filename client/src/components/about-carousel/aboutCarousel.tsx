import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCard from "./swiperCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationOptions {
  prevEl?: HTMLElement | string | null;
  nextEl?: HTMLElement | string | null;
}

export default function AboutCarousel() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const onSwiper = (swiper: SwiperClass) => {
    if (swiper.params.navigation) {
      const navParams = swiper.params.navigation as NavigationOptions;
      navParams.prevEl = navigationPrevRef.current;
      navParams.nextEl = navigationNextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };

  return (
    <div className="container md:p-0 mt-20 relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={onSwiper}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard />
        </SwiperSlide>
      </Swiper>
      <div className="absolute w-[96%] md:w-full m-auto inset-0 flex justify-between items-center md:static md:mt-4 md:max-w-[650px] md:m-auto">
        <ChevronLeft
          ref={navigationPrevRef}
          className="prev-button p-1 w-8 h-8 opacity-75 hover:opacity-100 bg-black rounded-full text-white cursor-pointer md:static md:transform-none md:top-auto md:left-auto md:ml-0"
        />
        <ChevronRight
          ref={navigationNextRef}
          className="next-button p-1 w-8 h-8 opacity-75 hover:opacity-100 bg-black rounded-full text-white cursor-pointer md:static md:transform-none md:top-auto md:right-auto md:mr-0"
        />
      </div>
    </div>
  );
}
