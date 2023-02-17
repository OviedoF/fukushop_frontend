import React, { useState } from 'react';
import { useQuery } from 'react-query';
import env from '../../../src/env';
import LoadingPage from '../../../src/globals/LoadingPage';
import ErrorPage from '../../../src/globals/ErrorPage';

const Subtype = () => {
    const [form, setForm] = useState({});
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [buttonText, setButtonText] = useState('Crear sub-tipo');
    const [data, setData] = useState(null);
    const [status, setStatus] = useState({ status: 'idle' });
    const { data: types, status: statusGet } = useQuery('types', async () => {
        const response = await fetch(`${env.API_URL}/types`)
        return response.json()
    })

    const handleChanges = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const action = (e) => {
        e.preventDefault();
        // setStatus({ status: 'loading' });
        console.log(form)
    }

    if (status.status === 'loading' || statusGet === 'loading') return <LoadingPage />;

    if (statusGet === 'error') return <ErrorPage />

    return (
        <main>
            <form action="" className='form_container first_design'>
                <div className="form-group required">
                    <input onChange={(e) => handleChanges(e)} type="text" name='name' defaultValue={data && data.name} placeholder='Nombre de la sub-tipo' />
                </div>

                <div className="form-group required">
                    <select onChange={(e) => handleChanges(e)} name='category' placeholder="Seleccione tipo a la que pertenece" defaultValue={data && data.category}>
                        {data && data.category ? <option value={data.category._id}>{data.category.name}</option> : <option value={undefined}>Selecciona una tipo</option>}

                        {types.map(el => (
                            <option value={el._id}>{el.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group required">
                    <textarea name='description' onChange={(e) => handleChanges(e)} placeholder='Descripción de la sub-tipo' defaultValue={data && data.description} />
                </div>

                <div className="form-group required" style={{ background: `url(${backgroundImage}) center/cover no-repeat` }}>
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

                <button type='submit' onClick={(e) => action(e)}>{buttonText}</button>
            </form>
        </main>
    );
}

export default Subtype;
