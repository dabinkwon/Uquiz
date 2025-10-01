import { useState } from "react";
import data from "../mockData/questions.json";

const Quiz = () => {
  const [quiz, setQuiz] = useState(data);
  const [currentId, setCurrentId] = useState(0);
  const [answer, setAnswer] = useState("");

  const currentQuiz = quiz[currentId];

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleClick = () => {
    if (!answer) {
      alert("답을 선택해주세요!");
      return;
    } else {
      setCurrentId((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-[17px]">
        <span>{currentId + 1}. </span>
        {currentQuiz.question}
      </h2>
      <div className="flex flex-col gap-3">
        {currentQuiz.options.map((option, idx) => (
          <label
            className="rounded-[5px] bg-[rgba(220,220,222,0.84)] py-2 px-3 flex items-center gap-1.5"
            key={idx}
          >
            <input
              type="radio"
              name="quiz-option"
              value={option}
              checked={option === answer}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>
      <button
        onClick={handleClick}
        className="mx-auto w-44 text-white bg-gray-400 py-1.5 px-5 rounded-sm hover:bg-gray-500 cursor-pointer"
      >
        NEXT
      </button>
    </div>
  );
};

export default Quiz;
