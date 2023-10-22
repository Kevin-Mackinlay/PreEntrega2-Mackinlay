import React from "react";
import logo from "../Images/logo.png";

function Images() {
  return (
    <div>
      <img src={logo} style={styles.Images}  alt=""></img>
    </div>
  );
}

export default Images;

const styles = {
  Images: {
    width: "150px",
    height: "150px",
  },
};
