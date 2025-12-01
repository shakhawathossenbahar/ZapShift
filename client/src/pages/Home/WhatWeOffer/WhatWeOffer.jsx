import React from "react";
import liveTracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";

const WhatWeOffer = () => {
  return (
    <div className="px-4">
      <div className="mt-20 space-y-7 border-dashed border-b-2 border-secondary pb-25">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl p-6 md:p-10">
          <img src={liveTracking} alt="" className="w-32 md:w-auto" />

          <div className="mt-6 md:mt-0 md:ml-12 md:border-l border-dashed border-secondary md:p-12 p-0 text-center md:text-left">
            <h2 className="font-extrabold text-xl md:text-2xl text-secondary mb-5">
              Live Parcel Tracking
            </h2>
            <p className="text-gray-500">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment’s journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl p-6 md:p-10">
          <img src={safeDelivery} alt="" className="w-32 md:w-auto" />

          <div className="mt-6 md:mt-0 md:ml-12 md:border-l border-dashed border-secondary md:p-12 p-0 text-center md:text-left">
            <h2 className="font-extrabold text-xl md:text-2xl text-secondary mb-5">
              100% Safe Delivery
            </h2>
            <p className="text-gray-500">
              We ensure your parcels are handled with care and delivered
              securely to their destination. Our reliable process guarantees
              safe and damage-free delivery every time.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl p-6 md:p-10">
          <img src={safeDelivery} alt="" className="w-32 md:w-auto" />

          <div className="mt-6 md:mt-0 md:ml-12 md:border-l border-dashed border-secondary md:p-12 p-0 text-center md:text-left">
            <h2 className="font-extrabold text-xl md:text-2xl text-secondary mb-5">
              24/7 Call Center Support
            </h2>
            <p className="text-gray-500">
              Our dedicated support team is available around the clock to assist
              you with any questions, updates, or delivery concerns—anytime you
              need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
