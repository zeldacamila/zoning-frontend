import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Form = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [address, setAddress] = useState('')
  
  const handleNameChange = (event) => setName(event.target.value);
  const handleIdChange = (event) => setId(event.target.value);
  const handleNhChange = (event) => setNeighborhood(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);

  const markerInfo= {
    name: name,
    id: id,
    neighborhood: neighborhood,
    address: address
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`datos del formulario enviados, ${markerInfo}`)

  }
/*   const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data } = await axios.post('https://usersdata-backend.onrender.com/markerInfo', {
        name,
        id,
        neighborhood,
        address
      }
      );
  
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }; */

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }
  const handleIniciarSesion = () => {
    navigate('/')
  }
  return (
    <div className='Form-container'>
      {localStorage.getItem('token') ?
      (<>
        <h1>FORMULARIO</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="name" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Cédula:
            <input type="id" value={id} onChange={handleIdChange} />
          </label>
          <br />
          <label>
            Barrio:
            <input type="neighborhood" value={neighborhood} onChange={handleNhChange} />
          </label>
          <br />
          <label>
            Dirección:
            <input type="address" value={address} onChange={handleAddressChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </>)
      :
      (<>
        <h2>DEBES INICIAR SESIÓN PARA ACCEDER AL FORMULARIO</h2>
        <button onClick={handleIniciarSesion}>Iniciar sesión</button>
      </>)
      }
    </div>
  )
}

export default Form