import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logIn } from "../../redux/auth/operations";
import css from "../LoginForm/LoginForm.module.css";
import { Button, TextField } from "@mui/material";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("Log in is success!!!");
      })
      .catch(error => {
        toast.error(error);
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
      <Field
      as={TextField}
            id="email"
            label="Email"
            variant="standard"
            type="email"
            name="email"
            
          />
          <Field
          as={TextField}
            id="password"
            label="Password"
            variant="standard"
            type="password"
            name="password"
          
          />
        <Button variant="contained" type="submit">Log In</Button>
      </Form>
    </Formik>
  );
}