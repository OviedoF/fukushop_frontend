import React, { useState } from 'react';
import CreateProductForm from '../../../src/components/admin/forms/product/CreateProductForm';
import axios from 'axios';
import env from '../../../src/env';
import { useQuery } from 'react-query';
import LoadingPage from '../../../src/globals/LoadingPage';
import ErrorPage from '../../../src/globals/ErrorPage';

const Product = () => {
    const [form, setForm] = useState({})
    const { isLoading: isLoadingCategories, error, data: categories } = useQuery('category', () => axios.get(`${env.API_URL}/category`) );
    const { isLoading: isLoadingSub, error: errorSub, data: subCategories } = useQuery('subcategory', () => axios.get(`${env.API_URL}/subcategories`) );
    const { isLoading: isLoadingSizes, error: errorSizes, data: sizes } = useQuery('sizes', () => axios.get(`${env.API_URL}/sizes`) );
    const { isLoading: isLoadingColors, error: errorColors, data: colors } = useQuery('colors', () => axios.get(`${env.API_URL}/productColor`) );

    if (isLoadingCategories || isLoadingSub || isLoadingSizes || isLoadingColors) return <LoadingPage />;

    if (error || errorSub || errorSizes || errorColors) return <ErrorPage />;

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSend = (e) => {
        e.preventDefault();
        console.log(form);
        console.log(form.colors);

        const formData = new FormData();
        formData.append('body', JSON.stringify({
            ...form,
            colors: null
        }));

        form.colors.forEach(color => {
            formData.append(color.imageKey, color.principalImage);
            console.log(color)
            
            for (const image of color.images) {
                formData.append(color.imageKey, image);
            }

            formData.append('colors', color);
        });              

        axios.post(`${env.API_URL}/product`, formData)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    if (categories && subCategories) return (
        <main>
            <h1>Crear producto</h1>
            <CreateProductForm handleSend={handleSend} sizes={sizes.data} colors={colors.data} handleInputChange={handleInputChange} setForm={setForm} form={form} categories={categories.data} subCategories={subCategories.data} />
        </main>
    );
}

export default Product;
