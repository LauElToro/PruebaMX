import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import user from '../../public/User.webp';
function DatosDeContacto({ onNextStep }) {
    const [data, setData] = useState({
        telefono: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        onNextStep({ datosContacto: `${data.telefono} - ${data.email}` });
    };

    return (
        <>
        <div className='Bot'>
          <img className='user' src={user} alt="" />
          <div className='DivInput'>
            <h2>Ingresa tus datos de contacto</h2>
            <TextField
              id='telefono'
              label='Teléfono'
              variant='filled'
              name='telefono'
              value={data.telefono}
              onChange={handleInputChange}
            />
            <TextField
              id='email'
              label='Email'
              variant='filled'
              name='email'
              value={data.email}
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

export default DatosDeContacto;