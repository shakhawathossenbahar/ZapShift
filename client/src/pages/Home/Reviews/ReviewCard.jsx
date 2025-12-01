import React from "react";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;
  return (
    <div className="max-w-lg bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      {/* Quote Icon */}
      <div className="text-teal-400 text-4xl leading-none mb-4">“</div>

      {/* Quote Text */}
      <p className="text-gray-600 leading-relaxed">{testimonial}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-teal-300 my-6"></div>

      {/* Person Info */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full">
          <img src={user_photoURL} className="rounded-full" alt="" />
        </div>

        <div>
          <h3 className="text-teal-900 font-semibold">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
