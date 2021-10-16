import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const SelectedItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/majharul-web/hot-onion-restaurent/main/public/item.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const { itemId } = useParams();

  const sItems = items.find((item) => item.id === parseInt(itemId));

  return (
    <div className='container'>
      {/* selected items */}
      <div className='row'>
        <div className='col-md-6 d-flex justify-content-center align-items-center'>
          <div>
            <h3>{sItems?.title}</h3>
            <p>{sItems?.description}</p>
            <h3>${sItems?.price}</h3>
          <Link to='/cart'>
            <button className='btn btn-danger'>
              <i className='fas fa-shopping-cart'></i> Add
            </button>
            </Link>
          </div>
        </div>
        <div className='col-md-6'>
          <div>
            <img src={sItems?.image} className='img-fluid w-75' alt='' />
          </div>
        </div>
      </div>

      {/* back button */}
      <Link as={HashLink} to='/home#allFoods'>
        <button className='btn btn-primary'>All Foods</button>
      </Link>
    </div>
  );
};

export default SelectedItem;
