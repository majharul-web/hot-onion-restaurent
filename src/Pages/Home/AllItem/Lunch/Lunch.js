import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const Lunch = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("./item.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const selectedItems = items.filter((item) => item.category === "Lunch");

  return (
    <div className='container'>
      <div className='row'>
        {selectedItems.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Lunch;
