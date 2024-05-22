import { useDispatch, useSelector } from "react-redux";
import css from "../SearchBox/SearchBox.module.css"
import { useId } from "react"
import { changeFilter } from "../../redux/filtersSlice";
import { selectName } from "../../redux/selectors";
import Spiner from "../Spiner/Spiner";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import Error from "../Error/Error";


export default function SearchBox() {
    const value = useSelector(selectName)
    const dispatch = useDispatch()
    const searchId = useId();

    const handleFilter = (event) => {
        dispatch(changeFilter(event.target.value))
    }

    const loader = useSelector(selectLoading)
    const textError = useSelector(selectError)

    return (
        <div className={css.divSpiner}>
            <div className={css.container}>
                <label className={css.label} htmlFor={searchId}>Find contacts by name</label>
                <input value={value} onChange={handleFilter} className={css.input} type="text" id={searchId}/>
            </div>
            {loader && <Spiner />}
            {textError && <Error />}
        </div>
        
    )
}