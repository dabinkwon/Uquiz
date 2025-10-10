import { useContext } from "react";
import { RankingContext } from "../context/RankingContext";
import { CgAlignLeft } from "react-icons/cg";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const { result } = useContext(RankingContext);
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-2xl font-extrabold">퀴즈 결과</h2>
      <div className="flex items-center">
        <CgAlignLeft className="size-10" />
        <p className="text-[16px]">내 점수 : {result.score} / 10</p>
      </div>
      <table className="table-auto rounded-sm w-1/2 border-gray-400 mb-5 ">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">순위</th>
            <th className="p-2">ID</th>
            <th className="p-2">점수</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, idx) => (
            <tr className="text-center" key={idx}>
              <td className="border-t-1 border-gray-300 p-2">{idx + 1}</td>
              <td className="border-t-1 border-gray-300 p-2">
                {item.nickname}
              </td>
              <td className="border-t-1 border-gray-300 p-2">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomButton onClick={handleRestart} className={"bg-amber-500"}>
        다시하기
      </CustomButton>
    </div>
  );
};

export default Results;
