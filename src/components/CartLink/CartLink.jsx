import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartLink.css";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <Link to="/cart">
        <a href="/cart">
          <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="Cart-pht"/>
            {total}
            </a>
        
      </Link>
    </div>
  );
}
