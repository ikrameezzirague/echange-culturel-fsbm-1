import React from "react";
import "./MyGrid.css";
import event1 from './../image-Events/event1.logo';
import event2 from './../image-Events/event2.logo';
import event3 from './../image-Events/event3.logo';
import event4 from './../image-Events/event4.logo';
import event5 from './../image-Events/event5.logo';
import event6 from './../image-Events/event6.logo';
import event7 from './../image-Events/event7.logo';
import event8 from './../image-Events/event8.logo';

const MyGrid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item small">
        <img src={event1} alt="placeholder" />
        <br/><br/><h><a href="plus">plus</a></h>
      </div>
      <div className="grid-item small">
        <img src={event2} alt=""/>
        <br/><br/><h><a href="plus">plus</a></h>
      </div>
      <div className="grid-item small">
        <img src={event3} alt="placeholder" />
        <br/><br/><h><a href="plus">plus</a></h>
      </div>
      <div className="grid-item small">
        <img src={event4} alt="placeholder" />
        <br/><br/><h><a href="plus">plus</a></h>
      </div>
      <div className="grid-item small">
        <img src={event5} alt="placeholder" />
        <br/><br/><h><a href="plus">plus</a></h>
      </div>
      <div className="grid-item small">
        <img src={event6} alt="placeholder" />
        <br/><br/><h><a href="plus">plus</a></h>
      </div>
      <div className="grid-item small">
        <img src={event7} alt="placeholder" />
        <br/><br/><h><a href="plus">plus</a></h>
      </div>
      <div className="grid-item small">
        <img src={event8} alt="placeholder" />
        <br/><br/><h><a href="plus">plus</a></h>
      </div>
    </div>
  );
};

export default MyGrid;
