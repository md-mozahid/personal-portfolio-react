import { useState } from 'react'
import { skills } from '../../data/skillsData'
import FilterTab from './filterTab'
import SingleSkill from './singleSkill'

const SkillsSection = () => {
  const [filtered, setFiltered] = useState(skills)
  const filterCategory = [...new Set(skills.map((cat) => cat.category))]
  const [activeBtn, setActiveBtn] = useState('frontend')

  // handle filter button
  const handleFilter = (currentCategory) => {
    setActiveBtn(currentCategory)
    if (currentCategory === 'frontend') {
      // active yet not fixed of front end category
      const frontend = skills.filter((item)=> {
       return item.category.includes('frontend')
      })
      setFiltered(frontend)
    } else {
      const updateItem = skills.filter((item) => {
        return item.category === currentCategory
      })
      setFiltered(updateItem)
    }
  }

  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center">
          <h2 className="sm:text-5xl text-2xl font-medium title-font mb-4 uppercase">
            My Skills
          </h2>
        </div>
        <FilterTab
          handleFilter={handleFilter}
          filterCategory={filterCategory}
          setFiltered={setFiltered}
          activeBtn={activeBtn}
        />
        <div className="flex flex-wrap sm:m-4 mb-10 mt-4 gap-6">
          <SingleSkill filtered={filtered} setFiltered={setFiltered} />
        </div>
        <button
          className="btn btn-outline flex-center mt-16 mx-auto"
          onClick={() => setFiltered(skills)}>
          Show All
        </button>
      </div>
    </section>
  )
}

export default SkillsSection
