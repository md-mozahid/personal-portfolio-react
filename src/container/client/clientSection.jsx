import { AnimatePresence, motion } from "framer-motion";
import SingleClient from "./singleClient";
import { useState } from "react";

const array = [1, 2, 3, 4];
const ClientSection = () => {
  const [slide, setSlide] = useState(array);
  return (
    <div className="max-w-full">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold tracking-wider uppercase">
          Client Feedback
        </h2>
      </div>

      {array.map((item, index) => (
        <AnimatePresence key={index}>
          {slide && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SingleClient key={index} item={item} />
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      <div className="flex items-center justify-center py-10">
        {[1, 2, 3, 4].map((item, index) => (
          <a
            key={index}
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 hover:scale-105"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
