import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdEditSquare } from "react-icons/md";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();

  const axioSecure = useAxiosSecure();

  // const { data: parcels = [] } = useQuery({
  //   queryKey: ["myParcels", user?.email],
  //   queryFn: async () => {
  //     const res = await axioSecure.get(`/parcels?email=${user.email}`);
  //     return res.data;
  //   },
  // });

  // refetch is used to refresh the UI and instantly update the UI

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axioSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // I have to do the delete operation here
        axioSecure.delete(`/parcels/${id}`).then((response) => {
          console.log(response.data);

          if (response.data.deletedCount) {
            // refreshes the whole UI
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Your parcel has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <style>
        {`
    .animated-btn {
      font-weight: 600;
      position: relative;
      padding: 1rem 2.5rem; /* py-4 px-10 */
      border-radius: 9999px; /* rounded-full */
      background: lime;
      color: black;
      border: 2px solid #bef264; 
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s ease-out;
    }

    .animated-btn:hover {
      background: rgba(212, 241, 77, 0.10); /* lime-300/10 */
      border-color: #c6f680; /* lime-400 */
      color: black;
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 10px 30px rgba(212, 241, 77, 0.3);
    }

    .animated-btn:active {
      transform: translateY(0) scale(1.02);
    }
  `}
      </style>
      ;<h1>THIS IS MY PARCELS</h1>
      <h1>I have {parcels.length} parcels</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Delivery Charge</th>
              <th>Payment Status</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr className="hover:bg-base-200" key={index}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.deliveryCharge}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <p className="text-green-400">Paid</p>
                  ) : (
                    <Link to={`/dashboard/payment/${parcel._id}`}>
                      <button className="btn btn-sm text-black animated-btn">
                        Pay
                      </button>
                    </Link>
                  )}
                </td>
                <td></td>
                <td className="space-x-2">
                  <button className="btn btn-square hover:bg-primary">
                    <PiListMagnifyingGlassBold />
                  </button>

                  <button className="btn btn-square hover:bg-primary">
                    <MdEditSquare />
                  </button>

                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
