const SingleClient = ({ item }) => {
  const { name, designation, img, desc } = item
  return (
    <div className="w-[900px] mx-auto text-center border border-[#475569] px-6 py-5 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            className="w-20 h-20 border border-[#475569] rounded-full"
            src={img}
            alt="image"
          />
          <div className="text-left">
            <h4 className="text-lg font-medium">{name}</h4>
            <span className="">{designation}</span>
          </div>
        </div>
        <div className="space-x-1">
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
        </div>
      </div>
      <p className="px-6 py-6">{desc}</p>
    </div>
  )
}

export default SingleClient
