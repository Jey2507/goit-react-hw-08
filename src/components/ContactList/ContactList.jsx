import Contact from '../Contact/Contact';
import css from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from '../../redux/contacts/slice'; 
import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/selectors';


export default function ContactList() {
    const contactFilter = useSelector(selectFilteredContacts)

    return (
        <>
            <h2 className={css.title}>Your contacts</h2>
            <ul className={css.list}>
                {contactFilter.map(contact => (
                    <Contact key={contact.id} contacts={contact} />
                ))}
            </ul>
        </>
    );
}
