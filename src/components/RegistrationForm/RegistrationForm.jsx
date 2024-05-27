import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import css from "../RegistrationForm/RegistrationForm.module.css"
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
    .unwrap()
      .then(() => {
        toast.success("Registration is success!!!");
      })
      .catch(error => {
        toast.error(error);
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
          <Field as={TextField} id="name" label="Username" variant="standard" type="text" name="name" />
          <Field as={TextField} id="email" label="Email" variant="standard" type="email" name="email" />
          <Field as={TextField} id="password" label="Password" variant="standard" type="password" name="password" />
        <Button variant="contained" type="submit">Register</Button>
      </Form>
    </Formik>
  );
}