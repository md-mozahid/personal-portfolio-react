import { useState } from 'react'
// import { Switch } from "@headlessui/react";
import FilterTab from './filterTab'
import SingleSkill from './singleSkill'
// import Animated from "./animated";
import { skills } from '../../data/skillsData'

const SkillsSection = () => {
  const [enabled, setEnabled] = useState(true)
  // const [items, setItems] = useState([...skills.sort((b, a) => b.id - a.id)])

  const [filtered, setFiltered] = useState([
    ...skills.sort((b, a) => b.id - a.id),
  ])
  const filterCategory = [...new Set(skills.map((cat) => cat.category))]

  const handleFilter = (currentCategory) => {
    const newItem = skills.filter((newItem) => {
      return newItem.category === currentCategory
    })
    setFiltered(newItem)
  }

 

  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center">
          <h2 className="sm:text-5xl text-2xl font-medium title-font mb-4 uppercase">
            My Skills
          </h2>
        </div>
        {/* toggle */}
        {/* <div className="pt-10 pb-20 text-center">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-orange-700" : "bg-rose-700"}
          relative inline-flex h-[38px] w-[150px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-28" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div> */}

        {/* filter tab */}
        <FilterTab
          handleFilter={handleFilter}
          filterCategory={filterCategory}
        />
        {enabled ? (
          <div className="flex flex-wrap sm:m-4 mb-10 mt-4 gap-6">
            {/* {skillSlice.map((item, index) => (
              <SingleSkill key={index} item={item} />
              ))} */}
            <SingleSkill filtered={filtered} />
          </div>
        ) : (
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* <Animated /> */}
            <h1 className="text-3xl">Updating...</h1>
          </div>
        )}

        <button
          className="btn btn-outline flex-center mt-16 mx-auto"
          onClick={() => setFiltered(skills)}>
          Show More
        </button>
      </div>
    </section>
  )
}

export default SkillsSection
