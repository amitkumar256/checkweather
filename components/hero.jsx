import Image from "next/image";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [paris, setParis] = useState();
  const [mum, setMum] = useState();
  const [dub, setDub] = useState();
  const [weather, setWeather] = useState();

  const [query, setQuery] = useState("");

  const fetchWeather = async (query) => {
    let weather = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=0801c01df4d84b729f3110156231412&q=" +
        query
    );

    let response = await weather.json();
    console.log(response);

    return response;
  };
  useEffect(() => {
    async function fetchData() {
      let paris = await fetchWeather("paris");
      setParis(paris);
      let mum = await fetchWeather("mumbai");
      setMum(mum);
      let dub = await fetchWeather("dubai");
      setDub(dub);
    }
    fetchData();
  }, []);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleClick = async (e) => {
    let weather = await fetchWeather(query);
    setWeather(weather);
    console.log(query);
  };

  return (
    <div className="max-w-[1280px] mx-4 xl:mx-auto ">
      <div className="flex  justify-center pt-20">
        <h1 className="text-xl">
          Elevate Your Day with a Symphony of Weather Intelligence
        </h1>
      </div>
      <div className="pt-4">
        <input
          className="border-[2px] border-purple-500 w-full rounded-lg pl-2"
          type="text"
          placeholder="Search for a Location"
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-rose-400 to-fuchsia-500 text-white p-2 rounded-xl mt-2 text-base font-serif"
        >
          {" "}
          Search weather
        </button>
        {weather && (
          <p className="pt-2 text-base">
            The Weather in {query} is {weather.current.temp_c}&#8451; and the
            Wind speed is {weather.current.wind_mph} mph.
          </p>
        )}
      </div>
      <div className=" flex flex-col md:flex-row justify-between items-center  mt-10">
        <div className="paris lg:w-1/3">
          <Image
            className="rounded-lg"
            src={"/Images/paris.jpg"}
            height={360}
            width={360}
          />
          {paris && (
            <h1 class=" pt-2 pl-1 font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500">
              Paris ({paris.current.temp_c}&#8451;)
            </h1>
          )}
          {paris && (
            <p className="pt-2 pl-1 text-base tracking-tight w-4/5">
              The Weather in paris is {paris.current.temp_c}&#8451; and the Wind
              speed is {paris.current.wind_mph} mph.
            </p>
          )}
        </div>
        <div className="mumbai lg:w-1/3">
          <Image
            className="rounded-lg"
            src={"/Images/mumbai.jpg"}
            height={360}
            width={360}
          />
          {mum && (
            <h1 class="pl-1 pt-2 font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500">
              Mumbai ({mum.current.temp_c}&#8451;)
            </h1>
          )}

          {mum && (
            <p className="pt-2 pl-1 text-base tracking-tight w-4/5">
              The Weather in Mumbai is {mum.current.temp_c}&#8451; and the Wind
              speed is {mum.current.wind_mph} mph.
            </p>
          )}
        </div>
        <div className="dubai lg:w-1/3 sm:hidden lg:block ">
          <Image
            className="rounded-lg"
            src={"/Images/dubai.jpg"}
            height={360}
            width={360}
          />
          {dub && (
            <h1 class="pl-1 pt-2 font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500">
              Dubai ({dub.current.temp_c}&#8451;)
            </h1>
          )}
          {dub && (
            <p className="pt-2 pl-1 text-base tracking-tight w-4/5">
              The Weather in Dubai is {dub.current.temp_c}&#8451; and the Wind
              speed is {dub.current.wind_mph} mph.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
