import React, { useEffect, useState } from 'react';
import ColorsSelect from './ColorsSelect';
import SizesSelect from './SizesSelect';

const CreateProductForm = ({categories, subCategories, handleInputChange, form, setForm, types, sizes, colors, handleSend}) => {
    const [sizesSelected, setSizesSelected] = useState([]);
    const [colorsSelected, setColorsSelected] = useState([]);
    const [subCategoriesFromCategroy, setSubCategoriesFromCategroy] = useState([])

    useEffect(() => {
        if (form.category) {
            const subCategoriesFromCategory = subCategories.filter(subCategory => subCategory.category === form.category);
            setSubCategoriesFromCategroy(subCategoriesFromCategory);
        }
    }, [form.category]);

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
                <input type="number" name='price' onChange={(e) => handleInputChange(e)} id='price' placeholder='Escriba aquí'/>
            </div>

            <div className="form_group">
                <label htmlFor="discount">Descuento (porcentaje)</label>
                <input type="number" name='discount' onChange={(e) => handleInputChange(e)} id='discount' placeholder='Escriba aquí'/>
            </div>

            <div className="form_group">
                <label htmlFor="priceWithOffer">Precio con descuento</label>
                <input type="number" name='priceWithOffer' onChange={(e) => handleInputChange(e)} id='priceWithOffer' placeholder='Escriba aquí' />
            </div>

            <div className="form_group form_picker required">
                <label htmlFor="clothe_type">Tipo de prenda</label>
                <select name="clothe_type" id="clothe_type" onChange={(e) => handleInputChange(e)}>
                    {form.category ? <option value={form.category}>{form.category}</option> : <option value={null}>Selecciona una categoría</option>}

                    {types.map(type => (
                        <option key={type._id} value={type._id}>{type.name}</option>
                    ))}
                </select>
            </div>
            
            <div className="form_group form_picker required">
                <label htmlFor="category">Categoría</label>
                <select name="category" id="category" onChange={(e) => handleInputChange(e)}>
                    {form.category ? <option value={form.category}>{form.category}</option> : <option value={null}>Selecciona una categoría</option>}

                    {categories.map(category => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                </select>
            </div>

            <div className="form_group form_picker required">
                <label htmlFor="subcategory">Subcategoría</label>

                <select name="subCategory" id="subCategory" onChange={(e) => handleInputChange(e)}>
                    {form.subcategory ? <option value={form.subcategory}>{form.subcategory}</option> : <option value={null}>Selecciona una subcategoría</option>}

                    {subCategoriesFromCategroy.map(subCategory => (
                        <option key={subCategory._id} value={subCategory._id}>{subCategory.name}</option>
                    ))}
                </select>
            </div>

            <SizesSelect form={form} sizes={sizes} setSizesSelected={setSizesSelected} setForm={setForm} sizesSelected={sizesSelected} />

            <ColorsSelect colors={colors} form={form} setForm={setForm} setColorsSelected={setColorsSelected} colorsSelected={colorsSelected} />

            <button type='submit' onClick={(e) => handleSend(e)}>Crear producto</button>

        </form>
    );
}

export default CreateProductForm;
