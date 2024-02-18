import React from "react";
import "./UserInfoComp.css";
const UserInfoComp = (props) => {
  return (
    <li>
      {props.name} ({props.age} years old)
    </li>
  );
};

export default UserInfoComp;
