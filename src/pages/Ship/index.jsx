import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { fetchStarship } from '../../lib/Starships'
import images from '../../Image.json'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'

function Index() {

  const { id } = useParams();

  const [image, setImage] = useState("");

  const constraintsRef = useRef(null);
  
  

  const {
    data: ship,
    isLoading,
    isError,
  } = useQuery(
    ["ship",id],() => fetchStarship(id),
    {
      enabled: true,
    }
  );

  useEffect(() => {
    ship &&(
      images.filter((img) => {
        if (img.name === ship.name) {
          setImage(img.img);
        }
      })
      )
  }, [ship]);



  return (
    ship &&
    <div className="container  m-12 mx-auto w-4/5 flex-col md:flex-row border-4 shadow-2xl shadow-black border-yellow-500 flex">
      <motion.div ref={constraintsRef} className="flex flex-col w-full  bg-black justify-center  items-center border-yellow-500 ">
        <motion.img drag dragConstraints={constraintsRef}
        dragElastic={0}
        src={image} className=' object-cover  ' alt='starship image'></motion.img>
      </motion.div>
      <div className="flex flex-col border-l-4 border-yellow-500 gap-3 w-full p-8 ">
        <h1 className='text-center my-8 font-extrabold text-4xl         
        '>{ship.name}</h1>
        <h2 className='text-thin text-xl'><span className='font-bold text-xl'>Model
          <div className='border-2'/>
          </span> {ship.model}</h2>
        <h2 className='text-thin text-xl'><span className='font-bold text-xl'>Manufacturer
          <div className='border-2'/>
          </span> {ship.manufacturer}</h2>
        <h2 className='text-thin text-xl'><span className='font-bold text-xl'>Cost in credits
          <div className='border-2'/>
          </span> {ship.cost_in_credits}</h2>
        <h2 className='text-thin text-xl'><span className='font-bold text-xl'>Cargo Capacity
          <div className='border-2'/>
          </span> {ship.cargo_capacity}</h2> 
        <h2 className='text-thin text-xl'><span className='font-bold text-xl'>Max atmosphering speed
          <div className='border-2'/>
          </span> {ship.max_atmosphering_speed}</h2>
        <h2 className='text-thin text-xl'><span className='font-bold text-xl'>Crew
          <div className='border-2'/>
          </span> {ship.crew}</h2>
        <h2 className='text-thin text-xl'><span className='font-bold text-xl'>Passengers
          <div className='border-2'/>
          </span> {ship.passengers}</h2>

      </div>
    </div>
  )
}

export default Index