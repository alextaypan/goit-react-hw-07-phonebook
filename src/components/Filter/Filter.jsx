import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../redux/contacts/contactsActions";

export function Filter() {
  const value = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        className={s.input}
        onChange={(e) => dispatch(filterContacts(e))}
      />
    </label>
  );
}
