import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

const FullContent = () => {
  return (
    
      <div className="flex flex-row">
        <div className="w-1/3">
          <Sidebar />
        </div>
        <div className="w-2/3">
          <Main />
        </div>
      </div>
  );
};

export default FullContent;
