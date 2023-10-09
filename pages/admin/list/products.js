import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import DropdownList from '../../../src/components/admin/list/DropdownList'
import env from '../../../src/env'
import petitions from '../../../src/api/axios'
import { useSnackbar } from 'notistack'

export default function products({ products }) {
  const { enqueueSnackbar } = useSnackbar()
  const [productsList, setProductsList] = useState(products)

  const handlerGetProducts = async () => {
    const res = await petitions.getProducts()
    setProductsList(res)
  }

  const handlerEdit = (item) => console.log(item)

  const handlerDelete = async (item) => {
    const res = await petitions.deleteProduct(item._id)
    
    if(res.status) {
      enqueueSnackbar('Producto eliminado correctamente', { variant: 'success' })
      handlerGetProducts()
    }
  }

  return (
    <>
        <Head>
            <title>Modificación | Productos</title>
        </Head>

        <main>
            <h1>Lista de productos</h1>

            <DropdownList items={productsList} subList={'variants'} actionsList={[
                { icon: faEdit, color: 'var(--color-success)', handler: handlerEdit },
                { icon: faTrash, color: 'var(--color-danger)', handler: handlerDelete }
            ]} actionsSubList={[
                { icon: faEdit, color: 'var(--color-success)', handler: handlerEdit },
                { icon: faTrash, color: 'var(--color-danger)', handler: handlerDelete}
            ]} listItemTitle={'name'} subItemTitle={'color.name'}/>
        </main>
    </>
  )
}

export async function getStaticProps() {
  const productsFetch = await fetch(`${env.API_URL}/products`)
  const products = await productsFetch.json()

  return {
    props: {
      products
    },
    revalidate: 1
  }
}
