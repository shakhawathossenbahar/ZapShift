import React from "react";
import { IoArrowForward } from "react-icons/io5";
import heroImage1 from "../../../assets/big-deliveryman.png";
import heroImage2 from "../../../assets/tiny-deliveryman.png";

export default function Hero() {
  return (
    <div className="px-4">
      <div
        className="
        w-full bg-gray-100 rounded-3xl 
        px-4 py-8
        md:px-10 lg:px-16
        transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div
            className="
            space-y-6 
            animate-fadeIn
          "
          >
            {/* Decorative line & icon */}
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">
                <img src={heroImage2} alt="" />
              </span>
            </div>

            <h1
              className="
              font-extrabold leading-tight text-secondary
              text-3xl sm:text-4xl md:text-1xl lg:text-6xl
            "
            >
              We Make Sure Your <br />
              <span className="text-primary">Parcel Arrives</span> On Time
              <br />— No Fuss.
            </h1>

            {/* SUBTEXT */}
            <p className="text-gray-600 max-w-md leading-relaxed text-sm md:text-base">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-3">
              {/* TRACK PARCEL BUTTON */}
              <button
                className="
                group relative px-7 py-3 rounded-full 
                bg-lime-500 text-black font-semibold 
                flex items-center gap-3
                transition-all duration-300 
                hover:shadow-lg hover:scale-[1.03]
                active:scale-[0.98]
                overflow-hidden
              "
              >
                {/* Sliding background animation */}
                <span
                  className="
                  absolute inset-0 bg-lime-400 
                  scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300 origin-left
                "
                ></span>

                <span className="relative z-10">Track Your Parcel</span>

                {/* Circle arrow */}
                <span
                  className="
                  relative z-10 w-8 h-8 flex items-center justify-center 
                  bg-black text-white rounded-full 
                  transition-transform duration-300
                  group-hover:rotate-45
                "
                >
                  <IoArrowForward />
                </span>
              </button>

              {/* BE A RIDER BUTTON */}
              <button
                className="
                group relative px-7 py-3 rounded-full border 
                border-gray-400 bg-white font-semibold
                flex items-center gap-2 
                hover:bg-gray-100 hover:border-gray-500
                hover:shadow-md hover:scale-[1.03]
                active:scale-[0.98] transition-all duration-300
              "
              >
                {/* Button label */}
                <span>Be A Rider</span>
              </button>
            </div>

            {/* Bottom Loader Indicator */}
            <div className="flex items-center gap-2 pt-6">
              <div className="h-[3px] w-10 bg-[#2BABAD] rounded"></div>
              <div className="h-[3px] w-8 bg-gray-300 rounded"></div>
              <div className="h-[3px] w-6 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImage1} // <-- replace with your image path
              alt="Delivery Vehicle"
              className="w-72 sm:w-80 md:w-[380px] lg:w-[430px] animate-fadeInSlow"
            />
          </div>
        </div>

        {/* Fade In Animations */}
        <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInSlow {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out forwards;
        }

        .animate-fadeInSlow {
          animation: fadeInSlow 1s ease-out forwards;
        }
      `}</style>
      </div>
    </div>
  );
}
