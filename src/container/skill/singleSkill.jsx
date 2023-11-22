import { FaReact } from 'react-icons/fa'

const SingleSkill = () => {
  return (
    <div className="p-4 md:w-[180px] sm:w-1/2 flex flex-col text-center items-center rounded-lg border border-[#475569] cursor-pointer">
      <div className="w-16 h-16 inline-flex items-center justify-center rounded-full text-4xl bg-indigo-100 text-indigo-500 mb-5">
        <FaReact />
      </div>
      <div className="">
        <h2 className="text-xl font-medium mb-3">Javascript</h2>
      </div>
    </div>
  )
}

export default SingleSkill
