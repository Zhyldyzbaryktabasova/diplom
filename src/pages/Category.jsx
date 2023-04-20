import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import ProductsList from "../components/ProductList/ProductList";

export default function Category() {
  const { params } = useMatch("/categories/:path");
  const { categories } = useContext(AppContext);
  const category = categories.find((category) => params.path === category.path);

  return (
    <div className="Gategory">
      <h1>{category ? category.name : "Loading..."}</h1>

      <ProductsList category={category} />
    </div>
  );
}
