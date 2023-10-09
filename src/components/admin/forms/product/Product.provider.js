import React, { createContext, useState } from 'react';
import axios from 'axios';
import env from '../../../../env';
import { useSnackbar } from 'notistack'
import { animateScroll as scroll } from 'react-scroll';

export const ProductFormContext = createContext();

const initialState = {
  colors: [],
};

function ProductFormProvider({ children, setCreateStatus, categories, subCategories, types, sizes, colors }) {
  const [form, setForm] = useState(initialState);
  const [variants, setVariants] = useState([]);
  const [images, setImages] = useState({});
  const { enqueueSnackbar } = useSnackbar();

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
    setCreateStatus({ status: 'loading', message: 'Creando producto...' })
    const formData = new FormData();

    formData.append('body', JSON.stringify(form));

    const imagesKeys = Object.keys(images);

    imagesKeys.forEach(key => {
      formData.append(key, images[key].image);

      images[key].gallery.forEach(image => {
        formData.append(key, image);
      });
    });

    axios.post(`${env.API_URL}/products`, formData)
        .then(res => {
          enqueueSnackbar('Producto creado correctamente', { variant: 'success' });
          scroll.scrollToTop()
          setCreateStatus({ status: 'success', message: 'Producto creado correctamente' })
        })
        .catch(err => {
          enqueueSnackbar('Error al crear el producto', { variant: 'error' });
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