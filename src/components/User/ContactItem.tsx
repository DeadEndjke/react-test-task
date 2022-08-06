import React from "react";
import { useAppDispatch } from "../../hooks/reduxhooks";
import { removeContact } from "./../../store/slices/contactSlice/slice";

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
    <div>
      Name:<span>{name}</span> - Email:<span>{email}</span>
      <button onClick={() => dispatch(removeContact(id))}>&nbsp;x</button>
    </div>
  );
};
