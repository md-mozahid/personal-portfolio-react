const Button = ({ children, type, className, ...rest }) => {
  return (
    <button
      className={`text-center uppercase font-medium px-10 py-2 border border-[#475569] rounded-full cursor-pointer hover:bg-slate-600 hover:transition-all ${className}`}
      type={type === "submit" ? "submit" : "button"}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
