import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";

const Search = () => {
  const [location, setLocation] = useState("");
  // const [filteredLandmark, setFilteredLandmark] = useState("");

  const [landmark, setLandmark] = useState("");
  const [date, setDate] = useState("");
  const [emptyField, setEmptyField] = useState("");
  const [buttonState, setButtonState] = useState(true);
  const [locationDatas, setLocationDatas] = useState("");
  const [landmarkDatas, setLandmarkDatas] = useState("");
  const [serviceDatas, setServiceDatas] = useState("");
  const [filteredlandmark, setFilteredLandmark] = useState([""]);
  const [searchDatas, setSearchDatas] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [Id, setId] = useState({
    locationId: "",
    landmarkId: "",
    serviceId: "",
    dateId: "",
  });
  const [availableSalons, setAvailableSalons] = useState(false);
  // const []
  // const [land]

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/location/get-location`
      );
      setLocationDatas(response.data.locations);
    };
    const fetchLandmark = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/landmark/get-landmark`
      );
      // console.log(response.data.landmarks);
      setLandmarkDatas(response.data.landmarks);
    };
    const fetchService = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/service/get-service`
      );
      // console.log(response.data.landmarks);
      setServiceDatas(response.data.services);
      // console.log(response.data.services);
    };

    fetchLocation();
    fetchLandmark();
    fetchService();
  }, []);

  // console.log(Id);
  const fiterLandmark = (id) => {
    // console.log(id);
    setId({ ...Id, locationId: id });
    // console.log(id);
    const result = landmarkDatas.filter((item) => item.location._id === id);
    // setLocationId(id);
    setFilteredLandmark(result);
  };
  //   console.log(location);

  function getLandmark(e) {
    // console.log(e);
    setId({ ...Id, landmarkId: e.target.value });
    // console.log(e.target.value);
    setLandmark(e.target.value);
    // console.log(`hi`);
  }
  function getService(e) {
    console.log(e.target.value);
    setId({ ...Id, serviceId: e.target.value });
    // setId({ ...})
  }
  const getDate = (e) => {
    console.log(e.target.value);
    setId({ ...Id, dateId: e.target.value });
    setDate(e.target.value);
  };
  // console.log(Id);
  function handleClick(e) {
    // console.log(`hi`);
    const { locationId, landmarkId, serviceId, dateId } = Id;
    console.log(Id);

    // console.log(locationId);

    if (
      locationId === "" ||
      landmarkId === "" ||
      dateId === "" ||
      serviceId === ""
    ) {
      //   alert("Please type in all input field");
      // console.log("false");
      setEmptyField("Please fill all the form !");
      setAvailableSalons(false);
      //   e.target.disabled = true;
    } else if (
      locationId != "" &&
      landmarkId != "" &&
      dateId != "" &&
      serviceId != ""
    ) {
      //   e.target.disabled = false;
      // console.log(Id);
      setEmptyField("");
      const fetchSalon = async () => {
        const response = await axios.get(
          `http://localhost:3001/api/salon/get-salon`
        );

        // console.log(response.data.salons);
        setSearchDatas(response.data.salons);
      };
      fetchSalon();

      // console.log(searchDatas);
      const filterSearch =
        searchDatas &&
        searchDatas.filter((data) => {
          return (
            data.location._id === locationId &&
            data.landmark._id === landmarkId &&
            data.service[0]._id === serviceId
          );
        });
      console.log(filterSearch);

      setSearchFilter(filterSearch);
      if (filterSearch.length >= 1) {
        setAvailableSalons(true);
      }
    }
    //   //   console.log(e);
  }

  return (
    <div>
      <div className="search-component flex flex-column bg-slate-400 w-[90%] h-[7rem]  mx-auto my-2 rounded-md justify-evenly items-center">
        <div className="location flex items-center p-2">
          <p className="location-icon p-2 ">
            <span class="material-symbols-outlined text-pink-400 text-[48px]">
              location_on
            </span>
          </p>
          <label htmlFor="Location flex flex-row">
            <p className="flex items-center font-medium">
              Location
              <span class="material-symbols-outlined ml-2">
                arrow_drop_down
              </span>
            </p>
            <select
              name="Select"
              id=""
              className="appearance-none w-[9rem] bg-inherit tracking-wider cursor-pointer outline-none"
              onChange={(e) => fiterLandmark(e.target.value)}
              // onChange={(e) => filterLandmark(e.target.value)}
            >
              <option value="">--Select--</option>

              {locationDatas &&
                locationDatas.map((item, i) => (
                  <option value={item._id} key={i}>
                    {item.location}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div className="landmark flex items-center p-2">
          <p className="landmark-icon p-2 ">
            <span class="material-symbols-outlined text-pink-400 text-[48px]">
              emoji_flags
            </span>
          </p>
          <label htmlFor="Location flex flex-row">
            <p className="flex items-center font-medium">
              Landmark
              <span class="material-symbols-outlined ml-2">
                arrow_drop_down
              </span>
            </p>
            <select
              name="Select"
              id=""
              className="appearance-none w-[9rem] bg-inherit tracking-wider cursor-pointer outline-none"
              onChange={getLandmark}
            >
              <option value="">--Select--</option>

              {filteredlandmark &&
                filteredlandmark.map((item, i) => (
                  <option value={item._id} key={i}>
                    {item.landmark}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div className="landmark flex items-center p-2">
          <p className="landmark-icon p-2 ">
            <span class="material-symbols-outlined text-pink-400 text-[48px]">
              emoji_flags
            </span>
          </p>
          <label htmlFor="Location flex flex-row">
            <p className="flex items-center font-medium">
              Service
              <span class="material-symbols-outlined ml-2">
                arrow_drop_down
              </span>
            </p>
            <select
              name="Select"
              id=""
              className="appearance-none w-[9rem] bg-inherit tracking-wider cursor-pointer outline-none"
              onChange={getService}
            >
              <option value="">--Select--</option>

              {serviceDatas &&
                serviceDatas.map((item, i) => (
                  <option value={item._id} key={i}>
                    {item.serviceName}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div className="date flex items-center p-2">
          <p className="date-icon p-2 ">
            <span class="material-symbols-outlined text-pink-400 text-[48px]">
              calendar_month
            </span>
          </p>
          <label htmlFor="Location flex flex-row">
            <p className="flex items-center font-medium">
              Date
              <span class="material-symbols-outlined ml-2">
                arrow_drop_down
              </span>
            </p>
            <input
              type="date"
              className="appearance-none w-[8rem] bg-inherit tracking-wider cursor-pointer outline-none"
              onChange={getDate}
            />
          </label>
        </div>

        <button
          className="mx-4 rounded-[6px] bg-pink-400 px-5 py-3 text-white"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <p className="text-center text-red-600 uppercase">{emptyField}</p>
      {availableSalons ? (
        <div>
          <p className="text-center uppercase font-bold my-[2rem] text-[35px] tracking-wider">
            Available Salon
          </p>
          <div className="grid grid-cols-3 mx-[auto] w-[89%] gap-y-[30px] gap-x-[10px]">
            {searchFilter.map((data, i) => (
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
      ) : (
        <></>
      )}
    </div>
  );
};
function Dropdown({ icon_name, name, array }) {
  return (
    <div className=" flex items-center p-2">
      <p className="icon p-2 ">
        <span class="material-symbols-outlined text-pink-400 text-[48px]">
          {icon_name}
        </span>
      </p>
      <label htmlFor=" flex flex-row">
        <p className="flex items-center font-medium">
          {name}
          <span class="material-symbols-outlined ml-2">arrow_drop_down</span>
        </p>
        <select
          name="Select"
          id=""
          className="appearance-none w-[9rem] bg-inherit tracking-wider cursor-pointer outline-none"
          onSelect={selectedLocation}
        >
          <option value="">--Select--</option>
        </select>
      </label>
    </div>
  );
}

export default Search;
