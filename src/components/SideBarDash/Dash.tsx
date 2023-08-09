import React from "react";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";
import DataStats from "./DataStats";
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";
import TableThree from "./TableThree";
import Calendar from "./Calendar";
import Breadcrumb from "./Breadcrumb";
import ChatCard from "./ChatCard";
import ChartOne from "./ChartOne";
import ChartTwo from "./ChartTwo";
import ChartThree from "./ChartThree";
import ChartFour from "./ChartFour";

function Dash() {
  return (
    <div className="w-[80%] min-h-[150vh] bg-[#f1f5f9] mt-12 py-2 px-10 rounded-[40px]">
      <div className="h-[10vh] flex items-center justify-between border-b-3">
        <div>
          <Breadcrumb pageName="application" />
        </div>
        <div></div>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartTwo />
        <ChartOne />
        <ChartThree />
        <ChartFour />
      </div>
      <div className="flex">
        <CardOne />
        <CardTwo />
      </div>
      <div className="flex my-3">
        <CardThree />
        <CardFour />
      </div>
      <DataStats />
      <TableOne />
      <div className="flex">
        <TableTwo />
        <TableThree />
      </div>
      <div className="">
        <Calendar />
        <ChatCard />
      </div>
    </div>
  );
}

export default Dash;
