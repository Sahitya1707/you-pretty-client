import React from "react";

const Profile = () => {
  return (
    <div className="w-screen  bg-blue-200">
      <div className="  border-b-2 border-black">
        <div className="w-4/5 flex py-3 justify-start mx-auto">
          <img
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg"
            alt="profile-image"
            className="w-[9rem]  h-[9rem] rounded-full mx-10"
          />
          <div className="flex flex-col mx-10">
            <p className="font-bold text-3xl ">Sahitya Neupane</p>
            <p className="text-gray-700 mt-2">Email: hello@gmail.com</p>
            <p className="text-gray-700">Phone: 977*********</p>
            <p className="text-gray-700">
              Address: <span>Budanilkantha, Nepal</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto">My orders</div>
    </div>
  );
};

export default Profile;
