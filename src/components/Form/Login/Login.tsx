import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/reduxhooks";
import { setUser } from "../../../store/slices/userSlice";
import s from "./Login.module.scss";

interface Props {
  setLogin: () => void;
  setHeaderheader: () => void;
}
const Login = ({ setLogin, setHeaderheader }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );

        alert("wow!");
      })
      .catch(() => alert("Invalid user!"));
  };
  return (
    <form className={s.log}>
      <div className={s.formgroup}>
        <input
          placeholder="E-mail"
          required
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={s.formgroup}>
        <input
          placeholder="password"
          required
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p onClick={(e) => setLogin()} className={s.register}>
        or register
      </p>
      <button onClick={() => handleLogin(email, password)} className={s.submit}>
        submit
      </button>
    </form>
  );
};

export default Login;
