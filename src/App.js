import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import { Section } from "./components/Section/Section";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer autoClose={2000} theme="dark" />
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default App;
