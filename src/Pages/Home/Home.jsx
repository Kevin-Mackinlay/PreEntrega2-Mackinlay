import React from "react";
import FormularioLogin from "../../Components/Formularios/FormularioLogin";


const Home = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <h2 style={{ color: "blue" }}>Home</h2>
      </div>
      <div>
        <FormularioLogin />
      </div>
    </>
  );
};

export default Home;
