import Link from "next/link";
import React from "react";

const Person = (props) => {
  return (
    <div className="w-[15rem] text-center mx-[2px] mt-[1rem]">
      <img
        src={props.image}
        alt="Person-Image"
        className="w-[10rem] h-[10rem] rounded-full m-auto my-[1rem]"
      />
      <p className="uppercase">{props.name}</p>
      <p className="position">{props.position}</p>
      <div className="flex my-2 mx-auto items-center justify-center">
        <Link href={`https://www.facebook.com/${props.facebookId}`}>
          <img
            src="https://img.icons8.com/ios-glyphs/256/facebook-new.png"
            alt=""
            className="w-9 h-9"
          />
        </Link>
        <Link href={`https://www.instagram.com/${props.instagramId}`}>
          <img
            src="https://img.icons8.com/material-outlined/256/instagram-new.png"
            alt=""
            className="w-9 h-9"
          />
        </Link>
      </div>
    </div>
  );
};

export default Person;
