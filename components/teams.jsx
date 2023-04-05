import React from "react";
import Person from "./person";

const Teams = () => {
  return (
    <>
      <p className="text-center mt-[2rem] text-5xl font-bold">Meet Our Team</p>
      {/* <div className="grid grid-cols-4 gap-y-4 mt-[2rem] justify-items-center w-[70rem] mx-auto"> */}
      <div className="flex my-[2rem] items-center justify-center flex-wrap max-w-[80rem] mx-auto">
        <Person
          name="hari kumari chaudary"
          facebookId="profile.php?id=100069900979898"
          instagramId="i_d/?hl=en"
          position="CEO"
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
        <Person
          name="Suman Rai"
          facebookId="profile.php?id=100069900979898"
          instagramId="i_d/?hl=en"
          position="CEO"
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
        <Person
          name="Mikisha Basnet"
          facebookId="profile.php?id=100069900979898"
          instagramId="i_d/?hl=en"
          position="CEO"
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
        <Person
          name="Sahitya Neupane"
          facebookId="profile.php?id=100069900979898"
          instagramId="leomessi/?hl=en"
          position="CEO"
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
        <Person
          name="Ruksha Kharel"
          facebookId="profile.php?id=100069900979898"
          instagramId="i_d/?hl=en"
          position="CEO"
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
      </div>
    </>
  );
};

export default Teams;
