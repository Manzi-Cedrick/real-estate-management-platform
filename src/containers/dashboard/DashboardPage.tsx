import { useEffect,useState } from "react";
import Sidebardash from "components/SideBarDash/Sidebar";
// import Dash from "components/SideBarDash/Dash";

function DashboardPage() {
  
  return (
    <div className="bg-[#1e40af] flex">
      <Sidebardash />
      {/* <Dash /> */}
    </div>
  );
}

export default DashboardPage;
