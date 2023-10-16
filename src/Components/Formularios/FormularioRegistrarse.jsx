import InputUsuario from "../InputUsuario/InputUsuario"

const FormularioRegistrarse = () => {
  return (
    <>
      <form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: " center", width: "300px" }}>
        <h3>REGISTRARSE</h3>
        <InputUsuario />
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Telefono"></input>
        <input style={{ marginTop: "5px" }} type="submit" value="Submit" />
      </form>
    </>
  );
};

export default FormularioRegistrarse;
