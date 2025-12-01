import React from "react";
import serviceImage from "../../../assets/service.png"

const Services = () => {
  const cards = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      highlight: true,
    },
    {
      title: "Fulfillment Solution",
      desc: "We offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which include warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="w-full py-25 flex justify-center px-4">
      <div className="bg-secondary rounded-3xl p-10 text-white">
        <h2 className="text-center text-3xl font-bold mb-3 mt-10">Our Services</h2>
        <p className="text-center text-sm text-gray-300 max-w-2xl mx-auto mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl h-60 p-6 shadow-md bg-white text-gray-800 hover:shadow-xl transition ${
                card.highlight ? "bg-lime-300" : ""
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-2xl">
                    <img src={serviceImage} alt="" />
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-center text-gray-700">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
