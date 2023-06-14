import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import React, { useState } from 'react';
import DropdownList from '../../../src/components/admin/list/DropdownList'
import env from '../../../src/env'
import ModalForm from '../../../src/globals/libs/ModalForm'
import axios from 'axios'

export default function types({ types }) {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({});
  const [ajaxStatus, setAjaxStatus] = useState({
    status: 'idle',
    message: ''
  })

  const inputs = [
    { name: 'name', type: 'text', label: 'Nombre' },
    { name: 'description', type: 'textarea', label: 'Descripción' },
    { name: 'image', type: 'file', label: 'Imágen' },
  ]
  
  const handlerEdit = (item) => {
    setForm(item)
    setEditing(true)
  }

  const handleSubmit = () => {
    setAjaxStatus({ status: 'loading', message: 'Guardando cambios...' })

    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('description', form.description)
    if(form.image) formData.append('images', form.image)

    axios.put(`${env.API_URL}/types/${form._id}`, formData)
      .then(res => setAjaxStatus({ status: 'success', message: '¡Cambios guardados!' }))
      .catch(err => setAjaxStatus({ status: 'error', message: 'Error al guardar cambios.' }))
  }

  const handlerDelete = (item) => console.log(item)

  return (
    <>
        <Head>
            <title>Modificación | prendas</title>
        </Head>

        <main>
            <h1>Lista de prendas</h1>

            {editing && <ModalForm inputs={inputs} title={'Editar prenda'} editing item={editing} form={form} setForm={setForm} 
            setter={editing} setSetter={setEditing} submitText={'Editar'} defaultValues={editing} onSubmit={() => handleSubmit()}
            status={ajaxStatus}/>}

            <DropdownList items={types} actionsList={[
                { icon: faEdit, color: 'var(--color-success)', handler: handlerEdit },
                { icon: faTrash, color: 'var(--color-danger)', handler: handlerDelete }
            ]} listItemTitle={'name'}/>
        </main>
    </>
  )
}

export async function getStaticProps() {
  const productsFetch = await fetch(`${env.API_URL}/types`)
  const types = await productsFetch.json()

  return {
    props: {
      types
    },
    revalidate: 1
  }
}
