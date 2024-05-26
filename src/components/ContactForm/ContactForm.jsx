import css from "../ContactForm/ContactForm.module.css"
import { Formik, Form, Field} from "formik"
import { useId } from "react";
import * as Yup from "yup"
import { addContact } from "../../redux/contacts/operation"; 
import { useDispatch } from "react-redux";
import { Fab, TextField } from "@mui/material";

import AddIcon from "@mui/icons-material/Add"

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().max(13, "Too Long!").required("Required"),
  });

const initialValues = {
    name: "",
    number: "",
}

export default function ContactForm() {
    const nameId = useId();
    const numberId = useId();
    const dispatch = useDispatch()

    const hadleSubmit = (values, actions) => {
        dispatch(addContact(values))
        actions.resetForm();
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={hadleSubmit} validationSchema={FeedbackSchema}>
                <Form className={css.form}>
                    <div className={css.container}>
                    <Field name="name">
                            {({ field, form }) => (
                                <TextField 
                                    {...field} 
                                    label="Name" 
                                    variant="filled" 
                                    id={nameId} 
                                    error={form.touched.name && form.errors.name} // Показуємо помилку, якщо поле потрібно і містить помилку
                                    helperText={form.touched.name && form.errors.name} // Текст допомоги для показу помилки
                                />
                            )}
                        </Field>

                    </div>
                    
                    <div className={css.container}>
                    <Field name="number">
                            {({ field, form }) => (
                                <TextField 
                                    {...field} 
                                    label="Number" 
                                    variant="filled" 
                                    id={numberId} 
                                    error={form.touched.number && form.errors.number} 
                                    helperText={form.touched.number && form.errors.number} 
                                />
                            )}
                        </Field>
                    </div>

                    <Fab color="primary" aria-label="add" type="submit" >
                        <AddIcon />
                    </Fab>
                </Form>
            </Formik>
        </>
    )
}