import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css"
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Button } from "@mui/material";

export default function Navigation() {
const isLoggedIn = useSelector(selectIsLoggedIn)

const getButtonStyle = (isActive) => ({
  color: isActive ? 'blue' : 'inherit', 
  fontWeight: isActive ? 'bold' : 'normal',
});

  return (
    <nav className={css.nav}>
      <NavLink  to="/"  className={({ isActive }) => (isActive ? css.active : "")}>
      {({ isActive }) => (
          <Button style={getButtonStyle(isActive)}>Home</Button>
        )}
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={({ isActive }) => (isActive ? css.active : "")}>
         {({ isActive }) => (
          <Button style={getButtonStyle(isActive)}>Contacts</Button>
        )}
      </NavLink>
      )}
    </nav>
  );
}