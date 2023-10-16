import React, { useState } from "react";
import FormularioLogin from "../../Components/Formularios/FormularioLogin";
import FormularioRegistrarse from "../../Components/Formularios/FormularioRegistrarse";

const Home = () => {
  const [tipoFormulario, setTipoFormulario] = useState("login")
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <h2 style={{ color: "black" }}>Home</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: " center", width: "300px" }}>
        <input type="button" onClick={() => setTipoFormulario("Registro")} value={"Registrarme"} />
      </div>
      <div>{tipoFormulario === "login" ? <FormularioLogin /> : <FormularioRegistrarse />}</div>
    </>
  );
};

export default Home;
