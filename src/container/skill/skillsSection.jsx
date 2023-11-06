import Skill from './singleSkill'

const array = [1, 2, 3,4,5,6,7,8,9,10]

const SkillsSection = () => {
  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="sm:text-5xl text-2xl font-medium title-font mb-4 uppercase">
            My Skills
          </h2>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {array.map((item, index) => (
            <Skill key={index} item={item} />
          ))}
        </div>
        <button className="btn btn-outline flex-center mt-16 mx-auto">
          Show More
        </button>
      </div>
    </section>
  )
}

export default SkillsSection
