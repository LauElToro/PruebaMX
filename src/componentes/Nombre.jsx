import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import user from '../../public/User.webp';
function Nombres({ onNextStep }) {
  const [data, setData] = useState({
    nombre: '',
    segundoNombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onNextStep({
      nombres: `${data.nombre} ${data.segundoNombre} ${data.apellidoPaterno} ${data.apellidoMaterno}`,
    });
  };

  return (
    <>
      <div className='Bot'>
        <img className='user' src={user} alt="" />
        <div className='DivInput'>
          <h2>Ingresa tus nombres</h2>
          <TextField
            id='nombre'
            label='Nombre'
            variant='filled'
            name='nombre'
            value={data.nombre}
            onChange={handleInputChange}
          />
          <TextField
            id='segundoNombre'
            label='Segundo Nombre'
            variant='filled'
            name='segundoNombre'
            value={data.segundoNombre}
            onChange={handleInputChange}
          />
          <TextField
            id='apellidoPaterno'
            label='Apellido paterno'
            variant='filled'
            name='apellidoPaterno'
            value={data.apellidoPaterno}
            onChange={handleInputChange}
          />
          <TextField
            id='apellidoMaterno'
            label='Apellido materno'
            variant='filled'
            name='apellidoMaterno'
            value={data.apellidoMaterno}
            onChange={handleInputChange}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Siguiente
          </Button>
        </div>
      </div>
    </>
  );
}

export default Nombres;