import React, { useEffect, useState } from 'react';

const ColorsSelect = ({setColorsSelected, colorsSelected, colors, setForm, form}) => {
    const [lengthPrincipalImage, setLengthPrincipalImage] = useState({});
    const [lengthImages, setLengthImages] = useState({});

    useEffect(() => {
      setForm({
        ...form,
        colors: colorsSelected
      })
    }, [colorsSelected])
    

    const isSelected = (color) => {
        return colorsSelected.some(colorItem => colorItem._id === color._id);
    }

    const handleAdd = (color) => {
        if(!isSelected(color)){
            setColorsSelected([...colorsSelected, color]);
        } else {
            setColorsSelected(colorsSelected.filter(colorItem => colorItem._id !== color._id));
            setLengthImages({...lengthImages, [color._id]: 0});
            setLengthPrincipalImage({...lengthImages, [color._id]: 0});
        }
    }

    const handlePrimaryImage = (e, color) => {
        setColorsSelected(colorsSelected.map(colorItem => {
            if(colorItem._id === color._id){
                return {
                    ...colorItem,
                    principalImage: e.target.files[0]
                }
            }
            return colorItem;
        }));
        setLengthPrincipalImage({...lengthImages, [color._id]: e.target.files.length});
    }

    const handleImages = (e, color) => {
        const aux = colorsSelected.map(colorItem => {
            if(colorItem._id === color._id){
                return {
                    ...colorItem,
                    images: e.target.files
                }
            }
            return colorItem;
        });

        setColorsSelected(aux);
        setLengthImages({...lengthImages, [color._id]: e.target.files.length});
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

            {colorsSelected.map((color, index) => (
                <div key={`${color._id}-${index}`} style={{width: '80%', marginBottom: 100}} className='image_color_picker'>

                    <div  className='form_group'>
                        <label htmlFor={color.imageKey} style={{display: 'flex', flexDirection: 'column'}}> 
                            Elija la imágen principal del color {color.name} 
                            <br />
                            <br />
                            {<span style={{color: 'var(--color-success)'}}>{lengthPrincipalImage[color._id] ? lengthPrincipalImage[color._id] : 0} Imagenes seleccionadas</span>}
                        </label>
                        <input onChange={(e) => handlePrimaryImage(e, color)} type="file" name={color.imageKey} id={color.imageKey} />
                    </div>

                    <div  className='form_group'>
                        <label htmlFor={color._id} style={{display: 'flex', flexDirection: 'column'}}>Imagenes secundarias del color {color.name}
                            <br />
                            <br />
                            {<span style={{color: 'var(--color-success)'}}>{lengthImages[color._id] ? lengthImages[color._id] : 0} Imagenes seleccionadas</span>}
                        </label>

                        <input onChange={(e) => handleImages(e, color)} type="file" name={color._id} id={color._id} multiple />
                    </div>

                    <style jsx>{`
                        .image_color_picker {
                            border: 1px solid #000;
                            padding: 20px;
                            height: 300px;
                            margin-bottom: 20px;
                            display: flex;
                        }

                        .image_color_picker .form_group{
                            width: 50%;
                            margin: 0px !important;
                            height: 100%;
                        }

                        .image_color_picker .form_group input{
                            display: none;
                        }

                        .image_color_picker .form_group label{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 90%;
                            height: 100%;
                            background-color: #00000080;
                            color: #fff;
                            padding: 10px;
                            text-align: center;
                            cursor: pointer;
                        }
                    `}</style>
                </div>
            ))}
        </>
    );
}

export default ColorsSelect;
