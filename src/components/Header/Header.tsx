import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxhooks";
import { useAuth } from "../../hooks/useAuth";
import { SvgSelector } from "../../Selector/SVGSelector";
import { removeUser } from "../../store/slices/userSlice";
import s from "./Header.module.scss";

interface Props {}
const Header = (props: Props) => {
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();
  return (
    <header className={s.header}>
      {isAuth ? (
        <div className={s.logo}>
          <NavLink to={"/user"}>
            <SvgSelector id="logo" />
            <span>myAccount</span>
          </NavLink>
          <NavLink to={"/"}>Home</NavLink>
          <button onClick={() => dispatch(removeUser())}>
            Log out from {email}
          </button>
        </div>
      ) : (
        <div className={s.logo}>
          <NavLink to={"/login"}>
            {" "}
            <SvgSelector id="logo" />
            <span>Войти</span>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
