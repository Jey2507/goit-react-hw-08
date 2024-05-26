import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import css from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operation";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteSweepRounded"

export default function Contact({contacts:{name, number, id}}) {
    const dispatch = useDispatch();

    return (
        <>
            <li className={css.item} >
                <div className={css.contact}>
                    <h3 className={css.name}><RiContactsFill /> {name}</h3>
                    <p className={css.descr}><FaPhoneAlt /> {number}</p>
                </div>    
                <IconButton color="error" aria-label="delete" onClick={() => dispatch(deleteContact(id))}>
                    <DeleteIcon />
                </IconButton>
            </li>
        </>
    );
}