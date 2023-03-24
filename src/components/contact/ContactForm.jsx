import axios from 'axios';
import React, { useState } from 'react'
import { HashLoader } from 'react-spinners';
import env from '../../env';

export default function ContactForm() {
  const [form, setForm] = useState({});
  const [status, setStatus] = useState({
    status: 'idle',
    message: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ status: 'loading' });

    axios.post(`${env.API_URL}/email/contact`, form)
      .then((res) => {
        setStatus({ status: 'success', message: '¡Gracias por contactarnos! Te responderemos lo más pronto posible 🧐' });
        setForm({});
      })
      .catch((err) => {
        setStatus({ status: 'error', message: '¡Ups! Algo salió mal, intenta de nuevo más tarde.' });
      });
  };

  if (status.status === 'loading') return (
    <div className="contact-form" style={{ width: '100%', padding: '20px 0 0 50px', display: 'flex', justifyContent: 'center' }}>
      <HashLoader color={'#fff'} loading={true} size={100} />
    </div>
  )

  return (
    <div
      className="contact-form"
      style={{ width: '100%', padding: '20px 0 0 50px' }}
      animation='appear'
    >

      <form method="POST" className='glassmorphism_form'>
        <div className="form_group">
          <label htmlFor="name">Name</label>
          <input onChange={(e) => handleChange(e)} type="text" name="name" id="name" className="form-control" placeholder="Tu nombre" />
        </div>

        <div className="form_group">
          <label htmlFor="subject">Asunto</label>
          <input onChange={(e) => handleChange(e)} type="text" name="subject" id="subject" className="form-control" placeholder="¿De qué quieres hablarnos?" />
        </div>

        <div className="form_group full">
          <label htmlFor="email">Email</label>
          <input onChange={(e) => handleChange(e)} type="email" name="email" id="email" className="form-control" placeholder="Escribe para poder contactarte :D" />
        </div>

        <div className="form_group full">
          <label htmlFor="message">Message</label>
          <textarea onChange={(e) => handleChange(e)} name="message" id="message" rows="5" className="form-control" placeholder="Escribe tu mensaje, ¡puedes dejarnos redes sociales o números de teléfono si quieres otro medio de respuesta!"></textarea>
        </div>

        <button onClick={(e) => handleSubmit(e)} type="submit" className="button_design" style={{ background: 'transparent', border: 'none' }}>
          <p>Enviar</p>
        </button>
      </form>

      {status.status === 'success' && <p animation='appear' style={{ textAlign: 'center', color: 'var(--color-success' }}>{status.message}</p>}
      {status.status === 'error' && <p animation='appear' style={{ textAlign: 'center', color: 'var(--color-danger' }}>{status.message}</p>}

      <style jsx>{`
      `}</style>
    </div>
  )
}