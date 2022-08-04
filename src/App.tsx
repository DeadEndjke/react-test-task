import React, { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import s from "./styles/App.module.scss";

import { Routes, Route } from "react-router-dom";

import { SignUp } from "./components/Form2/SignUp";
import { Login } from "./components/Form2/Login";

function App() {
  const [header, setHeader] = useState(0);
  function setHeaderheader() {
    setHeader(1);
  }

  return (
    <div className={s.App}>
      {/* {header ? <Header header={header} /> : <div></div>}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes> */}
      <Header header={header} />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route
          path="/login"
          element={<Form setHeaderheader={setHeaderheader} />}
        />
      </Routes>
    </div>
  );
}

export default App;
