import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <div>
      <h1 className={css.title}>Log in</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.input} />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.input} />
          </label>
          <button type="submit" className={css.button}>Log In</button>
        </Form>
      </Formik>
    </div>
  );
}