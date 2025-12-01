import React from "react";
import merchantImage from "../../../assets/be-a-merchant-bg.png";
import locationMerchantImage from "../../../assets/location-merchant.png";

const BecomeMerchant = () => {
  return (
    <div className="px-4">
      <div className="w-full bg-secondary rounded-3xl mt-20 text-white overflow-hidden">
        <img
          src={merchantImage}
          className="w-full h-40 object-cover opacity-80"
          alt=""
        />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-10 pb-20">
          {/* ------- LEFT TEXT SECTION ------- */}
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-4xl font-bold leading-snug">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>

            <p className="text-gray-200 mt-4 leading-relaxed">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Our courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
              <button
                className="relative px-4 md:px-8 lg:px-12 py-2 md:py-4 text-base font-semibold rounded-full bg-lime-300 text-teal-900 border-none cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:bg-lime-400 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,241,77,0.4)] active:translate-y-0 active:scale-102
            "
              >
                Become a Merchant
              </button>

              <button className="font-semibold relative px-4 md:px-8 lg:px-12 py-2 md:py-4 rounded-full bg-transparent text-lime-300 border-2 border-lime-300 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:bg-lime-300/10 hover:border-lime-400 hover:text-lime-400 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,241,77,0.3)] active:translate-y-0 active:scale-102">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* ------- RIGHT IMAGE SECTION ------- */}
          <div>
            <img
              src={locationMerchantImage}
              className="w-[350px] md:w-[420px] opacity-90"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeMerchant;
