import { FaReact } from 'react-icons/fa'

const SingleSkill = () => {
  return (
    <div className="p-4 m-0 md:w-1/5 sm:w-1/2 w-full flex flex-col text-center items-center rounded-lg border border-[#475569] cursor-pointer">
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
