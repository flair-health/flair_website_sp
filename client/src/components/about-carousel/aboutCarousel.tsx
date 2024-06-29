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

  const slides = [
    {
      image: "/consultation.jpg",
      title: "Sustainable Behavior Change",
      description:
        "We promote sustainable behavior change to empower patients in making lasting improvements to their health and lifestyle.",
      details:
        "Our approach involves setting achievable goals and providing ongoing support and education.",
      results:
        "Patients experience improved adherence to healthy habits, leading to better health outcomes.",
    },
    {
      image: "/monitor.jpg",
      title: "Increased Frequency of Touchpoints",
      description:
        "We increase the frequency of touchpoints to provide continuous support and guidance to our patients.",
      details:
        "This includes regular check-ins, monitoring progress, and adjusting treatment plans as needed.",
      results:
        "Patients feel supported throughout their health journey, leading to enhanced engagement and satisfaction.",
    },
    {
      image: "/nutrition.jpg",
      title: "Nutrition",
      description:
        "Our nutrition programs are designed to optimize health outcomes through personalized dietary plans.",
      details:
        "We emphasize the importance of balanced nutrition tailored to individual health needs.",
      results:
        "Patients achieve better nutritional balance and improved overall health.",
    },
    {
      image: "/physical.jpg",
      title: "Physical Activity or Movement",
      description:
        "We encourage physical activity as a cornerstone of our holistic approach to health management.",
      details:
        "Our programs include personalized exercise plans to improve mobility and overall fitness levels.",
      results:
        "Patients experience increased energy levels and enhanced physical well-being.",
    },
    {
      image: "/pain.jpg",
      title: "Energy and Pain Management",
      description:
        "We provide strategies for managing energy levels and alleviating pain, enhancing quality of life.",
      details:
        "Our approach combines lifestyle modifications and targeted interventions to address pain and fatigue.",
      results:
        "Patients report improved daily functioning and reduced discomfort.",
    },
  ];

  return (
    <div className="container md:p-0 md:mt-32 mt-10 relative " id="about">
      <div className="2xl:text-4xl text-2xl 2xl:w-[70%] font-semibold md:pb-4 pb-2 md:text-center m-auto">
        Our Care Model
      </div>
      <p className="text-base mt-0 text-gray-500 m-auto md:text-center md:w-[40%] text-left">
        Discover Our Mission, Values, and the Dedicated Team Driving Our
        Commitment to Excellence and Innovation
      </p>

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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SwiperCard
              image={slide.image}
              title={slide.title}
              description={slide.description}
              details={slide.details}
              results={slide.results}
            />
          </SwiperSlide>
        ))}
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
