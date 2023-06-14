import React from 'react';
import { useSelector } from 'react-redux';
import AdminModuleCard from '../../src/components/admin/panel/AdminModuleCard';
import routes from '../../src/routes';
import NotFoundItem from '../../src/globals/NotFoundItem';
import Head from 'next/head';

const Panel = () => {
    const auth = useSelector(state => state.auth);

    if (!auth) {
        return <NotFoundItem />;
    }

    return (
        <>
            <Head key="head">
                <title>Panel de administración</title>
            </Head>

            <main>
                <h2>Creacion</h2>
                <div className="card_container">
                    <AdminModuleCard title={'Categoría'} href={routes.createCategory} />
                    <AdminModuleCard title={'Subcategoría'} href={routes.createSubcategory} />
                    <AdminModuleCard title={'Tipo de prenda'} href={routes.createType} />
                    <AdminModuleCard title={'Subtipo de prenda'} href={routes.createSubType} />
                    <AdminModuleCard title={'Talla'} href={routes.createSize} />
                    <AdminModuleCard title={'Color'} href={routes.createColor} />
                    <AdminModuleCard title={'Producto'} href={routes.createProduct} />
                </div>

                <h2>Administracion</h2>
                <div className="card_container">
                    <AdminModuleCard title={'Categorías'} href={routes.listCategories} />
                    <AdminModuleCard title={'Sub-Categorias'} href={routes.listSubcategories} />
                    <AdminModuleCard title={'Tipos de prendas'} href={routes.listTypes} />
                    <AdminModuleCard title={'Subtipos de prendas'} href={routes.listSubTypes} />
                    <AdminModuleCard title={'Tallas'} href={routes.listSizes} />
                    <AdminModuleCard title={'Colores'} href={routes.listColors} />
                    <AdminModuleCard title={'Productos'} href={routes.listProducts} />
                </div>

                <style jsx>{`
                h2{
                    margin: 40px auto;
                }

                .card_container {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    margin: 0 auto;
                    width: 100%;
                    max-width: 100%;
                }
            `}</style>
            </main>
        </>
    );
}

export default Panel;
