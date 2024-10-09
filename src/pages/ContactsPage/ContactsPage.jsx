import ContactList from "../../components/ContactList/ContactList"
import ContactsForm from "../../components/ContactsForm/ContactsForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operation";

export default function ContactsPage() {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactsForm />
      <SearchBox />
      <div>{loading && "Request in progress..."}</div>
      <ContactList />


    </div>
  )
}