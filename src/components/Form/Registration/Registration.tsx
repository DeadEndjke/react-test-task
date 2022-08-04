import s from "./Registration.module.scss";

import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAppDispatch } from "../../../hooks/reduxhooks";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../store/slices/userSlice";

interface Props {
  setRegistration: () => void;
}
const Registration = ({ setRegistration }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    alert("wow!");
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
        alert("wow!");
        console.log(auth);
      })
      .catch(console.error);
  };

  return (
    <form className={s.reg}>
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

      <p className={s.login} onClick={setRegistration}>
        already have an account?
      </p>
      <button
        onClick={() => handleRegister(email, password)}
        className={s.submit}
      >
        submit
      </button>
      <input type="submit" onSubmit={() => handleRegister(email, password)} />
    </form>
  );
};

export default Registration;
