import React, { useState } from "react";

export default function About() {
  // Active tab state
  const [activeTab, setActiveTab] = useState("Story");

  // Content for each tab
  const content = {
    Story: `
      We started with a simple promise — to make parcel delivery fast, reliable, and stress-free.
      Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands.
      Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.

      We started with a simple promise — to make parcel delivery fast, reliable, and stress-free.
      Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands.
      Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.

      We started with a simple promise — to make parcel delivery fast, reliable, and stress-free.
      Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands.
      Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
    `,
    Mission: `
      Our mission is to redefine parcel delivery with unmatched reliability, speed, and customer satisfaction.
      We aim to build the most trusted delivery network powered by innovation and transparency.
    `,
    Success: `
      We have successfully delivered thousands of parcels with 98% on-time performance.
      Our success comes from efficient operations, dedicated riders, and cutting-edge tracking systems.
    `,
    Team: `
      Our team consists of logistics experts, developers, support specialists, and professional riders.
      Together, we work to ensure every delivery is seamless and stress-free.
    `,
  };

  // Tabs for navigation
  const tabs = ["Story", "Mission", "Success", "Team & Others"];

  return (
    <div className="my-8 px-4">
      <div className="w-full bg-gray-100 px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          {/* ABOUT US HEADER */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#023C40]">
            About Us
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          {/* Divider Line */}
          <div className="h-px bg-gray-300 my-8"></div>

          {/* TABS */}
          <div className="flex flex-wrap gap-6 text-lg font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab.startsWith("Team") ? "Team" : tab)
                }
                className={`
                pb-1 transition-all duration-200 
                ${
                  activeTab === tab ||
                  (tab.startsWith("Team") && activeTab === "Team")
                    ? "text-[#2BABAD] border-b-2 border-[#2BABAD]"
                    : "text-gray-500 hover:text-gray-700"
                }
              `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* CONTENT SECTION */}
          <div className="mt-8 space-y-5 text-gray-600 leading-relaxed text-sm md:text-base">
            {content[activeTab].split("\n").map((para, index) => (
              <p key={index}>{para.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
