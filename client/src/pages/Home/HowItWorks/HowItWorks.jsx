import React from "react";
import bookingIcon from "../../../assets/bookingIcon.png";

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <h2 className="text-3xl font-semibold text-secondary mb-10">
        How it Works
      </h2>

      <div
        className="
      grid
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-6
    "
      >
        {/* Card 1 */}
        <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md duration-200">
          <img src={bookingIcon} className="w-12 h-12 mb-4" />
          <h3 className="text-lg font-semibold text-[#003C3C] mb-2">
            Booking Pick & Drop
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md duration-200">
          <img src={bookingIcon} className="w-12 h-12 mb-4" />
          <h3 className="text-lg font-semibold text-[#003C3C] mb-2">
            Booking Pick & Drop
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md duration-200">
          <img src={bookingIcon} className="w-12 h-12 mb-4" />
          <h3 className="text-lg font-semibold text-[#003C3C] mb-2">
            Booking Pick & Drop
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md duration-200">
          <img src={bookingIcon} className="w-12 h-12 mb-4" />
          <h3 className="text-lg font-semibold text-[#003C3C] mb-2">
            Booking Pick & Drop
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
