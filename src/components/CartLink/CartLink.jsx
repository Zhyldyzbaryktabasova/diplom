import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartLink.css";
import Cart from "../../pages/Cart";


export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <Link to="/cart">
        <img src="https://w7.pngwing.com/pngs/188/963/png-transparent-computer-icons-shopping-cart-cheat-angle-service-desktop-wallpaper.png" alt = "Cart-pht"  />({total})
            </Link>
        
    </div>
  );
}
