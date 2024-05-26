import { NavLink } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css"
import { Button } from "@mui/material";

export default function AuthNav() {
  return (
    <div className={css.links}>
      <NavLink  to="/register">
      <Button variant="contained">Register</Button>
      </NavLink>
      <NavLink to="/login">
      <Button variant="contained">Log in</Button>
      </NavLink>
    </div>
  );
}