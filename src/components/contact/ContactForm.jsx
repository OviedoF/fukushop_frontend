import React from 'react'

export default function ContactForm() {
  return (
    <div
      className="contact-form"
      style={{ width: '100%', padding: '20px 0 0 50px' }}
      animation='appear'
    >

      <form  method="POST" className='glassmorphism_form' action="https://formsubmit.co/fukushop86239@gmail.com">
        <input type="hidden" name="_next" value="https://fukushop.com.ar/" />
        <input type="hidden" name="_subject" value="Nuevo mensaje!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_autoresponse" value="¡Hemos recibido tu mensaje!" />
        <input type="hidden" name="_template" value="table" />

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

        <button type="submit" className="button_design" style={{ background: 'transparent', border: 'none' }}>
          <p>Enviar</p>
        </button>
      </form>

      <style jsx>{`
      `}</style>
    </div>
  )
}