import React, { useEffect, useState, useContext } from 'react';
import ColorsSelect from './ColorsSelect';
import SizesSelect from './SizesSelect';
import ProductFormContext from './Product.provider';
import Variants from './Variants';
import ColorImagesPicker from './ColorImagesPicker';
import { HashLoader } from 'react-spinners';
import { motion } from 'framer-motion';

const CreateProductForm = ({ createStatus }) => {
    const [sizesSelected, setSizesSelected] = useState([]);
    const [colorsSelected, setColorsSelected] = useState([]);
    const [subCategoriesFromCategroy, setSubCategoriesFromCategroy] = useState([])
    const [populatedVariants, setPopulatedVariants] = useState([]);
    const { form, setForm, handleInputChange, handleSend, categories, subCategories, types, sizes, variants, setVariants,
        populateVariant } = useContext(ProductFormContext);

    useEffect(() => {
        if (form.category) {
            const subCategoriesFromCategory = subCategories.filter(subCategory => subCategory.category === form.category);
            setSubCategoriesFromCategroy(subCategoriesFromCategory);
        }
    }, [form.category]);

    useEffect(() => {
        const variants = [];

        colorsSelected.forEach(color => {
            sizesSelected.forEach(size => {
                variants.push({
                    color: color._id,
                    size: size,
                    stock: 0
                })
            })
        });

        setVariants(variants);

        setForm({
            ...form,
            variants
        })

    }, [colorsSelected, sizesSelected])

    useEffect(() => {
        setPopulatedVariants(variants.map(variant => populateVariant(variant)));
    }, [variants])

    return (
        <form id='small_form_style'>
            <div className="form_group required">
                <label htmlFor="name">Nombre del producto</label>
                <input type="text" name='name' id='name' onChange={(e) => handleInputChange(e)} placeholder='Escriba aquí' />
            </div>

            <div className="form_group required">
                <label htmlFor="description">Descripción</label>
                <textarea name="description" id="description" onChange={(e) => handleInputChange(e)} cols="30" rows="10" placeholder='Escriba aquí'></textarea>
            </div>

            <div className="form_group required">
                <label htmlFor="price">Precio</label>
                <input type="number" name='price' onChange={(e) => handleInputChange(e)} id='price' placeholder='Escriba aquí' />
            </div>

            <div className="form_group">
                <label htmlFor="discount">Descuento (porcentaje)</label>
                <input type="number" name='discount' onChange={(e) => handleInputChange(e)} id='discount' placeholder='Escriba aquí' />
            </div>

            <div className="form_group">
                <label htmlFor="priceWithOffer">Precio con descuento</label>
                <input type="number" name='priceWithOffer' onChange={(e) => handleInputChange(e)} id='priceWithOffer' placeholder='Escriba aquí' />
            </div>

            <div className="form_group form_picker required">
                <label htmlFor="clothe_type">Tipo de prenda</label>
                <select name="clothe_type" id="clothe_type" onChange={(e) => handleInputChange(e)}>
                    <option value={null}>Selecciona un tipo de prenda</option>

                    {types.map(type => (
                        <option key={type._id} value={type._id}>{type.name}</option>
                    ))}
                </select>
            </div>

            <div className="form_group form_picker required">
                <label htmlFor="category">Categoría</label>
                <select name="category" id="category" onChange={(e) => handleInputChange(e)}>
                    {/* {form.category ? <option value={form.category}>{form.category}</option> : <option value={null}>Selecciona una categoría</option>} */}
                    <option value={null}>Selecciona una categoría</option>

                    {categories.map(category => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                </select>
            </div>

            <div className="form_group form_picker required">
                <label htmlFor="subcategory">Subcategoría</label>

                <select name="subCategory" id="subCategory" onChange={(e) => handleInputChange(e)}>
                    {/* {form.subcategory ? <option value={form.subcategory}>{form.subcategory}</option> : <option value={null}>Selecciona una subcategoría</option>} */}
                    <option value={null}>Selecciona una subcategoría</option>

                    {subCategoriesFromCategroy.map(subCategory => (
                        <option key={subCategory._id} value={subCategory._id}>{subCategory.name}</option>
                    ))}
                </select>
            </div>

            <SizesSelect sizes={sizes} setSizesSelected={setSizesSelected} sizesSelected={sizesSelected} />

            <ColorsSelect setColorsSelected={setColorsSelected} colorsSelected={colorsSelected} />

            <Variants variants={populatedVariants} colorsSelected={colorsSelected} />

            <ColorImagesPicker colorsSelected={colorsSelected} />

            {createStatus.status === 'success' && <motion.p className='card_text_1 success' animate={{ transform: 'scale(1)' }}>{createStatus.message}</motion.p>}
            {createStatus.status === 'loading' ? <HashLoader color='#FFF' size={50} /> : <button type='submit' onClick={(e) => handleSend(e)}>Crear producto</button>}
            {createStatus.status === 'error' && <motion.p className='card_text_1 error' animate={{ transform: 'scale(1)' }}>{createStatus.message}</motion.p>}

        </form>
    );
}

export default CreateProductForm;
