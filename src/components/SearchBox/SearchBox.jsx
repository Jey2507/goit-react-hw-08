import { useDispatch, useSelector } from "react-redux";
import css from "../SearchBox/SearchBox.module.css"
import { changeFilter } from "../../redux/filters/filtersSlice"; 
import { selectName } from "../../redux/contacts/selectors";
import Spiner from "../Spiner/Spiner";
import { selectError, selectLoading } from "../../redux/contacts/slice";
import Error from "../Error/Error";
import { TextField } from "@mui/material";


export default function SearchBox() {
    const value = useSelector(selectName)
    const dispatch = useDispatch()

    const handleFilter = (event) => {
        dispatch(changeFilter(event.target.value))
    }

    const loader = useSelector(selectLoading)
    const textError = useSelector(selectError)

    return (
        <div className={css.divSpiner}>
            <div className={css.container}>
                <TextField  label="Find contacts by name" variant="outlined" type="text" value={value}  onChange={handleFilter}  />
            </div>
            {loader && <Spiner />}
            {textError && <Error />}
        </div>
        
    )
}