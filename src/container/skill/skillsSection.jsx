import SinglePortfolio from './singleSkill'

const array = [1, 2, 3]

const SkillsSection = () => {
  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="head-text">My Portfolio</h2>
          <div className="flex-center">
            <div className="head-text-after"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {array.map((item, index) => (
            <SinglePortfolio key={index} item={item} />
          ))}
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Show More
        </button>
      </div>
    </section>
  )
}

export default SkillsSection
