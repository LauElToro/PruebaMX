import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import user from '../../public/User.webp';
function FechaDeNacimiento({ onNextStep }) {
  const [data, setData] = useState({
    dia: '',
    mes: '',
    anio: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onNextStep({
      fechaNacimiento: `${data.dia}-${data.mes}-${data.anio}`,
    });
  };

  return (
    <>
    <div className='Bot'>
      <img className='user' src={user} alt="" />
      <div className='DivInput'>
        <h2>Ingresa tu fecha de nacimiento</h2>
        <TextField
          id='dia'
          label='Día'
          variant='filled'
          name='dia'
          value={data.dia}
          onChange={handleInputChange}
        />
        <TextField
          id='mes'
          label='Mes'
          variant='filled'
          name='mes'
          value={data.mes}
          onChange={handleInputChange}
        />
        <TextField
          id='anio'
          label='Año'
          variant='filled'
          name='anio'
          value={data.anio}
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

export default FechaDeNacimiento;