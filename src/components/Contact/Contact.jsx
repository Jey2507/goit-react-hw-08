import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import css from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operation";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteSweepRounded"
import toast from "react-hot-toast";

export default function Contact({contacts:{name, number, id}}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id))
        .unwrap()
        .then(() => {
            toast.success("Delete is success!!!");
        })
        .catch(error => {
            toast.error(error);
        });
        }
      

    return (
        <>
            <li className={css.item} >
                <div className={css.contact}>
                    <h3 className={css.name}><RiContactsFill /> {name}</h3>
                    <p className={css.descr}><FaPhoneAlt /> {number}</p>
                </div>    
                <IconButton color="error" aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </li>
        </>
    );
}