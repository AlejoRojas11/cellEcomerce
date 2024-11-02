// const fs = require('fs').promises;
// const path = require('path');

// const userFilePath = path.join(__dirname, '../../src/components/OrdenesRegistradas.json');

// const controller = {

//     // register no funcional.
//     register: async function (req, res) {
//         try {
//             // Leer el archivo JSON una sola vez
//             const usersData = await fs.readFile(userFilePath, 'utf-8');
//             const users = JSON.parse(usersData);

//             // Verificar si el correo electrónico ya está registrado
//             const emailExists = users.some(user => user.email === req.body.email);
//             if (emailExists) {
//                 return res.status(400).send('El correo electrónico ya está registrado');
//             }

//             const ultimo = users.length;
//             const usuarioNuevo = {
//                 id: ultimo + 1,   
//                 nombre: req.body.nombre,
//                 apellido: req.body.apellido,
//                 email: req.body.email,
//                 celular: req.body.celular,
//                 password: req.body.password,
//                 rol: "usuario",
//                 fecha_creación: new Date()
//             };

//             users.push(usuarioNuevo);

//             // Escribir el archivo JSON
//             await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));

//             res.status(200).send('Usuario creado con éxito');
//         } catch (error) {
//             console.error('Error al procesar el registro:', error);
//             res.status(500).send('Error interno del servidor');
//         }
//     },

//     // login no funcional.
//     login: async function (req, res) {
//         try {
//             // Leer el archivo JSON una sola vez
//             const OrdenData = await fs.readFile(userFilePath, 'utf-8');
//             const orden = JSON.parse(OrdenData);
//             const ultimo = orden.length;
//             const OrdenNueva = {
//                 id: ultimo + 1,   
//                 nombre: req.body.nombre,
//                 correo: req.body.correo,
//                 pais: req.body.pais,
//                 ciudad: req.body.pais,
//                 direccion: req.body.direccion,
//                 telefono: req.body.telefono,
//                 tarjeta: req.body.tarjeta,
//                 codigo: req.body.codigo,
//                 fechaVencimiento: req.body.fechaVencimiento,
//                 total: req.body.total,
//                 estado: "confirmado",
//                 fecha_creación: new Date()
//             };
//             orden.push(OrdenNueva);

//             // Escribir el archivo JSON
//             orden.push(OrdenNueva);
//             // Escribir el archivo JSON
//             await fs.writeFile(userFilePath, JSON.stringify(orden, null, 4));
//             res.status(200).send('Orden creada correctamente'); // Agrega un mensaje de éxito
            
//         } catch (error) {
//             console.error('Error al procesar la orden:', error);
//             res.status(500).send('Error interno del servidor'); // Agrega un mensaje de error
//         }
//     },


//     orden: async function (req, res) {
//         try {
//             // Leer el archivo JSON una sola vez
//             const OrdenData = await fs.readFile(userFilePath, 'utf-8');
//             const orden = JSON.parse(OrdenData);
//             const ultimo = orden.length;
//             const OrdenNueva = {
//                 id: ultimo + 1,   
//                 nombre: req.body.nombre,
//                 correo: req.body.correo,
//                 pais: req.body.pais,
//                 ciudad: req.body.pais,
//                 direccion: req.body.direccion,
//                 telefono: req.body.telefono,
//                 tarjeta: req.body.tarjeta,
//                 codigo: req.body.codigo,
//                 fechaVencimiento: req.body.fechaVencimiento,
//                 total: req.body.total,
//                 estado: "Activo",
//                 productos: req.body.productos,
//                 fecha_creación: new Date()
//             };
//             orden.push(OrdenNueva);

//             // Escribir el archivo JSON
//             await fs.writeFile(userFilePath, JSON.stringify(orden, null, 4));

//             res.status(200).send('Orden creada correctamente');
//         } catch (error) {
//             console.error('Error al procesar la orden:', error);
//             res.status(500).send('Error interno del servidor');
//         }
//     }
// };

// module.exports = controller;



const express = require("express");
const app = express();
const axios = require('axios');
const cors = require("cors");
const conexion = require('../configBD.js');

app.use(cors());
app.use(express.json()); // Agregar esta línea para analizar cuerpos JSON

const controller = {
  /* orden1: async function (req, res) {
    try {
      // Realizar solicitud GET
      let config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: 'https://api.jsonbin.io/v3/b/664e413dacd3cb34a84c01ea',
        headers: {
          'Content-Type': 'application/json',
          "X-Master-Key": "$2a$10$G4Gi.QvGosjzduabWZjmXugLWUU0yL9vTiVSExFzwfLbyHy66RRr6"
        }
      };
      const result = await axios(config);
      const orden = result.data.record;

      // Crear nueva orden
      const ultimo = orden.length;
      const OrdenNueva = {
        id: ultimo + 1,
        nombre: req.body.nombre,
        correo: req.body.correo,
        pais: req.body.pais,
        ciudad: req.body.ciudad,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        tarjeta: req.body.tarjeta,
        codigo: req.body.codigo,
        fechaVencimiento: req.body.fechaVencimiento,
        total: req.body.total,
        estado: "Activo",
        productos: req.body.productos,
        fecha_creación: new Date()
      };
      orden.push(OrdenNueva);

      // Realizar solicitud PUT
      const configPut = {
        method: "PUT",
        url: "https://api.jsonbin.io/v3/b/664e413dacd3cb34a84c01ea",
        headers: {
          "Content-Type": "Application/json",
          "X-Master-Key": "$2a$10$G4Gi.QvGosjzduabWZjmXugLWUU0yL9vTiVSExFzwfLbyHy66RRr6"
        },
        data: orden
      };
      const responsePut = await axios(configPut);

      if (responsePut.status === 200) {
        res.status(200).send('ok');
      } else {
        res.status(500).send("No Ok");
      }
    } catch (error) {
      console.error('Error al procesar la orden:', error);
      res.status(500).send('Error interno del servidor');
    }
  }, */

    //PARA REGISTRAR EN LA BD
    orden: async function (req, res) {
      const { nombre, correo, pais, ciudad, direccion, telefono, tarjeta, codigo, fechaVencimiento, total, productos } = req.body;

      try {
          // Insertar la nueva orden
          const result = await conexion.promise().query(
              'INSERT INTO Compras (nombre, correo, pais, ciudad, direccion, telefono, tarjeta, codigo, fechaVencimiento, total, estado, productos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
              [nombre, correo, pais, ciudad, direccion, telefono, tarjeta, codigo, fechaVencimiento, total, 'Activo', JSON.stringify(productos)]
          );

          res.status(200).send('Orden creada correctamente');
      } catch (error) {
          console.error('Error al procesar la orden:', error);
          res.status(500).send('Error interno del servidor');
      }
  }
};

module.exports = controller;