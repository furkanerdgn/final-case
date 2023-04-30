import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StarshipContext } from "../context/ShipsContext";
import Saber from "./saber";

function HomeHead() {
  const [seriesPic, setSeriesPic] = useState([
    "https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_18508_3840c966.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster_f98a86eb_62fc4b3c.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/sb_teaser2_1-sht_v3a_online_lg_86f89198.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/5adfd0618fdfb900016b5ca6-image_64bc2f8e.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/image_ff356cdb.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/EP2-IA-69221-RESIZED_1e8e0971.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/EP1-IA-99993-RESIZED_f9ae99b6.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/EP6_POS_21_R-RESIZED_2873dc04.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/image_ca7910bd.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/EP4_POS_2_D-RESIZED_f977074a.jpeg",
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const { setSearch, setIsSubmit } = useContext(StarshipContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
    setIsSubmit(true);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSearchTerm("");
  };

  return (
    <section className="overflow-hidden bg-black  flex flex-col gap-2">
      <h1 className="bg-black text-white font-semibold p-2 text-center">
        "A long time ago in a galaxy far, far away...."
      </h1>
      <div className="flex overflow-hidden">
        {seriesPic &&
          seriesPic.map((pic, index) => {
            return (
              <motion.div
                key={index}
                className="relative w-64 h-96 bg-white shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  className="w-full h-64 object-cover"
                  src={pic}
                  alt="star wars pictures"
                />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent" />
              </motion.div>
            );
          })}
      </div>

      <span className="text-3xl col-span-3 text-center text-white font-extrabold p-12 ">
        Welcome to the Star Wars Ships Database
      </span>
      <div className="flex items-center justify-center col-span-2 bg-black h-full">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-5 ring-yellow-300 border-2 mb-24 rounded-md bg-white"
        >
          <label
            onClick={handleSubmit}
            className="text-black flex p-3 cursor-pointer hover:bg-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-black mx-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
            <div className="border-2 border-l border-gray-300 "></div>
          </label>
          <input
            className=" border-black outline-none text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search ..."
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                handleSubmit(e);
              }
            }}
          ></input>
          <div className="group ">
            <button
              onClick={handleClear}
              className="bg-white flex items-center font-semibold mr-2 hover:text-yellow-700 text-black rounded-md p-2 "
            >
              <Saber className="rotate-90" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HomeHead;
