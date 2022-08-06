import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import s from "./styles/App.module.scss";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { Navigate } from "react-router-dom";
import { User } from "./components/User/User";

function App() {
  const { isAuth } = useAuth();
  return (
    <div className={s.App}>
      <Header />
      <Routes>
        {isAuth ? (
          <Route
            path="/"
            element={
              <div>
                <h1>
                  Войдите в свой личный кабинет, где вы можете создать контакты,
                  нажав на кнопку "myAccount"
                </h1>
              </div>
            }
          />
        ) : (
          <Route
            path="/"
            element={
              <div>
                <h1>
                  {" "}
                  Зарегестрируйтесь или войдите в свой аккаунт, нажав на кнопку
                  "Войти"
                </h1>
              </div>
            }
          />
        )}
        {/*  */}
        {/* Войдите в свой личный кабинет, где вы можете создать контакты, нажав на кнопку "myAccount" */}
        <Route path="/login" element={<Form />} />
        {isAuth ? (
          <Route path="/user" element={<User />} />
        ) : (
          <Route path="/user" element={<Navigate to={"/login"} />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
