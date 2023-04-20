import { useContext } from "react";
import "./Cart.css";
import CartList from "../components/CartList/CartList";

export default function Cart() {
  return (
    <div className="Cart"> 
    <img src="https://w7.pngwing.com/pngs/188/963/png-transparent-computer-icons-shopping-cart-cheat-angle-service-desktop-wallpaper.png" alt = "ikon" />
      <CartList/>
    </div>
  );
}