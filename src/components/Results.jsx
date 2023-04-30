import { useEffect } from "react";
import images from ".././Image.json";
import { useState } from "react";

function Results(props) {
  const [image, setImage] = useState("");

  useEffect(() => {
    const img = images.find((img) => img.name === props.ship.name);
    if (img) {
      setImage(img.img);
    }
  }, []);

  return (
    <>
      <div
        className={`w-full h-full cursor-pointer py-3 text-start text-black backdrop-blur-xl  rounded-xl ring-1  hover:bg-slate-200  ring-yellow-500 bg-white `}
      >
        <h1 className="text-xl line-clamp-1 hover:line-clamp-4 mt-3 text-center  font-extrabold">
          {props.ship.name}
        </h1>
        <img
          className="w-54 h-54 aspect-[4/3] border-y-2 border-yellow-500 object-fit my-6 shadow-2xl object-cover"
          src={image}
          alt="star wars pictures"
        />
        <article className="text-md pl-2 font-semibold line-clamp-1">
          <p className="text-md font-semibold line-clamp-1">
            Model: {props.ship.model}
          </p>
          <p className="text-md font-semibold line-clamp-1">
            Manufacturer: {props.ship.manufacturer}
          </p>
          <p className="text-md font-semibold">
            Cost: {props.ship.cost_in_credits}
          </p>
          <p className="text-md font-semibold">Length: {props.ship.length}</p>
          <p className="text-md font-semibold">
            Max Speed: {props.ship.max_atmosphering_speed}
          </p>
        </article>
      </div>
    </>
  );
}
export default Results;
