import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "./../../store/slices/userSlice";
import { useAppDispatch } from "./../../hooks/reduxhooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const push = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        push("/");
        // setHeaderheader();
      })
      .catch(() => alert("Invalid user!"));
  };

  return <Form title="sign in" handleClick={handleLogin} />;
};

export { Login };
