import React, { useEffect, useState } from 'react'
import { generarId } from '../helpers'

const Formulario = ({form, setForm, setDataForm, dataForm}) => {


    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const {nombre, apellido, email, telefono} = form

    const handleSubmit = e =>{
        e.preventDefault();

        form.id = generarId()

        setDataForm([
            form, ...dataForm
        ]);

        setForm({
            nombre: '',
            apellido: '',
            email: '',
            telefono: ''
        })
    }

  return (
    <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center'>
        <input
            type="text"
            placeholder="Nombre" 
            className="input input-bordered w-full max-w-xs mb-2"
            onChange={handleChange}
            name='nombre'
            value={nombre}
        />

        <input
            type="text" 
            placeholder="Apellido" 
            className="input input-bordered w-full max-w-xs mb-2" 
            onChange={handleChange}
            name='apellido'
            value={apellido}
        />

        <input
            type="email" 
            placeholder="email" 
            className="input input-bordered w-full max-w-xs mb-2" 
            onChange={handleChange}
            name='email'
            value={email}
        />

        <input 
            type="number" 
            placeholder="telefono" 
            className="input input-bordered w-full max-w-xs mb-2" 
            onChange={handleChange}
            name='telefono'
            value={telefono}
        />
        
        <button type='submit' className="btn">Enviar</button>

    </form>
  )
}

export default Formulario