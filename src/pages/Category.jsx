import {useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";

export default function Category() {
  const { params } = useMatch("/category/:path");
  const { categories } = useContext(AppContext);
  const category = categories.find((category) =>params.path === category.path);
  return (
    <div className="Gategory">
      <h1>{category.name}</h1>
      <div className="ProductList">
        <div className="Product">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_TOgpIg_YlY7CYKCMfifYq8SXCjGkCs-R-Rd13HxsmA&s" alt="Hare-gull"/>
          <div>
            <a href="/product/hare-gull">Hare-gull</a>
            </div>
          <p>500 som</p>
          </div>
         </div>
      </div>
    
  );
}