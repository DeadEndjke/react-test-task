export type ContactItem = {
  id: string;
  name: string;
  email: string;
};

export interface ContactSliceState {
  items: ContactItem[];
}
