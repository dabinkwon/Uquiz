import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStartQuiz = () => {
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
      <CustomButton onClick={handleStartQuiz} className={"w-auto"}>
        START
      </CustomButton>
    </>
  );
};

export default Home;
