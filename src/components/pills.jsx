const Pills = ({ children,className, ...rest }) => {
  return (
    <>
      <span
        className={`text-center text-sm capitalize font-medium px-5 py-0.5 border border-[#475569] rounded-full cursor-pointer ${className}`}
        {...rest}
      >
        {children}
      </span>
    </>
  );
};

export default Pills;
