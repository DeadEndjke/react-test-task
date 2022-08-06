import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "./../../store/slices/contactSlice/slice";
import { ContactList } from "./ContactList";
import s from "./User.module.scss";

type Props = {};

export const User = (props: Props) => {
  const dispatch = useDispatch();
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState({
    id: new Date().toISOString(),
    name: name,
    email: email,
  });

  useEffect(() => {
    setIsInitialRender(false);
    setContact({ id: new Date().toISOString(), name: name, email: email });
  }, [contact, isInitialRender]);

  const handleContact = () => {
    dispatch(addContact(contact));
  };

  return (
    <div className={s.user}>
      <h1>добавьте новый контакт </h1>
      <input
        placeholder="enter name"
        type="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder="enter email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleContact}>add contact</button>
      <ContactList />
    </div>
  );
};
