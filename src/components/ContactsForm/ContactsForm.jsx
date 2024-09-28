
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useId } from "react";
import formCss from "./ContactsForm.module.css"
import { addContact } from "../../redux/contacts/operation";


export default function ContactsForm() {

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    number: Yup.string()
      .matches(/^[0-9\-]+$/, "Must be a valid number!")
      .min(5, "Too Short!")
      .max(15, "Too Long!")
      .required("Required")
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: ""
  }

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)

  const handleSubmit = (values, { resetForm }) => {

    const { name, number } = values

    const isDuplicateNumber = contacts.some(contact => (contact.number === number));
    if (isDuplicateNumber) {
      alert(`Contact with number ${number} already exists!`)
      return;
    }
    const isDuplicateName = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isDuplicateName) {
      alert(`Contact with name "${name}" already exists!`);
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };


  return (

    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
      <Form className={formCss.form} >
        <div>
          <label
            className={formCss.formLabel}
            htmlFor={nameFieldId}>Name</label>
          <Field
            className={formCss.formText}
            type="text"
            name="name"
            placeholder="Name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={formCss.error}
            name="name"
            component="div"
          />
        </div>
        <div>
          <label
            className={formCss.formLabel}
            htmlFor={numberFieldId}>Number</label>
          <Field
            className={formCss.formText}
            type="text"
            name="number"
            placeholder="Number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={formCss.error}
            name="number"
            component="div"
          />
        </div>
        <button className={formCss.formButton} type="submit" >Add contact</button>
      </Form>
    </Formik >
  );
}