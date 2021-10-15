import React from "react";
import { Tab, Tabs } from "react-bootstrap";

const AllItem = () => {
  return (
    <div className='container my-4'>
      <Tabs defaultActiveKey='breakFast' transition={false} id='noanim-tab-example' className='mb-3'>
        <Tab eventKey='breakFast' title='BreakFast'></Tab>
        <Tab eventKey='lunch' title='Lunch'></Tab>
        <Tab eventKey='dinner' title='Dinner'></Tab>
      </Tabs>
    </div>
  );
};

export default AllItem;
