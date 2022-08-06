import { ContactItem } from "./../store/slices/contactSlice/types";

export const getContactFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as ContactItem[],
  };
};
