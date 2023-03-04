import React, { useContext } from 'react'
import ProductFormContext from './Product.provider'

export default function ColorImagesPicker({ colorsSelected }) {
    const { images, setImages } = useContext(ProductFormContext);

    const handleImages = (e, key, property) => {
        if (property === 'image') {
            return setImages({
                ...images,
                [key]: {
                    ...images[key],
                    [property]: e.target.files[0]
                }
            })
        }

        setImages({
            ...images,
            [key]: {
                ...images[key],
                [property]: Object.values(e.target.files)
            }
        })
    }

    return (
        <>
            {colorsSelected.map((color, index) => (
                <div key={`${color._id}-${index}`} style={{ width: '80%', marginBottom: 100 }} className='variant_color_picker'>
                    <h3>Imágenes para el color {color.name}</h3>

                    <div style={{ display: 'flex', height: 300 }}>
                        <div className='form_group required'>
                            <label htmlFor={color.imageKey} style={{ display: 'flex', flexDirection: 'column' }}>
                                Elija la imágen principal del color {color.name}
                                <br />
                                <br />
                                {<span style={{ color: 'var(--color-success)' }}>{images[color.imageKey] && images[color.imageKey].image && 'Imágen seleccionada'}</span>}
                            </label>

                            <input onChange={(e) => handleImages(e, color.imageKey, 'image')} type="file" name={color.imageKey} id={color.imageKey} />
                        </div>

                        <div className='form_group required'>
                            <label htmlFor={color._id} style={{ display: 'flex', flexDirection: 'column' }}>Imagenes secundarias
                                <br />
                                <br />
                                {<span style={{ color: 'var(--color-success)' }}>{images[color.imageKey] && images[color.imageKey].gallery && `${images[color.imageKey].gallery.length} imágenes seleccionadas`}</span>}
                            </label>

                            <input onChange={(e) => handleImages(e, color.imageKey, 'gallery')} type="file" name={color._id} id={color._id} multiple />
                        </div>
                    </div>

                    <style jsx>{`
        .variant_color_picker {
            border: 1px solid var(--color-alternative);
            padding: 20px;
            height: 500px;
            margin-bottom: 20px;
            display: flex; 
            flex-direction: column;
        }

        .variant_color_picker .form_group{
            width: 40%;
            margin: 0px !important;
            height: 100%;
        }

        .variant_color_picker .form_group.stock{
            min-width: 100%;
            height: 50%;
        }

        .variant_color_picker .form_group input{
            display: none;
        }

        .variant_color_picker .form_group.stock input{
            display: block;
        }

        .variant_color_picker .form_group label{
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

        .variant_color_picker .form_group.stock label{
            display: block;
            height: auto;
            background-color: transparent;
        }
            `}</style>
                </div>
            ))}
        </>
    )
}
