import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import s from "./ContactList.module.css";
import {
  removeContact,
  fetchContacts,
} from "../../redux/contacts/contactsOperations";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id} className={s.item}>
          <p>
            {name}: {phone}
          </p>
          <button
            type="button"
            className={s.button}
            onClick={() => {
              if (dispatch(removeContact(Number(id)))) {
                toast.success(`${name} was successfully deleted`);
              }
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
