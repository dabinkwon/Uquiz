import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Layout from "./component/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/quiz/:nickname" element={<Quiz />} />
        <Route path="/results/:nickname" element={<Results />} />
      </Route>
    </Routes>
  );
}

export default App;
