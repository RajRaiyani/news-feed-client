import { Route, Routes } from "react-router-dom";

import HomeLayout from "./components/Home/Layout";
import Feed from "./pages/Feed";
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    document.addEventListener('keydown', (event) => {
      console.log(event)
    })
  },[])
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="" element={<Feed />} />
      </Route>
    </Routes>
  );
}

export default App;
