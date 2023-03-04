import React, { useContext } from 'react'
import ProductFormContext from './Product.provider'

export default function Variants({ variants }) {
    const { variants: variantsContext, setVariants } = useContext(ProductFormContext);

    const handleVariantStock = (e, color, size) => {
        const variants = variantsContext.map(variantItem => {
            if (variantItem.color === color && variantItem.size === size) {
                return {
                    color,
                    size,
                    stock: parseInt(e.target.value)
                }
            }

            return variantItem;
        })

        setVariants(variants);
    }

    return (
        <>

            <h3>Se han detectado {variants.length} variables para el producto.</h3>

            {variants.map((variant, index) => (
                <div key={`${variant._id}-${index}`} style={{ width: '80%', marginBottom: 100 }} className='variant_color_picker'>
                    <h3>Color {variant.color.name}, talle {variant.size.name}</h3>

                    <div className="form_group required stock">
                        <label htmlFor={`Variant${index}-stock`}>Stock</label>
                        <input type="number" name={`Variant${index}-stock`} id={`Variant${index}-stock`} placeholder='Escriba aquí'
                            onChange={(e) => handleVariantStock(e, variant.color._id, variant.size._id)} />
                    </div>

                    <style jsx>{`
                .variant_color_picker {
                    padding: 20px;
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
