import React from "react";
import "./AddFormComp.css";
import UserInfoComp from "./UserInfoComp";
const AddFormComp = (props) => {
  return (
    <div className={`user-div ${props.details.length === 0 ? "invalid" : ""}`}>
      <ul>
        {props.details.map((detail) => (
          <UserInfoComp
            key={detail.id}
            name={detail.username}
            age={detail.age}
          />
        ))}
      </ul>
    </div>
  );
};

export default AddFormComp;
