import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function InspirationCarousel() {

  const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Timeless Photography",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
    title: "Elegant Floral Designs",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    title: "Romantic Outdoor Weddings",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    title: "Luxury Reception Venues",
  },
];

  return (
    <section className="mb-20">

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-3">
          Wedding Inspiration
        </h2>

        <p className="text-gray-500 mt-3">
          Explore ideas from real weddings.
        </p>
      </div>

      <Swiper
      
        modules={[Navigation,
    Pagination,
    Autoplay,]}
        autoplay={{
          delay: 3500,
        }}
        navigation
  pagination={{
    clickable: true,
  }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                h-450px
              "
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/40
                  flex
                  items-end
                  p-8
                "
              >
                <h3
                  className="
                    text-white
                    text-2xl
                    font-semibold
                  "
                >
                  {slide.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}