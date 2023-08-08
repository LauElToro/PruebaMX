import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import pool from './Conexion.js'; 

const app = express();
const port = 3001;

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/guardar-datos', async (req, res) => {
    const { nombre, segundoNombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, email, telefono } = req.body;
  
    try {
      const connection = await pool.getConnection();
  
      const sql = `
        CREATE TABLE IF NOT EXISTS LautaroFigueroa (
          id INT AUTO_INCREMENT PRIMARY KEY,
          nombre VARCHAR(255),
          segundo_nombre VARCHAR(255),
          apellido_paterno VARCHAR(255),
          apellido_materno VARCHAR(255),
          fecha_nacimiento VARCHAR(255),
          email VARCHAR(255),
          telefono VARCHAR(255)
        )
      `;
  
      await connection.execute(sql);
  
      const insertQuery = `
        INSERT INTO LautaroFigueroa
        (nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_nacimiento, email, telefono)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
  
  
      await connection.execute(insertQuery, values);
  
      connection.release();
  
      console.log('Datos guardados correctamente en la base de datos');
      res.status(200).send('Datos guardados correctamente en la base de datos');
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      res.status(500).send('Error al guardar los datos en la base de datos');
    }
  });

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});