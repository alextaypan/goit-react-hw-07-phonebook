import axios from "axios";

axios.defaults.baseURL = "https://6212a247f43692c9c6ef9ff1.mockapi.io";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}

export async function removeContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
