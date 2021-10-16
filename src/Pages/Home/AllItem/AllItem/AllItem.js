import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import BreakFast from "../BreakFast/BreakFast";
import Dinner from "../Dinner/Dinner";
import Lunch from "../Lunch/Lunch";

const AllItem = () => {
  return (
    <div id='allFoods' className='container my-4'>
      <Tabs defaultActiveKey='breakFast' transition={false} id='noanim-tab-example' className='mb-3'>
        <Tab eventKey='breakFast' title='BreakFast'>
          <BreakFast></BreakFast>
        </Tab>
        <Tab eventKey='lunch' title='Lunch'>
          <Lunch></Lunch>
        </Tab>
        <Tab eventKey='dinner' title='Dinner'>
          <Dinner></Dinner>
        </Tab>
      </Tabs>
    </div>
  );
};

export default AllItem;
