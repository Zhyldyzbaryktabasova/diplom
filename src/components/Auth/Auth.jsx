import { useContext } from "react";
import "./Auth.css";
import { AppContext } from "../../App";
import { logIn, logOut } from "../../firebase";
import { NavLink } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  // показывается гостю
  let output = (
    <span>
      Guest <button onClick={logIn}>Sign in</button>
    </span>
  );
  // показывается пользователю
  if (user) {
    output = (
      <span>
        <NavLink to = "/orders"> {user.displayName} </NavLink>
        <button onClick={logOut}>Sign out</button>
      </span>
    );
  }

  return <div className="Auth">{output}</div>;
}

