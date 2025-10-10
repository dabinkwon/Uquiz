import { createContext, useState } from "react";

export const RankingContext = createContext();

const RankingProvider = ({ children }) => {
  const [result, setResult] = useState([]);

  const addRanking = (nickname, score) => {
    setResult((prev) => {
      const newList = [...prev, { nickname, score }];

      newList.sort((a, b) => b.score - a.score);

      return newList;
    });
  };
  return (
    <RankingContext value={{ result, addRanking }}>{children}</RankingContext>
  );
};

export default RankingProvider;
