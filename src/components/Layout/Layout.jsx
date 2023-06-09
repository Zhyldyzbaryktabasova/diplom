import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import "./Layout.css";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";
import Footer from "../Footer/Footer";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <div className="auth-wrap">
          <CartLink />
          <Auth />
        </div>
      </header>
      {/* <aside>
        <CategoryList />
      </aside> */}
      <main>
        <CategoryList />
        <div className="mainBox">{props.children}</div>
      </main>

      <Footer />
    </div>
  );
}
