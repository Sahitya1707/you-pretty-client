import Card from "./card";
import axios from "axios";
import React, { useState, useEffect } from "react";

const VendorList = () => {
  const [datas, setDatas] = useState("");
  useEffect(() => {
    const fetchSalon = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/salon/get-salon`
      );
      console.log(response);
      setDatas(response.data.salons);
      // setDatas(response.data.services);
    };
    fetchSalon();
  }, []);
  // console.log(datas);
  return (
    <>
      <div>
        <p className="text-center uppercase font-bold my-[2rem] text-[35px] tracking-wider">
          Salon List
        </p>
        <div className="grid grid-cols-3 mx-[auto] w-[89%] gap-y-[30px] gap-x-[10px]">
          {datas &&
            datas.map((data, i) => (
              <Card
                key={i}
                salonName={data.salonName}
                location={data.location.location}
                landmark={data.landmark.landmark}
                image={data.image}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default VendorList;
