import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import NotFoundItem from '../../../src/globals/NotFoundItem';
import LoadingPage from '../../../src/globals/LoadingPage';
import env from '../../../src/env';

const Clothetype = () => {
    const auth = useSelector(state => state.auth);
    const [form, setForm] = useState({});
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [buttonText, setButtonText] = useState('Crear tipo de prenda');
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

        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('image', form.image);

        axios.post(`${env.API_URL}/types`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(res => {
                setForm({});
                setBackgroundImage(null);
                setStatus({ status: 'success', message: 'Tipo de prenda creado!' });
            })
            .catch(err => {
                setStatus({ status: 'error', message: 'Error al crear tipo de prenda' });
            });
    }

    if(status.status === 'loading') return <LoadingPage />;

    return (
        <main>
            <form action="POST" className='form_container first_design'>
                <div className="form-group required full">
                    <input onChange={(e) => handleChanges(e)} type="text" name='name' defaultValue={data && data.name} placeholder='Nombre de la tipo de prenda' />
                </div>

                <div className="form-group required full">
                    <textarea onChange={(e) => handleChanges(e)} name='description' placeholder='Descripci??n de su tipo de prenda' defaultValue={data && data.description} />
                </div>

                <div className="form-group required full" style={{ background: `url(${backgroundImage}) center/contain no-repeat` }}>
                    <label className="image-picker" htmlFor="image">Seleccionar im??gen principal</label>
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
    )
}

export default Clothetype;
