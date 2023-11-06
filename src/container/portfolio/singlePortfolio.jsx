const SinglePortfolio = () => {
  return (
    <div className="hoverEffect overflow-hidden p-5 md:w-1/3 flex flex-col text-center items-center border border-[#475569] cursor-pointer rounded-xl relative hover:block">
      <img
        className="object-cover object-center rounded-lg"
        alt="hero"
        src="https://dummyimage.com/720x600"
      />
      <div className="absolute space-x-5 -bottom-full">
        <a className="btn btn-outline px-5" href="">
          Preview
        </a>
        <a className="btn btn-outline px-5" href="">
          GitHub
        </a>
      </div>
    </div>
  )
}

export default SinglePortfolio
