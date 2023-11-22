import Button from '../../components/button'

const FilterTab = ({ handleFilter, filterCategory, activeBtn }) => {
  return (
    <>
      <div className="flex-center pt-16 pb-8">
        <div className="flex-center space-x-5">
          {filterCategory.map((cat, index) => (
            <Button
              key={index}
              className={`md:w-[180px] ${
                activeBtn === cat
                  ? 'bg-gradient-to-r from-rose-600 to-violet-600 hover:bg-gradient-to-bl'
                  : 'dark:text-black'
              }`}
              onClick={() => handleFilter(cat)}>
              {cat}
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}

export default FilterTab
