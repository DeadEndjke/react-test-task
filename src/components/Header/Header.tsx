import { NavLink } from "react-router-dom";
import { SvgSelector } from "../../Selector/SVGSelector";
import s from "./Header.module.scss";

interface Props {
  header: number;
}
const Header = ({ header }: Props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <NavLink to={"/login"}>
          {" "}
          <SvgSelector id="logo" />
          {header}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
