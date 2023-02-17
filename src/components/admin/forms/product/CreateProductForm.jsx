import React, { useState } from 'react';
import ColorsSelect from './ColorsSelect';
import SizesSelect from './SizesSelect';

const CreateProductForm = ({categories, subCategories}) => {
    const [sizesSelected, setSizesSelected] = useState([]);
    const [colorsSelected, setColorsSelected] = useState([]);

    return (
        <form id='small_form_style'>
            <div className="form_group required">
                <label htmlFor="name">Nombre del producto</label>
                <input type="text" name='name' id='name' placeholder='Escriba aquí' />
            </div>

            <div className="form_group required">
                <label htmlFor="description">Descripción</label>
                <textarea name="description" id="description" cols="30" rows="10" placeholder='Escriba aquí'></textarea>
            </div>

            <div className="form_group required">
                <label htmlFor="price">Precio</label>
                <input type="number" name='price' id='price' placeholder='Escriba aquí'/>
            </div>

            <div className="form_group">
                <label htmlFor="discount">Descuento (porcentaje)</label>
                <input type="number" name='discount' id='discount' placeholder='Escriba aquí'/>
            </div>

            <div className="form_group">
                <label htmlFor="priceWithOffer">Precio con descuento</label>
                <input type="number" name='priceWithOffer' id='priceWithOffer' placeholder='Escriba aquí' />
            </div>

            <div className="form_group required">
                <label htmlFor="stock">Stock</label>
                <input type="number" name='stock' id='stock' placeholder='Escriba aquí'/>
            </div>

            <div className="form_group form_picker required">
                <label htmlFor="category">Categoría</label>
                <select name="category" id="category">
                    <option value={null}>Selecciona una categoría</option>

                    {categories.map(category => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                </select>
            </div>

            <div className="form_group form_picker required">
                <label htmlFor="subcategory">Subcategoría</label>

                <select name="subcategory" id="subcategory">
                    <option value={null}>Selecciona una sub-categoría</option>

                    {subCategories.map(subCategory => (
                        <option key={subCategory._id} value={subCategory._id}>{subCategory.name}</option>
                    ))}
                </select>
            </div>

            <SizesSelect setSizesSelected={setSizesSelected} sizesSelected={sizesSelected} />

            <ColorsSelect setColorsSelected={setColorsSelected} colorsSelected={colorsSelected} />

            {/* <div className="form_group multiple-picker">
                <label htmlFor="sizes">Tallas</label>

                <select name="sizes" id="sizes" multiple>
                    <option value="1">Talla 1</option>
                    <option value="2">Talla 2</option>
                    <option value="3">Talla 3</option>
                </select>
            </div>

            <div className="form_group multiple-picker">
                <label htmlFor="colors">Colores</label>

                <select name="colors" id="colors" multiple>
                    <option value="1">Color 1</option>
                    <option value="2">Color 2</option>
                    <option value="3">Color 3</option>
                </select>
            </div> */}

        </form>
    );
}

export default CreateProductForm;
