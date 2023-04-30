import { motion } from "framer-motion";

const SvgComponent = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    viewBox="0 0 200 200"
    className={props.className}
    initial="hidden"
    transition={{ duration: 5, repeat: Infinity }}
    animate={{ scale: [1, 2.5, 2.5, 1] }}
    style={{ x: props.x, y: props.y }}
  >
    <motion.path
      d="M200 98.523A41.9 41.9 0 0 1 188.941 100h-44.708c-23.116 0-41.855 18.739-41.855 41.854v49.465c0 2.976-.311 5.88-.901 8.681A41.888 41.888 0 0 1 100 188.941v-44.708c0-23.116-18.739-41.855-41.854-41.855H8.68a42.08 42.08 0 0 1-8.68-.901A41.888 41.888 0 0 1 11.06 100h44.707c23.116 0 41.855-18.739 41.855-41.854V8.68c0-2.976.31-5.88.901-8.681A41.9 41.9 0 0 1 100 11.06v44.707c0 23.116 18.739 41.855 41.855 41.855h49.464c2.976 0 5.88.31 8.681.901Z"
      //variants={draw}
    />
  </motion.svg>
);
export default SvgComponent;
