import React from "react";
import { useAppSelector } from "../../hooks/reduxhooks";
import { ContactItem } from "./ContactItem";
import s from "./User.module.scss";

export const ContactList = () => {
  const contacts = useAppSelector((state) => state.contact.items);
  return (
    <ul className={s.table}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          email={contact.email}
        />
      ))}
    </ul>
  );
};
