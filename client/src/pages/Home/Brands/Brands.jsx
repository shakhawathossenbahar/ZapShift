import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import amazonImage from "../../../assets/brands/amazon.png";
import amazonVectorImage from "../../../assets/brands/amazon_vector.png";
import casioImage from "../../../assets/brands/casio.png";
import moonstarImage from "../../../assets/brands/moonstar.png";
import randstadImage from "../../../assets/brands/randstad.png";
import starImage from "../../../assets/brands/star.png";
import startPeopleImage from "../../../assets/brands/start_people.png";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const brandLogos = [
  amazonImage,
  amazonVectorImage,
  casioImage,
  moonstarImage,
  randstadImage,
  starImage,
  startPeopleImage,
  amazonImage,
  amazonVectorImage,
  casioImage,
  moonstarImage,
  randstadImage,
  starImage,
  startPeopleImage,
];

const Brands = () => {
  return (
    <div className="px-4">
      <div className="border-dashed border-b-2 border-secondary pb-25">
        <h2 className="font-extrabold text-secondary text-2xl sm:text-3xl mb-12 text-center">
          We've helped thousands of sales teams
        </h2>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {brandLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt="" />
            </SwiperSlide>
          ))}

          {/* <SwiperSlide><img src={amazonImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={amazonVectorImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={casioImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={moonstarImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={randstadImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={starImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={startPeopleImage} alt="" /></SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
