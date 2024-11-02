import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './ContactoStyles.css'

function Contacto() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar el formulario
        console.log('Nombre:', name)
        console.log('Email:', email)
        console.log('Celular:', phone)
        console.log('Mensaje:', message)
    }

    return (
        <div>
            <Header />
            <div className="container contact-form mt-20">
                <div className='circulo'>

                <div className="contact-image">
                    <img src="https://cdn.icon-icons.com/icons2/1571/PNG/512/483486-contact-email-envelope-letter_107696.png" alt="rocket_contact" />
                </div>
                </div>
                <form method="post" onSubmit={handleSubmit}>
                    <h3>Contactanos</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="txtName"
                                    className="form-control"
                                    placeholder="Nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="txtEmail"
                                    className="form-control"
                                    placeholder="Correo electrónico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="txtPhone"
                                    className="form-control"
                                    placeholder="Celular"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea
                                    name="txtMsg"
                                    className="form-control"
                                    placeholder="Tu mensaje"
                                    style={{ width: '100%', height: '150px' }}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className="form-group text-center mt-2">
                            <button type="submit" className="btnContact btn btn-custom">
                                Enviar mensaje
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contacto