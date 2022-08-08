import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "./../../store/slices/contactSlice/slice";
import { ContactList } from "./ContactList";
import s from "./User.module.scss";

type Props = {};

export const User = (props: Props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isBlurEmail, setIsBlurEmail] = useState(false);

  const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
    setIsBlur(false);
  };

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    setIsBlur(true);
    if (name.match(/^[a-z][a-z\s]*$/i)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    console.log(event);
  };

  const focusHandlerEmail = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocusEmail(true);
    setIsBlurEmail(false);
  };
  const [isValidEmail, setIsValidEmail] = useState(false);

  const blurHandlerEmail = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocusEmail(false);
    setIsBlurEmail(true);

    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const handleContact = () => {
    if (isValid === true && isValidEmail === true) {
      dispatch(addContact({ id: new Date().toISOString(), name, email }));
      setName("");
      setEmail("");

      setIsValid(false);
      setIsValidEmail(false);
      setIsBlur(false);
      setIsBlurEmail(false);
      setIsFocus(false);
      setIsFocusEmail(false);
    }
  };
  useEffect(() => console.log(isValid, isValidEmail));
  return (
    <div className={s.user}>
      <h1>добавьте новый контакт </h1>
      <div className={s.form}>
        <input
          placeholder="enter name"
          type="name"
          onFocus={focusHandler}
          onBlur={blurHandler}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {isFocus && (
          <span className="hint">Only letters and spaces are acceptable</span>
        )}
        {isBlur && !isValid && (
          <p style={{ color: "red" }}>The name you entered is not valid</p>
        )}
        {isBlur && isValid && (
          <p style={{ color: "green" }}>The name you entered looks good</p>
        )}
        <input
          id="email"
          placeholder="enter email"
          type="email"
          onFocus={focusHandlerEmail}
          onBlur={blurHandlerEmail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isFocusEmail && (
          <span className="hint">Only letters and spaces are acceptable</span>
        )}
        {isBlurEmail && !isValidEmail && (
          <p style={{ color: "red" }}>The email you entered is not valid</p>
        )}
        {isBlurEmail && isValidEmail && (
          <p style={{ color: "green" }}>The email you entered looks good</p>
        )}
        <button className={s.submit} onClick={handleContact}>
          add contact
        </button>
      </div>

      <ContactList />
    </div>
  );
};
