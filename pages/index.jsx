import React, { useEffect, useState } from 'react'
import Formulario from '../components/formulario'


const index = () => {

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
})
  const [dataForm, setDataForm] = useState([]);
  const [edit, setEdit] = useState({});
  
  const btnDelete = id =>{
    const handleDelete = dataForm.filter(data => data.id !== id)
    setDataForm(handleDelete);
  }

  useEffect(()=>{
    if(Object.keys(edit).length > 0) {
      setForm({
        nombre: edit.nombre,
        apellido: edit.apellido,
        email: edit.email,
        telefono: edit.telefono,
      })
    }
  }, [edit])

  return (
    <div className=' m-auto '>
      <div className='mb-6'>
        <h1 className="text-3xl font-semibold text-center">Formulario para personal</h1>
      </div>

      <div className='mb-6'>
        <Formulario
          setDataForm={setDataForm}
          dataForm={dataForm}
          setForm={setForm}
          form={form}
        />
      </div>

     
        {dataForm.map((data) => (
           <div className="bg-red-200 rounded-xl shadow-lg max-w-xs m-auto text-center mb-2">
            <p className="text-xl">{data.nombre}</p>
            <p className="text-xl">{data.apellido}</p>
            <p className="text-xl">{data.email}</p>
            <p className="text-xl">{data.telefono}</p>

            <div className='flex gap-2 justify-center'>
              <button onClick={()=> setEdit(data)} className="btn btn-info">Editar</button>
              <button onClick={()=> btnDelete(data.id)} className="btn btn-error">Eliminar</button>
            </div>
          </div>
        ))}

      </div>
  )
}

export default index