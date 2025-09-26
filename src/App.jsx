import { Route, Routes } from "react-router-dom";
import Quiz from "./component/Quiz";
import Results from "./component/Results";
import Home from "./component/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:nickname" element={<Quiz />} />
      <Route path="/results/:nickname" element={<Results />} />
    </Routes>
  );
}

export default App;
