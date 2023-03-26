import React, { useState } from "react"
import { Route, Routes } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage"
import FourthPage from "./components/FourthPage"
import LastPage from "./components/LastPage";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/secondpage" element={<SecondPage />} />
        <Route path="/thirdpage" element={<ThirdPage />} />
        <Route path="/fourthpage" element={<FourthPage />} />
        <Route path="/lastpage" element={<LastPage />} />
      </Routes>
    </div>
  )
}

export default App
