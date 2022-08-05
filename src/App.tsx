import React, { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import s from "./styles/App.module.scss";

import { Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
