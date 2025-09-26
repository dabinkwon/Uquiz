import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="w-screen h-screen flex justify-center items-center bg-[rgb(207,207,207)] font-serif">
      <div className="flex flex-col justify-center items-center gap-5 w-9/12 sm:w-[500px] h-[300px] bg-amber-50 rounded-2xl shadow-2xl">
        <h1 className="text-5xl">UQuiz?</h1>
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
      </div>
    </div>
  );
};

export default Home;
