import { createContext, useState } from "react";

const RankingContext = createContext();

const RankingProvider = ({ children }) => {
  const [result, setResult] = useState({ nickName: "", score: 0 });
  return (
    <UserInfoContext value={{ result, setResult }}>{children}</UserInfoContext>
  );
};

export default RankingProvider;
