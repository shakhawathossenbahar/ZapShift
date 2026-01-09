import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();

  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-md z-50">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>

          <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-transparent border-b-blue-400 animate-spin [animation-duration:1.2s]"></div>

          <div className="absolute inset-2 h-12 w-12 rounded-full border-4 border-transparent border-t-blue-300 animate-spin [animation-duration:1.5s]"></div>
        </div>
      </div>
    );
  }


  const handlePayment = async () => {
    const paymentInfo = {
      deliveryCharge: parcel.deliveryCharge,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail, 
      parcelName: parcel.parcelName
    }

    const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
    console.log(res.data);

    window.location.href = res.data.url;
  };


  return (
    <div>
      <h1>Please Pay {parcel.deliveryCharge} for {parcel.parcelName}</h1>
      <button onClick={handlePayment} className="btn btn-primary text-black">Pay now</button>
    </div>
  );
};

export default Payment;
