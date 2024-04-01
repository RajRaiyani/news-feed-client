import { Route, Routes } from "react-router-dom";

import HomeLayout from "./components/Home/Layout";
import Feed from "./pages/Feed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="" element={<Feed />} />
      </Route>
    </Routes>
  );
}

export default App;
