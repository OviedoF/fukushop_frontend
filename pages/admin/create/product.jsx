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

const Product = () => {
    const [form, setForm] = useState({})
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

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSend = (e) => {
        e.preventDefault();
        setCreateStatus({status: 'loading'})

        const formData = new FormData();
        formData.append('body', JSON.stringify({
            ...form,
            colors: null
        }));

        formData.append('colors', JSON.stringify(form.colors));

        form.colors.forEach(color => {
            formData.append(color.imageKey, color.principalImage);
            
            for (const image of color.images) {
                formData.append(color.imageKey, image);
            }
        });  

        axios.post(`${env.API_URL}/products`, formData)
            .then(res => setCreateStatus({status: 'success', message: res.data.message}))
            .catch(err => setCreateStatus({status: 'error', message: err.response.data.message}))
    }

    if (categories && subCategories) return (
        <main>
            <h1>Crear producto</h1>
            {createStatus.status === 'success' && <motion.p className='card_text_1 success' animate={{transform: 'scale(1)'}}>{createStatus.message}</motion.p>}
            {createStatus.status === 'error' && <motion.p className='card_text_1 error' animate={{transform: 'scale(1)'}}>{createStatus.message}</motion.p>}

            <CreateProductForm handleSend={handleSend} types={types.data} sizes={sizes.data} colors={colors.data} handleInputChange={handleInputChange} setForm={setForm} form={form} categories={categories.data} subCategories={subCategories.data} />
        </main>
    );
}

export default Product;
