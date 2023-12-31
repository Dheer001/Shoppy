import React from "react";

import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  Inject,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{dataSource:scheduleData}}
        selectedDate={new Date(2021,0,10)}  
      >
  

        <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;


//Agenda view
// selectedDate is used here to show the data according to scheduleData arr
// if we don't use selectedDate it wont show the data because of current date