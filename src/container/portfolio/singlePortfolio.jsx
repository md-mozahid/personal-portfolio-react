import { useState } from 'react'
import PortfolioModal from './portfolioModal'

const SinglePortfolio = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="hoverEffect overflow-hidden p-5 md:w-1/3 flex flex-col text-center items-center border border-[#475569] cursor-pointer rounded-xl relative hover:block">
        <img
          className="object-cover object-center rounded-lg"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div className="absolute w-full left-0 z-10 space-x-5 -bottom-full">
          <button onClick={openModal} className="btn btn-outline px-5" href="">
            Preview
          </button>
        </div>
      </div>
      <PortfolioModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
      />
    </>
  )
}

export default SinglePortfolio
