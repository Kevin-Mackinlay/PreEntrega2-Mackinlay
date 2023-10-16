import InputContraseña from "../InputContraseña/InputContraseña";
import InputUsuario from "../InputUsuario/InputUsuario"



const FormularioLogin = () => {
  return (
    <>
      <form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: " center", width: "300px" }}>
        <h3 style={{ color: "black" }}>LOGIN</h3>
        <InputUsuario />
        <InputContraseña />
        <input style={{marginTop:"5px"}}  type="submit" value="Submit" />
      </form>
    </>
  );
};

export default FormularioLogin;

