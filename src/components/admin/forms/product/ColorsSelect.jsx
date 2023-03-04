import React, { useEffect, useContext} from 'react';
import ProductFormContext from './Product.provider';

const ColorsSelect = ({setColorsSelected, colorsSelected}) => {
    const { colors, setForm, form } = useContext(ProductFormContext);

    useEffect(() => {
      setForm({
        ...form,
        colors: colorsSelected,
        _id: null
      })
    }, [colorsSelected])
    
    const isSelected = (color) => {
        return colorsSelected.some(colorItem => colorItem._id === color._id);
    }

    const handleAdd = (color) => {
        if(!isSelected(color)){
            setColorsSelected([...colorsSelected, {
                ...color, // Datos para manejar el formulario
                color: color._id, // Id del color, para enviar al backend
            }]);
        } else {
            setColorsSelected(colorsSelected.filter(colorItem => colorItem._id !== color._id));
        }
    }

    return (
        <>
            <div className='form_group multiple_picker required'>
                <label htmlFor="sizes">Colores</label>

                {colors.map((color, index) => (
                    <div onClick={() => handleAdd(color)} key={`${color._id}-${index}`} className={`multiple_picker_item ${isSelected(color) && 'active'}`}>
                        <p>{color.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ColorsSelect;
