import { useSelector } from "react-redux";
import { selectFilteredContacts, selectLoading, selectError } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"



export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError)

  if (loading) {
    return <p>Loading contacts...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <ul className={css.list}>
        {contacts.length > 0 ? (contacts.map(contact => (
          <Contact key={contact.id} {...contact} />
        ))
        ) : (
          <p>
            No contacts found
          </p>
        )}
      </ul>
    </div>
  );
}