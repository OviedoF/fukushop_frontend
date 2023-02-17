import React from 'react';
import CreateProductForm from '../../../src/components/admin/forms/product/CreateProductForm';
import axios from 'axios';
import env from '../../../src/env';
import { useQuery } from 'react-query';
import LoadingPage from '../../../src/globals/LoadingPage';
import ErrorPage from '../../../src/globals/ErrorPage';

const Product = () => {
    const { isLoading: isLoadingCategories, error, data: categories } = useQuery('category', () => axios.get(`${env.API_URL}/category`) );
    const { isLoading: isLoadingSub, error: errorSub, data: subCategories } = useQuery('subcategory', () => axios.get(`${env.API_URL}/subcategories`) );

    if (isLoadingCategories || isLoadingSub) return <LoadingPage />;

    if (error || errorSub) return <ErrorPage />;

    if (categories && subCategories) return (
        <main>
            <h1>Crear producto</h1>
            <CreateProductForm categories={categories.data} subCategories={subCategories.data} />
        </main>
    );
}

export default Product;
