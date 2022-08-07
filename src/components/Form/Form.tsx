import { useState } from "react";

import s from "./Form.module.scss";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";

interface Props {}
const Form = (props: Props) => {
  const [logReg, setLogReg] = useState("log");
  const [active, setActive] = useState(0);

  function setLogin() {
    setLogReg("reg");
    setActive(1);
  }
  function setRegistration() {
    setLogReg("log");
    setActive(0);
  }

  return (
    <div className={s.form}>
      <div className={s.topbuttons}>
        <button
          onClick={setRegistration}
          className={active === 0 ? s.active : s.inactive}
        >
          login
        </button>
        <button
          onClick={setLogin}
          className={active === 1 ? s.active : s.inactive}
        >
          registration
        </button>
      </div>
      {logReg === "log" ? (
        <Login setLogin={setLogin} />
      ) : (
        <Registration setRegistration={setRegistration} />
      )}
    </div>
  );
};

export default Form;
