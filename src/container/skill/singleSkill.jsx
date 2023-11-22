const SingleSkill = ({ filtered }) => {
  // item slice
  let skillSlice
  if (filtered.length > 9) {
    skillSlice = filtered.slice(0, 9)
  } else {
    skillSlice = filtered
  }
  
  return (
    <>
      {skillSlice.map((item) => {
        const { name, thumbnail } = item
        return (
          <div
            key={item.id}
            className="p-4 md:w-[180px] sm:w-1/2 flex flex-col text-center items-center rounded-lg border border-[#475569] cursor-pointer">
            <img
              className="p-2 w-16 h-16 inline-flex items-center justify-center rounded-full text-4xl bg-indigo-100 text-indigo-500 mb-5"
              src={thumbnail}
            />

            <div className="">
              <h2 className="text-xl font-medium mb-3 tracking-wider">
                {name}
              </h2>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SingleSkill
