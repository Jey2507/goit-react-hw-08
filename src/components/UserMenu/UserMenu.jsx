import { useDispatch, useSelector } from "react-redux"
import css from "../UserMenu/UserMenu.module.css"
import { selectUserName } from "../../redux/auth/selectors"
import { logOut } from "../../redux/auth/operations"
import { Button } from "@mui/material"

export default function UserMenu() {
const nameUser = useSelector(selectUserName)
const dispatch = useDispatch()

const handleLogOut = () => {
    dispatch(logOut())
}

    return (
        <div className={css.menu}>
            <p className={css.name}>Welcome, {nameUser.name}</p>
            <Button variant="outlined" color="error" type="button" onClick={handleLogOut}>
                Logout
            </Button>
        </div>
    )    
}