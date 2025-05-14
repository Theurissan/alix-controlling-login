// Importamos React y useState desde la librería principal
import React, { useState } from "react";

// Importamos la hoja de estilos CSS
import "./App.css";

// Importamos el componente Dashboard
import Dashboard from "./Dashboard";

// Componente funcional principal de la aplicación
function App() {
  // Definimos los estados para el usuario, contraseña, mensaje y estado de login
  const [usuario, setUsuario] = useState(""); // Estado para almacenar el nombre de usuario
  const [contrasena, setContrasena] = useState(""); // Estado para almacenar la contraseña
  const [mensaje, setMensaje] = useState(""); // Estado para almacenar el mensaje de error
  const [logueado, setLogueado] = useState(false); // Estado para manejar el login (true o false)

  // Función para manejar el envío del formulario de login
  const manejarEnvio = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
    // Comprobamos si las credenciales son correctas
    if (usuario === "admin" && contrasena === "1234") {
      setLogueado(true); // Si las credenciales son correctas, cambiamos el estado de logueo a verdadero
    } else {
      setMensaje("Credenciales incorrectas"); // Si son incorrectas, mostramos un mensaje de error
    }
  };

  // Función para cerrar sesión
  const cerrarSesion = () => {
    setLogueado(false); // Cambiamos el estado de logueo a falso
    setUsuario(""); // Limpiamos el campo de usuario
    setContrasena(""); // Limpiamos el campo de contraseña
    setMensaje(""); // Limpiamos cualquier mensaje de error
  };

  // Si el usuario está logueado, mostramos el componente Dashboard
  if (logueado) {
    return <Dashboard usuario={usuario} cerrarSesion={cerrarSesion} />;
  }

  // Si el usuario no está logueado, mostramos el formulario de login
  return (
    <div className="login-container">
      {/* Título principal de la aplicación */}
      <h1 className="titulo">Alix Controlling</h1>
      
      {/* Formulario para ingresar usuario y contraseña */}
      <form onSubmit={manejarEnvio}>
        {/* Campo de entrada para el usuario */}
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)} // Actualizamos el estado con el valor ingresado
        />
        {/* Campo de entrada para la contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)} // Actualizamos el estado con el valor ingresado
        />
        {/* Botón para enviar el formulario */}
        <button type="submit">Ingresar</button>
      </form>

      {/* Si hay un mensaje de error, lo mostramos debajo del formulario */}
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default App;








