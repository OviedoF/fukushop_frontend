import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import React from 'react'
import DropdownList from '../../../src/components/admin/list/DropdownList'
import env from '../../../src/env'

export default function products({ products }) {

  const handlerEdit = (item) => console.log(item)

  const handlerDelete = (item) => console.log(item)

  return (
    <>
        <Head>
            <title>Modificación | Productos</title>
        </Head>

        <main>
            <h1>Lista de productos</h1>

            <DropdownList items={products} subList={'variants'} actionsList={[
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
