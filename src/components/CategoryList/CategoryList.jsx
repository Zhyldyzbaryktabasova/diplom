import { useEffect, useSate, useState } from "react";
import "./CategoryList.css";
import { categoryCollection } from "../../firebase";
import { getDocs } from "firebase/firestore";
import { NavLink } from "react-router-dom";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  //выполнить эту функцию только один раз
  useEffect(() => {
    //поличить категории из списка категории
    getDocs(categoryCollection).then((snapshot) => {
      //создать массив для категории
      const newCategories = [];

      //заполнить  массив данным  из списка категории
      snapshot.docs.forEach((doc) => { // doc =категория
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });
      //задать новый массив как состояние компонента
      setCategories(newCategories)
    });
  }, []);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
    </li>
  ));
  return (
    <div className="CategoryList">
      <ul>{output}</ul>
    </div>
  );
}
