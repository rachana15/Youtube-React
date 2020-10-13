import React from "react";
import "../Style/css/SidebarRow.css";

function SidebarRow({ selected, title, Icon }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h6 className="sidebarRow__title">{title}</h6>
    </div>
  );
}

export default SidebarRow;
