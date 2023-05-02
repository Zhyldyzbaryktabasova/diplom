import { useContext, useEffect, useState } from "react";
import "./CategoryList.css";
import { categoryCollection } from "../../firebase";
import { getDocs } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
    </li>
  ));
  return (
    <div className="CategoryList">
      <ul>{output}</ul>
      <AddCategory />
    </div>
  );
}
