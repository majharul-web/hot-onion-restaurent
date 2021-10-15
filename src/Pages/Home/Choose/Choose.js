import React from "react";
import "./Choose.css";
import choose101 from "../../../images/Image/choose1.png";
import choose102 from "../../../images/Image/choose2.png";
import choose103 from "../../../images/Image/choose3.png";
import icon1 from "../../../images/ICON/firstShip.png";

const Choose = () => {
  return (
    <div className='container my-4'>
      <div>
        <h3>Why You Choose Us</h3>
        <p className='mt-4'>
          Barton waited twenty always repair in within do, An delighted offending <br /> Curiosity my
          dashwoods at ,Boy prosperous increasing surrounded
        </p>

        <div className='chose-container my-5'>
          {/*card 4 */}
          <div className='chose-card'>
            <div className=''>
              <img src={choose101} alt='' className=' img-fluid rounded-3' />
            </div>
            <div className='text-start'>
              <div className='row'>
                <div className='col-md-3 '>
                  <span className='chose-icon mt-4 ms-4'>
                    <i class='fas fa-shipping-fast'></i>
                  </span>
                </div>
                <div className='col-md-9 py-4'>
                  <h4>Fast Delivery</h4>
                  <p className='mt-3 me-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing Quibusdam perspiciatis sunt debitis.
                  </p>
                  <a href='/' className='text-decoration-none fw-bold fs-6'>
                    See More
                    <span className='mx-3'>
                      <i className='fas fa-arrow-alt-circle-right text-success fs-5'></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*card 2*/}
          <div className='chose-card'>
            <div className=''>
              <img src={choose102} alt='' className=' img-fluid rounded-3' />
            </div>
            <div className='text-start'>
              <div className='row'>
                <div className='col-md-3'>
                  <span className='chose-icon mt-4 ms-4'>
                    <i className='far fa-bell'></i>
                  </span>
                </div>
                <div className='col-md-9 py-4'>
                  <h4>A good Auto responder</h4>
                  <p className='mt-3 me-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing Quibusdam perspiciatis sunt debitis.
                  </p>
                  <a href='/' className='text-decoration-none fw-bold fs-6'>
                    See More
                    <span className='mx-3'>
                      <i className='fas fa-arrow-alt-circle-right text-success fs-5'></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*card 3 */}
          <div className='chose-card'>
            <div className=''>
              <img src={choose103} alt='' className=' img-fluid rounded-3' />
            </div>
            <div className='text-start'>
              <div className='row'>
                <div className='col-md-3'>
                  <span className='chose-icon mt-4 ms-4'>
                    <i class='fas fa-caravan'></i>
                  </span>
                </div>
                <div className='col-md-9 py-4'>
                  <h4>Home Delivery</h4>
                  <p className='mt-3 me-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing Quibusdam perspiciatis sunt debitis.
                  </p>
                  <a href='/' className='text-decoration-none fw-bold fs-6'>
                    See More
                    <span className='mx-3'>
                      <i className='fas fa-arrow-alt-circle-right text-success fs-5'></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
