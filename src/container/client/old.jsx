import { AnimatePresence, motion } from 'framer-motion'
import SingleClient from './singleClient'
import { useState } from 'react'
import Pagination from '../../components/pagination'


const array = [1, 2, 3, 4]
const ClientSection = () => {
  const [slide, setSlide] = useState(array)
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
              exit={{ opacity: 0 }}>
              <SingleClient key={index} item={item} />
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      <Pagination />
    </div>
  )
}

export default ClientSection
