import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

const Coverage = () => {
  const position = [23.685, 90.3563];

  // Getting data from loader
  const warehouses = useLoaderData();
  const mapRef = useRef(null);

  // I have to write whole code by my own
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = warehouses.find((warehouse) =>
      warehouse.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      // matching data
      const coOrdinate = [district.latitude, district.longitude];
      console.log(district, coOrdinate);

      // flyTo form leaflet docs
      mapRef.current.flyTo(coOrdinate, 15);
    }
  };

  return (
    <div className="px-4 mt-8 mb-20">
      <div className="bg-white rounded-4xl py-20 px-6 md:10 lg:px-25">
        <h2 className="font-extrabold text-center text-3xl md:text-4xl lg:text-5xl text-secondary">
          We are available in 64 districts
        </h2>

        {/* SEARCH BAR */}
        <div className="my-12">
          <form
            onSubmit={handleSearch}
            className="w-full flex justify-center mt-10 px-4"
          >
            <div className="group flex w-full max-w-xl items-center bg-gray-100 rounded-full pl-4 shadow-sm transition-all duration-300 hover:shadow-lg focus-within:shadow-xl focus-within:bg-gray-50 hover:bg-gray-50 animate-fadeIn">
              {/* Search Icon */}
              <FaSearch
                className="
        text-gray-500 text-lg
        transition-all duration-300
        group-focus-within:text-lime-500
      "
              />

              {/* Input */}
              <input
                type="text"
                name="location"
                placeholder="Search location"
                className="
          flex-1 bg-transparent outline-none
          py-3 px-3 text-gray-700 text-base
          placeholder:text-gray-400
          transition-all duration-300
          group-focus-within:pl-4
        "
              />

              {/* Button */}
              <button
                type="submit"
                className="bg-lime-300 px-8 py-3 rounded-full font-semibold text-black transition-all duration-300 hover:bg-lime-500 active:scale-95 shadow-sm hover:shadow-md"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* BORDER LINE */}
        <div className="border-b border-base-300"></div>

        <div>
          <h3 className="font-extrabold text-secondary text-2xl md:text-3xl mt-12">
            We deliver almost all over Bangladesh
          </h3>

          <div className=" w-full h-100 lg:h-150 pt-12">
            <MapContainer
              center={position}
              zoom={10}
              scrollWheelZoom={false}
              // here I have to add this class
              className="h-100 lg:h-150"
              // add map referecne here to to search dynamically
              ref={mapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {warehouses.map((warehouse, index) => (
                <Marker
                  key={index}
                  position={[warehouse.latitude, warehouse.longitude]}
                >
                  <Popup>
                    <strong>{warehouse.district}</strong>
                    <p>Service area: {warehouse.covered_area.join(", ")}</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* Fade-in Animation */
}

<style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fadeIn {
      animation: fadeIn 0.6s ease-out forwards;
    }
  `}</style>;

export default Coverage;
