import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import "./Layout.css";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <div className="head">
          <Logo />
          <Nav />
          <NavToggle callback={toggleDrawer} />
          <Drawer open={drawerOpen} toggle={toggleDrawer} />
          <div>
            <CartLink />
            <Auth />
          </div>
        </div>
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>

      <footer>
        <div className="Footer_link">
          <div className="footer_contact">
            <h3>Bishkek city</h3>
            <p>Lenin street 345/8</p>
            <h5>Opening</h5>
            <p>Monday-Saturday</p>
            <p>
              <strong>o9:00</strong>A.M-<strong>8:00</strong>P.M
            </p>
            <p>Sunday</p>
            <p>
              <strong>10:00</strong>A.M-<strong>8:00</strong>P.M
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
