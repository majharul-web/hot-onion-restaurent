import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const BreakFast = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/majharul-web/hot-onion-restaurent/main/public/item.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const bItems = items.filter((item) => item.category === "BreakFast");

  return (
    <div className='container'>
      <div className='row'>
        {bItems.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default BreakFast;
