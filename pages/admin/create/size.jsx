import React, { useState, useEffect } from 'react';
import SizeForm from '../../../src/components/admin/forms/SizeForm';
import axios from 'axios';
import { useSelector } from 'react-redux';
import NotFoundItem from '../../../src/globals/NotFoundItem';
import LoadingPage from '../../../src/globals/LoadingPage';
import env from '../../../src/env';

const Size = () => {
    const [form, setForm] = useState({});
    const [buttonText, setButtonText] = useState('Crear talle');
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

        axios.post(`${env.API_URL}/sizes`, form)
            .then(res => {
                setButtonText('Talle creado');
                setForm({});
                setStatus({ status: 'success', message: 'Talle creado!' });
            })
            .catch(err => {
                setButtonText('Error al crear talle');
                setStatus({ status: 'error', message: 'Error al crear talle' });
            });
    }

    if (!auth) return <NotFoundItem />;

    if(status.status === 'loading') return <LoadingPage />;

    return (
        <main>
            <SizeForm status={status} handleChanges={handleChanges} data={{}} handleSend={handleSend} buttonText={buttonText} />
        </main>
    );
}

export default Size;
