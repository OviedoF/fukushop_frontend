import React from 'react';

const SizesSelect = ({setSizesSelected, sizesSelected}) => {
    const aux = [
        {name: 'XS', _id: 'XS'},
        {name: 'S', _id: 'S'},
        {name: 'M', _id: 'M'},
        {name: 'L', _id: 'L'},
        {name: 'XL', _id: 'XL'},
    ];

    const isSelected = (size) => {
        return sizesSelected.includes(size._id);
    }

    const handleAdd = (size) => {
        if(!isSelected(size)){
            setSizesSelected([...sizesSelected, size._id]);
        } else {
            setSizesSelected(sizesSelected.filter(s => s !== size._id));
        }
    }

    return (
        <div className='form_group multiple_picker required'>
            <label htmlFor="sizes">Tallas</label>

            {aux.map(size => (
                <div onClick={() => handleAdd(size)} key={size._id} className={`multiple_picker_item ${isSelected(size) && 'active'}`}>
                    <p>{size.name}</p>
                </div>
            ))}
        </div>
    );
}

export default SizesSelect;
