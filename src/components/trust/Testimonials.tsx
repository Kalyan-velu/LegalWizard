// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { testimonials } from "./data/Testimonials";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const Testimonials = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    console.log(swiper.activeIndex);
    setSwiper(swiper);
  };

  const handleActiveSlideChange = () => {
    if (swiper) {
      const activeSlideIndex: number = swiper.realIndex;
      const slidesPerView = swiper.params.slidesPerView;
      const visibleSlides: number =
        typeof slidesPerView === "number" ? slidesPerView : 1;

      const slides = document.querySelectorAll(".swiper-slide");
      slides.forEach((slide, index) => {
        slide.classList.remove("bg-midnight-blue-100");

        // Blur the left-most and right-most visible cards
        if (
          index < activeSlideIndex ||
          index >= activeSlideIndex + visibleSlides
        ) {
          slide.classList.add("bg-midnight-100");
        }
      });
    }
  };
  return (
    <div className="relative">
      <Swiper
        className="h-[fit-content] w-full py-5"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={4}
        navigation
        // spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
            // spaceBetween: 20,
          },
          648: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true, hide: true }}
        onSwiper={handleSlideChange}
        onSlideChange={handleActiveSlideChange}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            className="my-4 flex justify-center"
            key={testimonial.id}
          >
            {({ isActive }: { isActive: boolean }): JSX.Element => (
              <div
                className={`
                ${isActive ? "border-soild border-2 border-blue-500 " : ""}
                relative flex h-[350px] w-[300px] flex-col items-baseline justify-start rounded-2xl bg-[#0e0c24] p-4 text-white shadow-md`}
              >
                <h2 className="h-[56px] text-left text-xl sm:text-2xl">
                  {testimonial.header}
                </h2>
                <p className="text-md h-[200px] text-left leading-loose text-gray md:text-lg">
                  {testimonial.content}
                </p>

                <div className="bottom-0 flex h-[90px]  items-center space-x-3">
                  <div className="h-[48px] w-[48px] overflow-hidden rounded-full">
                    <img src={testimonial.avatarUrl} alt={testimonial.name} />
                  </div>
                  <div className="justify-left flex flex-col">
                    <h3 className="text-left text-xl">{testimonial.name}</h3>
                    <p className="text-left text-sm ">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Testimonials;
