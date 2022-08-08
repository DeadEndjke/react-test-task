import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import s from "./styles/App.module.scss";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { Navigate } from "react-router-dom";
import { User } from "./components/User/User";
import { useState } from "react";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  const { isAuth } = useAuth();
  const [isValidAdress, setIsValidAdress] = useState(true);
  return (
    <div className={s.App}>
      <Header />
      <Routes>
        <Route path="/login" element={<Form />} />
        {isAuth ? (
          <Route path="/" element={<Navigate to={"/user"} />} />
        ) : (
          <Route path="/" element={<Navigate to={"/login"} />} />
        )}
        {isAuth ? (
          <Route path="/user" element={<User />} />
        ) : (
          <Route path="/user" element={<Navigate to={"/login"} />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
