import React from "react";
import "./Dashboard.css"; // No olvides tener el CSS en el mismo directorio

function Dashboard({ usuario, cerrarSesion }) {
  return (
    <div className="dashboard-container">
      <h1 className="bienvenida">Bienvenido {usuario} a Alix Controlling</h1>

      {/* Botones en fila */}
      <div className="botones-fila">
        <button className="boton">Inventario</button>
        <button className="boton">Usuarios</button>
      </div>

      {/* Botón debajo */}
      <div className="cerrar-sesion-container">
        <button className="boton cerrar-sesion" onClick={cerrarSesion}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

export default Dashboard;







