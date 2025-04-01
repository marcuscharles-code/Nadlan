import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./carousel.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const swiper = useSwiper();
  
  const testimonials = [
    {
      quote: "Homyz secured our investment group a prime London development site with 22% projected ROI. Their market intelligence is unparalleled in the industry.",
      author: "James Wilson",
      position: "Managing Partner, Global Capital Partners"
    },
    {
      quote: "As an international investor, I rely on Homyz's local expertise across markets. They've helped me build a diversified $15M property portfolio across 3 continents.",
      author: "Sophia Chen",
      position: "Private Investor"
    },
    {
      quote: "The team at Homyz identified an off-market opportunity in Dubai that became our most profitable commercial asset. Their network gives clients a true competitive edge.",
      author: "David Müller",
      position: "CEO, European Property Fund"
    },
    {
      quote: "Working with Homyz transformed our approach to US multifamily investments. Their data-driven strategy delivered 18% better returns than our previous acquisitions.",
      author: "Olivia Rodriguez",
      position: "Director, Urban Development Group"
    }
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper text-xl"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="p-4">
              <blockquote className="text-2xl italic font-light leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler flex max-md:justify-center gap-3 mt-16">
          <div
            style={{ borderWidth: 1.5, borderRadius: 4 }}
            className={`swiper-button-prev static text-3xl font-semibold bg-red-500 border-2 border-red-500 px-5 py-0 duration-300 text-white hover:bg-white hover:text-red-500 transition-all`}
          >
            {"<"}
          </div>

          <div
            style={{ borderWidth: 1.5, borderRadius: 4 }}
            className={`swiper-button-next static text-3xl font-semibold bg-red-500 border-2 border-red-500 px-5 py-0 duration-300 text-white hover:bg-white hover:text-red-500 transition-all`}
          >
            {">"}
          </div>
        </div>
      </Swiper>
    </>
  );
}