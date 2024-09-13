import { Formik, Form, Field, ErrorMessage } from 'formik'
import { nanoid } from 'nanoid'
import * as Yup from 'yup'
import { addContact } from '../../redux/contactsSlice'
import { useDispatch } from 'react-redux'
import css from './ContactForm.module.css'


const ContactForm = () => {
    const nameField = nanoid();
    const numberField = nanoid();
    const dispatch = useDispatch();

    const ContactsSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too long!").required("Required")
    });

    const handleSubmit = (values, actions) => {
        dispatch(addContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
        }));
        actions.resetForm();
    }

    return(
        <Formik
        initialValues={{
            id: '',
            name: '',
            number: '',
       }}
       onSubmit={handleSubmit}
       validationSchema={ContactsSchema}
       >
        <Form className={css.form}>
            <label className={css.name} htmlFor={nameField}>Name</label>
            <Field className={css.field} type="text" name="name" id={nameField}/>
            <ErrorMessage className={css.err} name='name' component='span'/>


            <label className={css.name} htmlFor={numberField}>Number</label>
            <Field className={css.field} type='text' name='number' id={numberField}/>
            <ErrorMessage className={css.err} name='name' component='span'/>
            <button type='submit' className={css.btn} >Add Contact</button>
        </Form>

        </Formik>
    )
}
export default ContactForm