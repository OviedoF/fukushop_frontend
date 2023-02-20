import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NotFoundItem from '../../../src/globals/NotFoundItem';
import LoadingPage from '../../../src/globals/LoadingPage';
import env from '../../../src/env';

const Category = () => {
    const auth = useSelector(state => state.auth);
    const [form, setForm] = useState({});
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [buttonText, setButtonText] = useState('Crear categoría');
    const [data, setData] = useState(null);
    const [status, setStatus] = useState({ status: 'idle' });

    if (!auth) {
        return <NotFoundItem />;
    }

    const handleChanges = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSend = (e) => {
        e.preventDefault();
        setStatus({ status: 'loading' });
        console.log(form)

        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('images', form.image);

        axios.post(`${env.API_URL}/category`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(res => {
                setForm({});
                setBackgroundImage(null);
                setStatus({ status: 'success', message: 'Categoría creada!' });
            })
            .catch(err => {
                setButtonText('Error al crear categoría');
                setStatus({ status: 'error', message: err.response.data.message });
            });
    }

    if(status.status === 'loading') return <LoadingPage />;

    return (
        <main>
            <form action="POST" className='form_container first_design'>
                <div className="form-group required full">
                    <input onChange={(e) => handleChanges(e)} type="text" name='name' defaultValue={data && data.name} placeholder='Nombre de la categoría' />
                </div>

                <div className="form-group required full">
                    <textarea onChange={(e) => handleChanges(e)} name='description' placeholder='Descripción de su categoría' defaultValue={data && data.description} />
                </div>

                <div className="form-group required full" style={{ background: `url(${backgroundImage}) center/contain no-repeat` }}>
                    <label className="image-picker" htmlFor="image">Seleccionar imágen principal</label>
                    <input onChange={(e) => {
                        setForm({
                            ...form,
                            [e.target.name]: e.target.files[0],
                            fakeImage: URL.createObjectURL(e.target.files[0])
                        });
                        setBackgroundImage(URL.createObjectURL(e.target.files[0]))
                    }} type="file" name="image" id="image" />
                </div>

                {status.status === 'error' && <p className='blocks_design_error'>{status.message}</p>}
                {status.status === 'success' && <p className='blocks_design_success'>{status.message}</p>}

                <button type='submit' onClick={(e) => handleSend(e)}>{buttonText}</button>
            </form>
        </main>
    );
}

export default Category;
