import React, { useEffect, useState } from 'react';
import reviewsData from '../data/reviewsData.json';
import ReviewHighlighter from './ReviewHighlighter';
import { FaStar } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Assuming reviewsData.json is a local file, we directly use it
    setReviews(reviewsData);
  }, []);

  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <div className='flex justify-between'>
          <div className="flex items-center mb-4">
            <img src={review.source.icon} alt={review.source.name} className="w-10 h-10 mr-4 rounded-full"/>
            <div>
              <div className='md:flex md:gap-2'>
                <h3 className="text-xl font-semibold text-gray-900">{review.reviewer_name}</h3>
                <p className='text-gray-400'>wrote a review</p>
              </div>
              <div className="flex items-center text-yellow-500">
                {Array.from({ length: review.rating }, (_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L1 7.455l6.561-.955L10 1l2.439 5.5L19 7.455l-4.244 4.09L15.878 18z"/></svg>
                ))}
              </div>
                    <div className='md:flex md:gap-2 mt-2'>
                        <div className='flex'>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 md:mt-0">{review.date}</p>
                    </div>
                </div>
          </div>
                <div className='flex gap-2'>
                    <MdOutlineManageAccounts className='hover:cursor-pointer'/>
                    <LuMessageSquare className='hover:cursor-pointer'/>
                    <HiOutlineDotsHorizontal className='hover:cursor-pointer'/>
                </div>
          </div>
          <ReviewHighlighter content={review.content} analytics={review.analytics} />
        </div>
      ))}
    </div>
  );
};

export default ReviewList;






