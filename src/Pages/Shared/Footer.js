import React from "react";
import "./Footer.css";
import footerLogo from "../../images/logo.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container pt-5'>
                {/* footer top */}
                <div className='row '>
                    <div className=' col-md-7 '>
                        <div className=''>
                            <img src={footerLogo} className='w-25' alt='Red Onion' />
                        </div>
                    </div>
                    <div className='col-md-5 '>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div>
                                    <a href='/' className='text-decoration-none text-light'>
                                        About online food
                                    </a>
                                    <br />
                                    <a href='/' className='text-light text-decoration-none'>
                                        Read our blog
                                    </a>
                                    <br />
                                    <a href='/' className='text-decoration-none text-light'>
                                        Sing up to deliver
                                    </a>
                                    <br />
                                    <a href='/' className='text-decoration-none text-light'>
                                        Add your restaurant
                                    </a>
                                </div>
                            </div>
                            <div className='col-md-6 '>
                                <div className=''>
                                    <a href='/' className='text-decoration-none text-light'>
                                        Get Helps
                                    </a>
                                    <br />
                                    <a href='/' className='text-light text-decoration-none'>
                                        Read FAQs
                                    </a>
                                    <br />
                                    <a href='/' className='text-decoration-none text-light'>
                                        See all cities
                                    </a>
                                    <br />
                                    <a href='/' className='text-decoration-none text-light'>
                                        Restaurants near me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer bottom */}
                <div className='row py-4'>
                    <div className='col-md-7'>
                        <div className=''>
                            <code className='text-light'>Copyright &copy; 2021 Online Food</code>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='text-end text-light'>
                            <a href='/' className='text-decoration-none text-light mx-4'>
                                Privacy
                            </a>
                            <a href='/' className='text-decoration-none text-light mx-4'>
                                Terms & condition
                            </a>
                            <a href='/' className='text-decoration-none text-light mx-4'>
                                Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
