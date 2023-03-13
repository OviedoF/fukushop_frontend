import React from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  return (
    <motion.div
      className="contact-form"
      style={{ width: '100%', padding: '20px 0 0 50px' }}
      initial={{ y: -50, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 2 }}
    >

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

        <button type="submit" className="button_design" style={{ background: 'transparent', border: 'none' }}>
          <p>Enviar</p>
        </button>
      </form>

      <style jsx>{`
        .contact-form{
          background: red !important;
        }
      `}</style>
    </motion.div>
  )
}