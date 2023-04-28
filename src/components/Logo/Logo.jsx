import "./Logo.css";
// import logo from "../../assets/vite.svg";
import { NavLink } from "react-router-dom";

 export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src ="https://st3.depositphotos.com/15317184/19473/v/600/depositphotos_194733590-stock-illustration-woman-bag-sketchy-logo-bags.jpg" alt = "Website logo" />
      </NavLink>
      
    </div>
  );
 }