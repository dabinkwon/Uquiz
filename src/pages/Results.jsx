import { useContext } from "react";
import RankingProvider from "../context/RankingContext";

const Results = () => {
  const { result } = useContext(RankingProvider);
  return <>Results</>;
};

export default Results;
