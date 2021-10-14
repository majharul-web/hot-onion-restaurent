import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>

            <h1 className='banner-title'>Best food waiting for your belly</h1>

            <form action="" className='banner-form'>
                <input className='search-box' type="text" placeholder='Search food items' />
                <input type='submit' value='search' className='search-button'></input>
            </form>

        </div>
    );
};

export default Banner;