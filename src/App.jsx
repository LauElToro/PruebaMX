import React, { useState } from 'react';
import './App.css';
import Nombres from './componentes/Nombre';
import FechaDeNacimiento from "./componentes/FechaDeNacimiento"
import DatosDeContacto from './componentes/DatosDeContacto';

function App() {
  const [step, setStep] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [userData, setUserData] = useState({
    nombres: '',
    fechaNacimiento: '',
    datosContacto: '',
  });

  const handleNextStep = (data) => {
    console.log('Datos a enviar:', data);
    setUserData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleIniciar = () => {
    const {
      nombres,
      fechaNacimiento,
      datosContacto
    } = userData;

    const [nombre, segundoNombre, apellidoPaterno, apellidoMaterno] = nombres.split(' ');

    const [dia, mes, anio] = fechaNacimiento.split('-');

    const [telefono, email] = datosContacto.split(' - ');

    const data = {
      nombre,
      segundoNombre: segundoNombre || null,
      apellidoPaterno: apellidoPaterno || null,
      apellidoMaterno: apellidoMaterno || null,
      fechaNacimiento: `${dia}-${mes}-${anio}` || null,
      email: email || null,
      telefono: telefono || null
    };

    fetch('http://localhost:3001/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setShowInfo(true);
      })
      .catch(error => {
        console.error('Error al enviar los datos al servidor:', error);
      });
  };

  return (
    <section>
      <div>
        <div className="chat-container">
          {step >= 0 && <Nombres onNextStep={handleNextStep} />}
          {step >= 1 && (
            <div>
              <p>{userData.nombres}</p>
              <FechaDeNacimiento onNextStep={handleNextStep} nombres={userData.nombres} />
            </div>
          )}
          {step >= 2 && (
            <div>
              <p>{userData.fechaNacimiento}</p>
              <DatosDeContacto
                onNextStep={handleNextStep}
                nombres={userData.nombres}
                fechaNacimiento={userData.fechaNacimiento}
              />
            </div>
          )}
          {step >= 3 && (
            <div>
              <p>{userData.datosContacto}</p>
              <button onClick={handleIniciar}>Iniciar</button>
              {showInfo && (
                <div className='DivInfo'>
                  <p>{`Nombre: ${userData.nombres}`}</p>
                  <p>{`Fecha de nacimiento: ${userData.fechaNacimiento}`}</p>
                  <p>Datos de contacto:</p>
                  <p>{`${userData.datosContacto}`}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
