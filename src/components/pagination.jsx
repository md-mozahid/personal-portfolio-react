const Pagination = () => {
  return (
    <>
      <div className="flex items-center justify-center py-10">
        {[1, 2, 3, 4].map((item, index) => (
          <a
            key={index}
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 hover:scale-105"
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
};

export default Pagination;
