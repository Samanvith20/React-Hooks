import React, { useState } from "react";
import "./index.css"

const GreetUser = () => {
  const [name, setName] = useState("");

  const onChangeName = (event) => setName(event.target.value);

  return (
    <div className="MainContainer">
      <input
        className="NameInput"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={onChangeName}
      />
      <div className="MsgContent">
        Hello <span className="NameText">{name}</span>
      </div>
    </div>
  );
};

export default GreetUser;
