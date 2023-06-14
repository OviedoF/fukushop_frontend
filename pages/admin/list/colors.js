import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import React, { useState } from 'react';
import DropdownList from '../../../src/components/admin/list/DropdownList'
import env from '../../../src/env'
import ModalForm from '../../../src/globals/libs/ModalForm'
import axios from 'axios'

export default function colors({ colors }) {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({});
  const [ajaxStatus, setAjaxStatus] = useState({
    status: 'idle',
    message: ''
  })

  const inputs = [
    { name: 'name', type: 'text', label: 'Nombre' },
    { name: 'color', type: 'color', label: 'Color'},
    { name: 'imageKey', type: 'text', label: 'Image key'}
  ]
  
  const handlerEdit = (item) => {
    setForm(item)
    setEditing(true)
  }

  const handleSubmit = () => {
    setAjaxStatus({ status: 'loading', message: 'Guardando cambios...' })

    axios.put(`${env.API_URL}/productColor/${form._id}`, form)
      .then(res => setAjaxStatus({ status: 'success', message: '¡Cambios guardados!' }))
      .catch(err => setAjaxStatus({ status: 'error', message: 'Error al guardar cambios.' }))
  }

  const handlerDelete = (item) => console.log(item)

  return (
    <>
        <Head>
            <title>Modificación | Colores</title>
        </Head>

        <main>
            <h1>Lista de colores</h1>

            {editing && <ModalForm inputs={inputs} title={'Editar color'} editing item={editing} form={form} setForm={setForm} 
            setter={editing} setSetter={setEditing} submitText={'Editar'} defaultValues={editing} onSubmit={() => handleSubmit()}
            status={ajaxStatus}/>}

            <DropdownList items={colors} actionsList={[
                { icon: faEdit, color: 'var(--color-success)', handler: handlerEdit },
                { icon: faTrash, color: 'var(--color-danger)', handler: handlerDelete }
            ]} listItemTitle={'name'}/>
        </main>
    </>
  )
}

export async function getStaticProps() {
  const productsFetch = await fetch(`${env.API_URL}/productColor`)
  const colors = await productsFetch.json()

  return {
    props: {
      colors
    },
    revalidate: 1
  }
}
