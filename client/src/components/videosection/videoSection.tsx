import React, { useState } from "react";

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoClick = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="container md:w-[82%] md:mt-40 md:pb-10 mt-0">
      <div className="2xl:text-4xl w-full text-2xl 2xl:w-[40%] m-auto font-semibold md:text-center md:mb-2 mb-2 tracking-tight">
        Our Collaborative Care Model
      </div>
      <p className="text-base mt-0 text-gray-500 m-auto md:text-center md:w-[50%] text-left md:pb-8 pb-4">
        Our program supports patients with inflammatory and autoimmune diseases
        through health coaches and dietitians.
      </p>

      <div className="flex flex-col-reverse 2xl:flex-row md:gap-8">
        <div
          className="m-auto w-full youtube-video my-6 md:my-0"
          data-aos="fade-up"
        >
          <div className="w-full md:h-[574px] h-[200px]">
            {!isVideoLoaded ? (
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={handleVideoClick}
              >
                <img
                  src="https://img.youtube.com/vi/j0bnCxfp7e0/hqdefault.jpg"
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Flair health"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-6-3.5A1 1 0 007 8.6v6.8a1 1 0 001.752.832l6-3.5a1 1 0 000-1.664z"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube-nocookie.com/embed/j0bnCxfp7e0?autoplay=1"
                className="w-full h-full rounded-2xl border-none"
                allow="autoplay; encrypted-media"
                title="Flair health"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
