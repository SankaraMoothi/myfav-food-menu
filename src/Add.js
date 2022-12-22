import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add({ menu, setmenu }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="sections">
      <div className="container">
        <h3>Add An Menu Item</h3>
        <div className="underline"></div>
        <form>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Name Of The Menu..."
          ></input>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="breakfast,lunch,shakes,drinks"
          ></input>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price Of the Item..."
          ></input>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="Image Of The Item..."
          ></input>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description Of The Item..."
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              let newmenu = {
                id: +`${menu.length + 1}`,
                title: title,
                category: category,
                price: price,
                img: img,
                desc: description,
              };

              setmenu([...menu, newmenu]);

              navigate("/");
            }}
          >
            Add Menu item
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
