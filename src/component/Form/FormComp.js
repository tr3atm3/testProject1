import React, { useState } from "react";
import "./FormComp.css";
import Modal from "../ModalWindow/Modal";
const FormComp = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changeAge = (e) => {
    setAge(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (username === "" || age <= 0) {
      props.setModal(true);
      return;
    }
    const obj = {
      id: Math.random(),
      username: username,
      age: age,
    };
    props.addEntries(obj);
    setUsername("");
    setAge("");
  };

  return (
    <div className="form-comp">
      {props.modal && <Modal handleModal={props.handleModal} />}
      <form onSubmit={submitHandler}>
        <div className="username">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            min="0"
            value={username}
            onChange={changeUsername}
          ></input>
        </div>
        <div className="age">
          <label for="age">Age(years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={changeAge}
          ></input>
        </div>
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default FormComp;
