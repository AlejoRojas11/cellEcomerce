import React from 'react';
import Usuarios from '../OrdenesRegistradas.json';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Reporte() {
  return (
    <div>
      <Header />
      <div className="container " style={{ marginTop: '100px' }}>
        <h1 className="text-center mb-4">Reporte de Usuarios</h1>
        <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>País</th>
              <th>Ciudad</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Total</th>
              <th>Fecha Creación</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {Usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.pais}</td>
                <td>{usuario.ciudad}</td>
                <td>{usuario.direccion}</td>
                <td>{usuario.telefono}</td>
                <td>${usuario.total}</td>
                <td>{usuario.fecha_creación}</td>
                <td>
                  <span
                    className={`badge ${
                      usuario.estado === 'Activo'
                        ? 'bg-success'
                        : 'bg-warning text-dark'
                    }`}
                  >
                    {usuario.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Reporte;