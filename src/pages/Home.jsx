import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (!name.trim()) {
      alert("닉네임을 입력해주세요!!");
    } else {
      navigate(`/quiz/${name}`);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="닉네임을 입력하세요."
        className="border-b-2 outline-none border-gray-300 p-1 pl-2 mt-7 text-center placeholder:text-[14px]"
      />
      <button
        onClick={handleClick}
        className="w-auto text-white bg-gray-400 py-1.5 px-5 rounded-sm hover:bg-gray-500 cursor-pointer"
      >
        START
      </button>
    </>
  );
};

export default Home;
