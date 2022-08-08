import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={s.notfound}>
      <div className={s.oops}>Oops</div>
      <div className={s.paragraph}>The Page you're looking for isn't here.</div>
      <NavLink to={"/"}>
        <button>Back</button>
      </NavLink>
    </div>
  );
};
