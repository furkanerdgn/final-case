import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Saber from "../../components/saber";

import Results from "../.././components/Results";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { StarshipContext } from "../.././context/ShipsContext";
import { useContext } from "react";
import { fetchStarships}from "../../lib/Starships"
import { Link } from "react-router-dom";

function Home() {
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

  const { search, setSearch, isSubmit, setIsSubmit } =
    useContext(StarshipContext);


  const [searchTerm, setSearchTerm] = useState("");

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isSubmit]);


  const {
    data: ships,
    status,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(["starships",search],
  
  ({pageParam})=>fetchStarships({pageParam,search}), {
    enabled: true,
    getNextPageParam: (lastPage) => {  
    
      if (lastPage.next === null) {
        return undefined;
      }
      return lastPage.next;
    },
    onSuccess: () => {
      
    },
  });

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
    <>
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

      <div className="container justify-items-center mx-auto">
        <section ref={scrollRef} className="grid grid-cols-1 mx-auto justify-around justify-items-center text-center bg-black text-white  lg:grid-cols-3 gap-8">
          {status === "loading" ? (
            <div className="flex justify-center items-center mb-5 col-span-3">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 p-4 border-b-2 border-yellow-500"></div>
            </div>
          ) : (
            status === "error" && (
              <div className="flex mb-8 justify-center items-center bg-black border-2 border-yellow-500 rounded text-yellow-500 col-span-3 p-4">
                <p className="font-semibold">Error fetching data</p>
              </div>
            )
          )}


              
              
                  {
                    ships?.pages?.map((page) =>{
                      return page.results.map((ship) =>{   
                        const {id} = ship.url.match(/\/api\/starships\/(?<id>\d+)/).groups;          
                       return (
                         <React.Fragment key={uuidv4()}>
                          <Link to={`/ships/${id}`}>
                           <Results ship={ship} />
                          </Link>
                          </React.Fragment>
                       )
                       
                      }
                      ) 
                      
                    }
                    )
                  }
                
      

          {status === "success" && (
            <button
            onClick={() => fetchNextPage()}
              className="bg-black mb-24 mx-auto flex gap-2 disabled:bg-slate-700 disabled:border-black items-center text-white col-span-3 border-2 font-semibold p-2 rounded-md"
              disabled={!hasNextPage || isFetching}
            >
              {isFetching ? (
                <label className="flex items-center">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-yellow-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                  Loading...
                </label>
              ) : hasNextPage ? (
                <label>
                  <div className="flex items-center justify-center">
                    <p>Load More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-2 stroke-yellow-500 "
                      strokeWidth={2}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </label>
              ) : (
                <label>
                  <div className="flex items-center justify-center">
                    <p>No more results</p>
                  </div>
                </label>
              )}
            </button>
          )}
        </section>
      </div>
    </>
  );
}

export default Home;
