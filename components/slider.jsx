import React from "react";
import { Carousel } from "flowbite-react";

const Slider = () => {
  return (
    <div>
      <Carousel slideInterval={5000}>
        <img
          src="https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80"
          alt=""
        />
      </Carousel>
    </div>
  );
};

export default Slider;
