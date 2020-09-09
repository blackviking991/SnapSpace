import React from "react";

const Title = ({ handlelogout }) => {
  return (
    <div className="title">
      <h1>SnapSpace </h1>
      <button onClick={handlelogout}> LogOut </button>
      <h2>Welcome to your SnapSpace!!!</h2>
      <p>Click on the add button below to upload your pictures</p>
    </div>
  );
};

export default Title;
