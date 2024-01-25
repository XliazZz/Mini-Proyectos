import { motion } from 'framer-motion';

const Tile = ({ value, index, callback }) => {
  return (
    <motion.div
      onClick={() => callback(index)}
      className={`w-22 h-20 bg-indigo-300 flex justify-center items-center text-7xl rounded-sm font-black ${
        value === 'X' ? 'text-white' : 'text-black'
      }`}
      whileTap={{ scale: 0.9 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {value}
    </motion.div>
  );
};

export default Tile;
