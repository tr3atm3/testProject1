import React, { useState } from "react";
import FormComp from "./component/Form/FormComp";
import "./App.css";
import AddFormComp from "./component/UserInfo/AddFormComp";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(false);
  };

  const addEntries = (entry) => {
    setEntries((prev) => [entry, ...prev]);
  };
  return (
    <div className="upper-div">
      <FormComp
        addEntries={addEntries}
        modal={modal}
        handleModal={handleModal}
        setModal={setModal}
      />
      {!modal && <AddFormComp details={entries} />}
    </div>
  );
};

export default App;
