import { useSelector } from "react-redux"
import { selectError } from "../../redux/contacts/slice"
import css from "../Error/Error.module.css"

export default function Error() {
    const textError = useSelector(selectError)

    return (
        <p className={css.error}>{textError}</p>
    )
}