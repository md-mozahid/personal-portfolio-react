const skill = ["Frontend", "Backend", "Tools", "Others"];
import Button from '../../components/button'

const FilterTab = () => {
  return (
    <>
      <div className="flex-center pt-16 pb-8">
        <div className="flex-center space-x-5">
          {skill.map((item, index) => (
            <Button key={index} className='md:w-[180px]'>
              {item}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterTab;
