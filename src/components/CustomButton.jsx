const CustomButton = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-gray-400  py-1.5 px-5 text-white rounded-sm hover:bg-gray-500 cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
