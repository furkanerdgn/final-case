import { useContext } from "react"
import { StarshipContext } from "../context/ShipsContext"

function Footer() {

  const { isPressed } = useContext(StarshipContext);
  
  return (
    <footer
        className="flex items-center p-16 border-t-4 border-yellow-500 bg-black flex-col gap-5  justify-center w-full  "
        >
        <p className="text-center text-gray-500">
            &copy; 2023 Star Wars
        </p>
        <h1 className="text-white">Furkan Erdoğan</h1>
      <div className="flex gap-5 mb-6">
        <a href="https://www.linkedin.com/in/furkan-erdgn/" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="linkedin"
            className="w-10 h-10"
          />
        </a>
        <a href="https://github.com/furkanerdgn" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
            alt="github"
            className="w-10 h-10 bg-yellow-500 rounded-full  "
          />
        </a>
        <a href="https://twitter.com/FurkandevEN" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="twitter"
            className="w-10 h-10"
          />
        </a>

          </div>

          {
            !isPressed &&(
              <div className=" w-full flex justify-center items-center ">
      <p className="text-yellow-500 text-center text-xl ">
        Press the Darth Vader 
      </p>
        <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16  stroke-yellow-500 -rotate-[130deg]  "
                      strokeWidth={1}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      >
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>

      </div>
                    )
                    }
    </footer>

  )
}

export default Footer