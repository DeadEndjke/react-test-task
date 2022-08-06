import React from "react";
import { useAppDispatch } from "../../hooks/reduxhooks";
import { removeContact } from "./../../store/slices/contactSlice/slice";
import s from "./User.module.scss";

interface ContactItemProps {
  id: string;
  name: string;
  email: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  id,
  name,
  email,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className={s.item}>
      <div className={s.titleandbtn}>
        {" "}
        <div className={s.title}>
          Name : &nbsp;<span>{name}</span> - Email :&nbsp;<span>{email}</span>
        </div>
        <button onClick={() => dispatch(removeContact(id))}>x</button>
      </div>
    </div>
  );
};
