import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../redux/contacts/contactsActions";
import { Oval } from "react-loader-spinner";

export function Filter() {
  const value = useSelector((state) => state.contacts.filter);
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const dispatch = useDispatch();
  return (
    <>
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
      {isLoading && <Oval heigth="40" width="40" color="blue" />}
    </>
  );
}
