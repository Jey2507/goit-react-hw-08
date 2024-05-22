import css from "../ContactForm/ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useId } from "react";
import * as Yup from "yup"
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";



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
                        <label className={css.label} htmlFor={nameId}>Name</label>
                        <Field className={css.input} name="name" id={nameId}/>
                        <ErrorMessage className={css.error} name="name" component="span"/>
                    </div>
                    
                    <div className={css.container}>
                        <label className={css.label} htmlFor={numberId}>Number</label>
                        <Field className={css.input} name="number" id={numberId}/>
                        <ErrorMessage className={css.error} name="number" component="span"/>
                    </div>

                    <button className={css.button} type="submit">Add</button>
                </Form>
            </Formik>
        </>
    )
}