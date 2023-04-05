import React from "react";
import axios from "axios";

const Card = (props) => {
  return (
    <div>
      <div className="flex items-center justify-center   px-2 ">
        <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="max-w-md mx-auto">
            <div
              className="h-[236px] bg-cover bg-center"
              style={{
                backgroundImage: `url(http://localhost:3001/salonImages/${props.image})`,
              }}
            ></div>
            <div className="p-4 sm:p-6">
              <p className="font-bold text-gray-700 text-[25px] leading-7 mb-1 uppercase">
                {props.salonName}
              </p>
              <div className="flex items-center py-2">
                <p className="text-[17px] font-bold text-[#0FB478] uppercase ">
                  Location:
                </p>
                <p className="text-[17px] mx-2"> {props.location}</p>
              </div>
              <div className="flex items-center py-2">
                <p className="text-[17px] font-bold text-[#0FB478] uppercase inline ">
                  Landmark:
                </p>
                <p className="mx-2 text-[17px]"> {props.landmark}</p>
              </div>

              <a
                target="_blank"
                href="foodiesapp://food/1001"
                className="block mt-10 w-full px-4 py-2 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
