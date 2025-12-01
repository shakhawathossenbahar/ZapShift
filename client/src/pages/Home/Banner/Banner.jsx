import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import bannerImage1 from "../../../assets/banner/banner1.png";
import bannerImage2 from "../../../assets/banner/banner2.png";
import bannerImage3 from "../../../assets/banner/banner3.png";
import { FaArrowCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="px-4">
      <Carousel autoPlay={true} infiniteLoop={true} interval={2000}>
        <div>
          <img src={bannerImage1} />
        </div>
        <div>
          <img src={bannerImage2} />
        </div>
        <div>
          <img src={bannerImage3} />
        </div>
      </Carousel>

      <div className="absolute flex gap-5 -mt-35 lg:-mt-60 lg:ms-28">
        <div className="flex justify-between items-center">
          <button className="btn bg-primary text-black rounded-4xl">
            Track Your Parcel
          </button>
          <FaArrowCircleRight className="lg:size-8"></FaArrowCircleRight>
        </div>

        <button className="btn bg-white border-black-300 rounded-xl">
          Be A Rider
        </button>
      </div>
    </div>
  );
};

export default Banner;
