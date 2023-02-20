import React, { useState } from 'react';
import ColorForm from '../../../src/components/admin/forms/ColorForm';
import axios from 'axios';
import { useSelector } from 'react-redux';
import NotFoundItem from '../../../src/globals/NotFoundItem';
import LoadingPage from '../../../src/globals/LoadingPage';
import env from '../../../src/env';

const Color = () => {
    const [form, setForm] = useState({});
    const [buttonText, setButtonText] = useState('Crear color');
    const [status, setStatus] = useState({ status: 'idle' });
    const auth = useSelector(state => state.auth);

    const handleChanges = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSend = (e) => {
        e.preventDefault();
        setStatus({ status: 'loading' });


        if(!form.name || !form.hex || !form.imageKey) return setStatus({ status: 'error', message: 'Todos los campos son requeridos' });

        axios.post(`${env.API_URL}/productColor`, form)
            .then(res => {
                setForm({});
                setStatus({ status: 'success', message: 'Color creado!' });
            })
            .catch(err => {
                setButtonText('Error al crear talle');
                setStatus({ status: 'error', message: 'Error al crear color' });
            });
    }

    if (!auth) return <NotFoundItem />;

    if(status.status === 'loading') return <LoadingPage />;

    return (
        <main>
            <ColorForm status={status} handleChanges={handleChanges} data={{}} handleSend={handleSend} buttonText={buttonText} />   
        </main>
    );
}

export default Color;
