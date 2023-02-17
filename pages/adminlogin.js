import React, { useState, useEffect } from 'react';
import NotFoundItem from '../src/globals/NotFoundItem'
import axios from 'axios';
import env from '../src/env'
import LoadingPage from '../src/globals/LoadingPage'
import {login} from '../src/redux/actions/auth.actions'
import { useDispatch } from 'react-redux';

const Adminlogin = () => {
    const [access, setAccess] = useState(false);
    const [form, setForm] = useState({});
    const [status, setStatus] = useState({status: 'idle'});
    const dispatch = useDispatch();

    const getUserInfo = (token) => {
        console.log(token)
        axios.post(`${env.API_URL}/auth/login/identifyUser`, {token})
            .then(res => {
                localStorage.setItem('fukutoken', token);
                dispatch(login({
                    token,
                    ...res.data
                }));
                navigate(routes.home);
                console.log(res.data)
            })
            .catch(err => {
                if(err.response) {
                    setStatus({
                        status: 'error',
                        message: err.response.data.message
                    })
                }
            });
    }   

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({status: 'loading'});

        axios.post(`${env.API_URL}/auth/login`, form)
            .then((res) => {
                setStatus({status: 'success', message: 'Logeado correctamente.'})
                getUserInfo(res.data.token)
            })
            .catch(err => setStatus({status: 'error', message: err.response.data.message}))
    }

    useEffect(() => {
        const accessKey = localStorage.getItem('tureno86239-aarition-fukushoppu');
        
        if(accessKey === 'access') setAccess(true);
    }, []);

    if(!access) return <NotFoundItem title={'Página no encontrada.'} subtitle={'¡ups! parece que te has perdido :('} />

    if(status.status === 'loading') return <LoadingPage />

    return (
        <main className='center_sons' style={{width: '100vw', height: '90vh'}}>
            <div className="form_container" style={{width: '30%', height: '500px'}}>

                <form className="simple_form">
                    <div className="form_group">
                        <label htmlFor="username">Nombre de usuario</label>
                        <input onChange={(e) => handleChange(e)} type="text" name="username" id="username" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="password">Contraseña</label>
                        <input onChange={(e) => handleChange(e)} type="password" name="password" id="password" />
                    </div>

                    {status.status === 'error' && <p className='error_message'>{status.message}</p>}
                    {status.status === 'success' && <p className='success_message'>{status.message}</p>}

                    <button onClick={(e) => handleSubmit(e)} type="submit">Ingresar</button>
                </form>

            </div>
        </main>
    );
}

export default Adminlogin;
