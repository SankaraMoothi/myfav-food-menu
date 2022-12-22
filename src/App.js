import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Add";
import Home from "./Home";
import items from "./data";

function App() {
  const [menu, setmenu] = useState(items);
  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                menu={menu}
                setmenu={setmenu}
                allCategories={allCategories}
              />
            }
          />
          <Route path="/add" element={<Add setmenu={setmenu} menu={menu} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
