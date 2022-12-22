import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { useNavigate } from "react-router-dom";

function Home({ menu, setmenu, allCategories }) {
  const [categories, setcategories] = useState(allCategories);
  const [idems, seIdems] = useState(menu);
  const navigate = useNavigate();
  const filterItems = (category) => {
    if (category === "all") {
      setmenu(idems);
      return;
    }
    const newMenus = idems.filter((item) => item.category === category);
    setmenu(newMenus);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>My Menu</h2>
          <button className="filter-btn" onClick={() => navigate("/add")}>
            Add
          </button>
        </div>
        <div className="underline"></div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default Home;
