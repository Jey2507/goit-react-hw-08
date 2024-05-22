import Contact from '../Contact/Contact';
import css from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/selectors';


export default function ContactList() {
    
    const contactFilter = useSelector(selectFilteredContacts)

    return (
        <>
            <ul className={css.list}>
                {contactFilter.map(contact => (
                    <Contact key={contact.id} contacts={contact} />
                ))}
            </ul>
        </>
    );
}
