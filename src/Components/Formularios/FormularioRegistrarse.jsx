import InputUsuario from "../InputUsuario/InputUsuario"

const FormularioRegistrarse = () => {
  return (
    <>
      <h3>REGISTRARSE</h3>
     <InputUsuario/>
      <input type="text" placeholder="Email"></input>
      <input type="text" placeholder="Telefono"></input>
    </>
  );
};

export default FormularioRegistrarse;
