import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./component/Layout";
import { RouteConfig } from "./router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {RouteConfig.map((config) => (
          <Route key={config.path} {...config} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
