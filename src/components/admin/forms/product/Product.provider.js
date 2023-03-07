import React, { createContext, useState } from 'react';
import axios from 'axios';
import env from '../../../../env';

export const ProductFormContext = createContext();

const initialState = {};

function ProductFormProvider({children, setCreateStatus, categories, subCategories, types, sizes, colors}) {
  const [form, setForm] = useState(initialState);
  const [variants, setVariants] = useState([]);
  const [images, setImages] = useState({});
  
  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => setForm(initialState);

  const populateVariant = (variant) => {
      const color = colors.find(color => color._id === variant.color);
      const size = sizes.find(size => size._id === variant.size);

      return {
          ...variant,
          color: color,
          size: size
      }
  }

  const handleSend = (e) => {
    e.preventDefault();
    setCreateStatus({status: 'loading', message: 'Creando producto...'})
    const formData = new FormData();

    formData.append('body', JSON.stringify({
        ...form,
        variants
    }));

    const imagesKeys = Object.keys(images);

    imagesKeys.forEach(key => {
        formData.append(key, images[key].image);

        images[key].gallery.forEach(image => {
            formData.append(key, image);
        });
    });

    console.log(images);

    axios.post(`${env.API_URL}/products`, formData)
        .then(res => {
          setCreateStatus({status: 'success', message: res.data.message})
          console.log(res.data);
        })
        .catch(err => {
          setCreateStatus({status: 'error', message: err.response.data.message})
          console.log(err.response.data);
        })
  }

  const data = {
    form,
    setForm,
    handleInputChange,
    resetForm,
    handleSend,
    categories,
    subCategories,
    types,
    sizes,
    colors,
    variants,
    setVariants,
    populateVariant,
    images,
    setImages
  };

  return (
    <ProductFormContext.Provider value={data}>
        {children}
    </ProductFormContext.Provider>
  )
}

export { ProductFormProvider };

export default ProductFormContext;