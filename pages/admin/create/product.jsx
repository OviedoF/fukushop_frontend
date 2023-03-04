import React, { useState } from 'react';
import CreateProductForm from '../../../src/components/admin/forms/product/CreateProductForm';
import axios from 'axios';
import env from '../../../src/env';
import { useQuery } from 'react-query';
import LoadingPage from '../../../src/globals/LoadingPage';
import ErrorPage from '../../../src/globals/ErrorPage';
import NotFoundItem from '../../../src/globals/NotFoundItem';
import {motion} from 'framer-motion';
import { useSelector } from 'react-redux';
import {ProductFormProvider} from '../../../src/components/admin/forms/product/Product.provider';

const Product = () => {
    const { isLoading: isLoadingCategories, error, data: categories } = useQuery('category', () => axios.get(`${env.API_URL}/category`) );
    const { isLoading: isLoadingSub, error: errorSub, data: subCategories } = useQuery('subcategory', () => axios.get(`${env.API_URL}/subcategories`) );
    const { isLoading: isLoadingSizes, error: errorSizes, data: sizes } = useQuery('sizes', () => axios.get(`${env.API_URL}/sizes`) );
    const { isLoading: isLoadingColors, error: errorColors, data: colors } = useQuery('colors', () => axios.get(`${env.API_URL}/productColor`) );
    const { isLoading: isLoadingTypes, error: errorTypes, data: types } = useQuery('types', () => axios.get(`${env.API_URL}/types`) );
    const [createStatus, setCreateStatus] = useState({status: 'idle'})
    const auth = useSelector(state => state.auth);

    if (!auth) return <NotFoundItem />;

    if (isLoadingCategories || isLoadingSub || isLoadingSizes || isLoadingColors || isLoadingTypes || createStatus.status === 'loading' ) return <LoadingPage />;

    if (error || errorSub || errorSizes || errorColors || errorTypes) return <ErrorPage />;

    if (categories && subCategories && types) return (
        <main>
            <h1>Crear producto</h1>
            {createStatus.status === 'success' && <motion.p className='card_text_1 success' animate={{transform: 'scale(1)'}}>{createStatus.message}</motion.p>}
            {createStatus.status === 'error' && <motion.p className='card_text_1 error' animate={{transform: 'scale(1)'}}>{createStatus.message}</motion.p>}

            <ProductFormProvider setCreateStatus={setCreateStatus} types={types.data} categories={categories.data} colors={colors.data} sizes={sizes.data} subCategories={subCategories.data}>
                <CreateProductForm  />
            </ProductFormProvider>
        </main>
    );
}

export default Product;
