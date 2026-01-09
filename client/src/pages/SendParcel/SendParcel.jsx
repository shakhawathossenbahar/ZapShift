import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

export default function SendParcel() {
  // Using react hook form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  // getting data from the loader
  const warehouses = useLoaderData();

  // finding divisions name from the whole list
  const divisionsDuplicate = warehouses.map((warehouse) => warehouse.region);

  // making an array of the divisions name
  const divisions = [...new Set(divisionsDuplicate)];

  // making this watch for sender
  const senderDivision = useWatch({ control, name: "senderDivision" });

  // making this watch for sender
  const receiverDivision = useWatch({ control, name: "receiverDivision" });

  // creating data for dynamic districts loading

  const districtsByDivision = (region) => {
    const regionDistricts = warehouses.filter(
      (regionDistrict) => regionDistrict.region === region
    );
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  // full function
  const handleSendParcel = (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    console.log(data);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }

    console.log("cost", cost);
    
    // add cost to the database
    data.deliveryCharge = cost;

    Swal.fire({
      title: "Agree with the cost?",
      text: `You have to pay ${cost} taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the parcel data into the database

        axiosSecure.post("/parcels", data).then((res) => {
          console.log("After saving data", res.data);
        });

        // Swal.fire({
        //   title: "Successful!",
        //   text: "Your order has been confirmed.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 container mx-auto">
      <div className="min-h-screen flex justify-center items-start py-10">
        <style>{`
        .input-field {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
          padding: 0.75rem 1rem;
          outline: none;
          background: white;
          transition: all 0.2s ease;
        }
        .input-field:focus {
          border-color: #22c55e;
          box-shadow: 0 0 18px rgba(34, 197, 94, 0.18);
          transform: scale(1.01);
        }
        .field-label {
          color: #374151;
          font-weight: 500;
          margin-bottom: 0.3rem;
          display: block;
        }
      `}</style>

        <form
          onSubmit={handleSubmit(handleSendParcel)}
          className="w-full max-w-6xl bg-white p-12 rounded-2xl shadow-md"
        >
          {/* PAGE TITLE */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Send A Parcel
          </h2>
          <p className="text-gray-700 mb-10 text-lg">
            Enter your parcel details
          </p>

          {/* PARCEL TYPE */}
          <div className="flex items-center gap-10 border-b pb-10 mb-10">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                value="document"
                {...register("parcelType")}
                className="w-4 h-4 accent-green-600"
              />
              <span className="text-gray-800 font-semibold">Document</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                value="non-document"
                {...register("parcelType")}
                className="w-4 h-4 accent-gray-500"
              />
              <span className="text-gray-600 font-semibold">Not-Document</span>
            </label>
          </div>

          {/* PARCEL DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div>
              <label className="field-label">Parcel Name</label>
              <input
                {...register("parcelName")}
                placeholder="Parcel Name"
                className="input-field"
              />
            </div>

            <div>
              <label className="field-label">Parcel Weight (KG)</label>
              <input
                {...register("parcelWeight")}
                placeholder="Parcel Weight (KG)"
                className="input-field"
              />
            </div>
          </div>

          {/* SENDER + RECEIVER GRID (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
            {/* SENDER DETAILS */}

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sender Details
              </h3>

              <div className="flex flex-col gap-6">
                <div>
                  <label className="field-label">Sender Name</label>
                  <input
                    {...register("senderName")}
                    defaultValue={user?.displayName}
                    readOnly
                    placeholder="Sender Name"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="field-label">Sender Email</label>
                  <input
                    {...register("senderEmail")}
                    defaultValue={user?.email}
                    readOnly
                    placeholder="Sender Email"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="field-label">Address</label>
                  <input
                    {...register("senderAddress")}
                    placeholder="Address"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="field-label">Sender Phone No</label>
                  <input
                    {...register("senderPhone")}
                    placeholder="Sender Phone No"
                    className="input-field"
                  />
                </div>

                {/* SENDER DIVISION */}

                <div>
                  <label className="field-label">Sender Division</label>
                  <select
                    {...register("senderDivision")}
                    className="input-field"
                  >
                    <option value="">Select your Division</option>
                    {divisions.map((division, index) => (
                      <option key={index} value={division}>
                        {division}
                      </option>
                    ))}
                  </select>
                </div>

                {/* SENDER DISTRICT */}

                <div>
                  <label className="field-label">Your District</label>
                  <select
                    {...register("senderDistrict")}
                    className="input-field"
                  >
                    <option value="">Select your District</option>
                    {districtsByDivision(senderDivision).map(
                      (district, index) => (
                        <option key={index} value={district}>
                          {district}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label className="field-label">Pickup Instruction</label>
                  <textarea
                    {...register("pickupInstruction")}
                    placeholder="Pickup Instruction"
                    className="input-field h-24"
                  />
                </div>
              </div>
            </div>

            {/* RECEIVER DETAILS */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Receiver Details
              </h3>

              <div className="flex flex-col gap-6">
                <div>
                  <label className="field-label">Receiver Name</label>
                  <input
                    {...register("receiverName")}
                    placeholder="Receiver Name"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="field-label">Receiver Email</label>
                  <input
                    {...register("receiverEmail")}
                    placeholder="Receiver Email"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="field-label">Receiver Address</label>
                  <input
                    {...register("receiverAddress")}
                    placeholder="Address"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="field-label">Receiver Contact No</label>
                  <input
                    {...register("receiverPhone")}
                    placeholder="Receiver Contact No"
                    className="input-field"
                  />
                </div>

                {/* RECEIVER DIVISION */}

                <div>
                  <label className="field-label">Receiver Division</label>
                  <select
                    {...register("receiverDivision")}
                    className="input-field"
                  >
                    <option value="">Select your Division</option>
                    {divisions.map((division, index) => (
                      <option key={index} value={division}>
                        {division}
                      </option>
                    ))}
                  </select>
                </div>

                {/* RECEIVER DISTRICT */}

                <div>
                  <label className="field-label">Receiver District</label>
                  <select
                    {...register("receiverDistrict")}
                    className="input-field"
                  >
                    <option value="">Select your District</option>
                    {districtsByDivision(receiverDivision).map(
                      (district, index) => (
                        <option key={index} value={district}>
                          {district}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label className="field-label">Delivery Instruction</label>
                  <textarea
                    {...register("deliveryInstruction")}
                    placeholder="Delivery Instruction"
                    className="input-field h-24"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* PICKUP INFO */}
          <p className="text-gray-500 mb-8 text-sm">
            * PickUp Time 4pm–7pm Approx.
          </p>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="bg-lime-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-lime-600 transition-all"
          >
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
