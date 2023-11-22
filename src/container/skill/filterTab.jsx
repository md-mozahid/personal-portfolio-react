// const skillItem = ['Frontend', 'Backend', 'Tools', 'Others']
import Button from '../../components/button'

const FilterTab = ({ handleFilter, filterCategory }) => {
  return (
    <>
      <div className="flex-center pt-16 pb-8">
        <div className="flex-center space-x-5">
          {filterCategory.map((cat, index) => (
            <Button
              key={index}
              className="md:w-[180px]"
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
