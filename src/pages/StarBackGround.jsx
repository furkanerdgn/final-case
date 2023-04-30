import SvgComponent from "../svgs/star";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import Logo from "../svgs/logo";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Saber from "../components/saber";
import { useContext } from "react";
import { StarshipContext } from "../context/ShipsContext";
import starWars from "../audio/starWars.mp3";

function Background() {
  const { setIsPressed } = useContext(StarshipContext);
  setIsPressed(true);
  const [isComplete, setIsComplete] = useState(false);
  const [stars, setStars] = useState([]);
  const navigate = useNavigate();
  const [music, setMusic] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMusic(false);
    }, 65000);

    return clearTimeout;
  }, []);

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateStars = (count) => {
    return Array.from({ length: count }, () => [
      random(24, window.innerWidth - 24),
      random(24, window.innerHeight - 24),
    ]);
  };

  useEffect(() => {
    const generatedStars = generateStars(150);
    setStars(generatedStars);
  }, []);

  function handleClick() {
    navigate(-1);
  }

  return (
    <>
      <button
        className="absolute flex z-30 gap-3 items-center m-5 rounded-xl bg-gray-700 p-3 text-white hover:bg-gray-600"
        onClick={handleClick}
      >
        {" "}
        <Saber /> <span className="font-semibold">Back</span>
      </button>
      {music && (
        <audio className="absolute hidden" controls autoPlay>
          <source src={starWars} type="audio/mpeg" />
        </audio>
      )}

      <div className="min-h-screen relative overflow-hidden -z-20 bg-black">
        {stars?.map((star) => (
          <SvgComponent
            key={uuidv4()}
            className={`w-3 h-3 absolute -z-10 fill-white `}
            x={star[0]}
            y={star[1]}
          />
        ))}
        <div className="relative -z-10 w-full contDiv h-4/5 ">
          <div className="text-5xl font-sans overflow-hidden intro text-yellow-500 absolute font-extrabold text-center z-20 h-screen px-24 leading-[6rem]  mt-24">
            <motion.p
              initial={{ y: 600 }}
              animate={isComplete ? { y: -2500 } : { y: 1000 }}
              transition={{ duration: 30 }}
            >
              War! The Republic is crumbling under attacks by the ruthless Sith
              Lord, Count Dooku. There are heroes on both sides. Evil is
              everywhere. In a stunning move, the fiendish droid leader, General
              Grievous, has swept into the Republic capital and kidnapped
              Chancellor Palpatine, leader of the Galactic Senate. As the
              Separatist Droid Army attempts to flee the besieged capital with
              their valuable hostage, two Jedi Knights lead a desperate mission
              to rescue the captive Chancellor. Meanwhile, on the front lines of
              the Clone Wars, Anakin Skywalker, a young Padawan of Jedi Knight
              Obi-Wan Kenobi, struggles with his own inner demons as he seeks to
              unravel the mystery of the Sith and save the Republic from
              darkness...."
            </motion.p>
          </div>
        </div>

        {!isComplete && (
          <motion.div
            initial={{ scale: 2.5 }}
            animate={{ scale: 0 }}
            transition={{ duration: 7 }}
            onAnimationComplete={() => setIsComplete(true)}
          >
            <Logo />
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Background;
