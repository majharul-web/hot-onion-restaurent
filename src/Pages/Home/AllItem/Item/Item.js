import React from "react";
import './Item.css'


const Item = (props) => {

  const { title, description, price, image } = props?.item;
  return (
    <div className='col-md-4 col-sm-6 my-3'>
      <div className='py-2 item-shadow'>
        <div className='text-center my-4'>
          <img src={image} alt='' className='img-fluid w-50' />
        </div>
        <div className='text-center my-3'>
          <h5>{title}</h5>
          <p>{description}</p>
          <h3>${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Item;
