import React from 'react';
import { useSelector } from 'react-redux';
import AdminCreateModuleCard from '../../src/components/admin/panel/AdminCreateModuleCard';
import routes from '../../src/routes';
import NotFoundItem from '../../src/globals/NotFoundItem';

const Panel = () => {
    const auth = useSelector(state => state.auth);

    if (!auth) {
        return <NotFoundItem />;
    }

    return (
        <main>
            <div className="card_container">
                <AdminCreateModuleCard title={'Categoría'} href={routes.createCategory} />
                <AdminCreateModuleCard title={'Subcategoría'} href={routes.createSubcategory} />
                <AdminCreateModuleCard title={'Tipo de prenda'} href={routes.createType} />
                <AdminCreateModuleCard title={'Subtipo de prenda'} href={routes.createSubType} />
                <AdminCreateModuleCard title={'Talla'} href={routes.createSize} />
                <AdminCreateModuleCard title={'Color'} href={routes.createColor} />
                <AdminCreateModuleCard title={'Producto'} href={routes.createProduct} />
            </div>

            <style jsx>{`
                .card_container {
                    display: flex;
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
    );
}

export default Panel;
