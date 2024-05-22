import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import css from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({contacts:{name, number, id}}) {
    const dispatch = useDispatch();

    return (
        <>
            <li className={css.item} >
                <div className={css.contact}>
                    <h3 className={css.name}><RiContactsFill /> {name}</h3>
                    <p className={css.descr}><FaPhoneAlt /> {number}</p>
                </div>    
                <button className={css.button} onClick={() => dispatch(deleteContact(id))}>Delete</button>
            </li>
        </>
    );
}