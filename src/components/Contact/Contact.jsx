import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css"

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };


  return (
    <ul>
      <li className={css.contactItem}>
        <div className={css.contactItemWrap}>
          <p className={css.contactText}>
            <svg className={css.nameSvg} width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a7 7 0 110 14 7 7 0 010-14zm0 16c5.186 0 9 2.672 9 6v1H3v-1c0-3.328 3.814-6 9-6z"></path>
            </svg>
            {contact.name}
          </p>
          <p className={css.contactText}>
            <svg className={css.phoneSvg} width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.9-.27c.98.22 2.02.34 3.09.34a1 1 0 011 1v3.42a1 1 0 01-1 1C10.29 21 3 13.71 3 4.99a1 1 0 011-1h3.42a1 1 0 011 1c0 1.07.12 2.11.34 3.09a1 1 0 01-.27.9l-2.2 2.2z"></path>
            </svg>
            {contact.number}
          </p>
        </div>
        <button className={css.button} onClick={handleDelete}>Delete</button>
      </li >
    </ul>
  );

}