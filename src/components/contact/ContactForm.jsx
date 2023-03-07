import React from 'react'

export default function ContactForm() {
  return (
    <div className="contact-form" style={{width: '100%', padding: '20px 100px'}}>

      <form action="https://formspree.io/f/xnqoqzjy" method="POST" className='glassmorphism_form '>
        <div className="form_group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="form-control" placeholder="Tu nombre" />
        </div>

        <div className="form_group">
          <label htmlFor="subject">Asunto</label>
          <input type="text" name="subject" id="subject" className="form-control" placeholder="¿De qué quieres hablarnos?" />
        </div>

        <div className="form_group full">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="form-control" placeholder="Escribe para poder contactarte :D" />
        </div>

        <div className="form_group full">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" className="form-control" placeholder="Escribe tu mensaje, ¡puedes dejarnos redes sociales o números de teléfono si quieres otro medio de respuesta!"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Enviar mensaje</button>
      </form>

    </div>
  )
}