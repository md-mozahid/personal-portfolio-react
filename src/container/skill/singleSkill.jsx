import Pills from "../../components/pills";

const SingleSkill = ({ filtered }) => {
  // item slice
  // let skillSlice
  // if (filtered.length > 10) {
  //   skillSlice = filtered.slice(0, 10)
  // } else {
  //   skillSlice = filtered
  // }

  return (
    <>
      {filtered?.map((item) => {
        const { name, thumbnail, skill } = item;
        return (
          <div
            key={item.id}
            className="p-4 md:w-[180px] sm:w-1/2 flex flex-col text-center items-center rounded-lg border border-[#475569]"
          >
            <img
              className="p-2 w-16 h-16 inline-flex items-center justify-center rounded-full text-4xl bg-indigo-100 text-indigo-500 mb-5"
              src={thumbnail}
            />
            <div className="mb-0">
              <h2 className="font-medium mb-1 tracking-wider">{name}</h2>
              <div className="mt-3">
                <Pills className={skill ? "bg-slate-600" : "bg-rose-500"}>
                  {skill}
                </Pills>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SingleSkill;
