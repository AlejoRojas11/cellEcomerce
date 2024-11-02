import React, { useRef, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./PasarelaStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faMobileScreen,
  faMapMarkerAlt,
  faCreditCard,
  faCalendarAlt,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../../components/carrito/CartContext";

//Validaciones con la libreria de yup
const PasarelaSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("El nombre es requerido"),
  pais: Yup.string().required("El país es requerido"),
  ciudad: Yup.string().required("La ciudad es requerida"),
  direccion: Yup.string().required("La dirección es requerida"),
  telefono: Yup.string()
    .matches(/^\d{10}$/, "El teléfono debe tener 10 dígitos")
    .required("El teléfono es requerido"),
  tarjeta: Yup.string()
    .matches(/^\d{16}$/, "El número de tarjeta debe tener 16 dígitos")
    .required("El número de tarjeta es requerido"),

  codigo: Yup.string()
    .matches(/^\d{3}$/, "El código de seguridad debe tener 3 dígitos")
    .required("El código de seguridad es requerido"),
  fechaVencimiento: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Ingrese una fecha válida (MM/YY)")
    .required("La fecha de vencimiento es requerida"),
});

function Pasarela() {
  const { user } = useAuth0();
  const { calculateTotal, formatPrice, cartProducts, clearCart } = useContext(CartContext);

  const handleSubmit = async (values) => {
    console.log("Formulario enviado");
    try {
      // Enviar la solicitud POST
      const response = await fetch("https://ecommerce-celulares-back.onrender.com/orden", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      // Manejar la respuesta
      if (response.ok) {
        // La solicitud se realizó correctamente
        const data = await response.text(); // Obtén el mensaje del servidor
        console.log("Respuesta del servidor:", data);
        // Mostrar la alerta de éxito con el mensaje del servidor
        Swal.fire({
          title: "Orden realizada con éxito",
          text: data,
          icon: "success",
          customClass: {
            popup: "my-custom-popup-class",
          },
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
            clearCart()
            window.location.href = '/';
        });
        
      } else {
        // Ocurrió un error en la solicitud
        console.error("Error en la solicitud:", response.status);
        // Mostrar la alerta de error con el mensaje del servidor
        const errorData = await response.text(); // Obtén el mensaje de error del servidor
        Swal.fire({
          title: "No fue posible realizar la orden",
          text: errorData,
          icon: "error",
          customClass: {
            popup: "my-custom-popup-class",
          },
          showConfirmButton: true,
          timer: 4500,
        });
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);

      if (error == 500) {
        Swal.fire({
          title: "No fue posible finalizar el proceso de orden por un error",
          text: `Error: ${error}`,
          icon: "error",
          customClass: {
            popup: "my-custom-popup-class",
          },
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center min-vh-100 body  ">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div className="col-md-12 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4 text-center">
                <h2>Formulario de Pago</h2>
              </div>
              <Formik
                initialValues={{
                  nombre: user.name,
                  correo: user.email,
                  pais: "",
                  ciudad: "",
                  direccion: "",
                  telefono: "",
                  tarjeta: "",
                  codigo: "",
                  fechaVencimiento: "",
                  total: calculateTotal(),
                  productos: cartProducts.join(', ')
                }}
                validationSchema={PasarelaSchema}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form>
                    <div className="mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        <Field
                          type="text"
                          name="nombre"
                          className="form-control form-control-lg bg-light fs-6"
                          placeholder="Nombre"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <Field
                          type="email"
                          name="correo"
                          className="form-control form-control-lg bg-light fs-6"
                          placeholder="Correo electrónico"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </span>
                        <Field
                          type="text"
                          name="pais"
                          className="form-control form-control-lg bg-light fs-6"
                          placeholder="País"
                        />
                      </div>
                      <ErrorMessage
                        name="pais"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </span>
                        <Field
                          type="text"
                          name="ciudad"
                          className="form-control form-control-lg bg-light fs-6"
                          placeholder="Ciudad"
                        />
                      </div>
                      <ErrorMessage
                        name="ciudad"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </span>
                        <Field
                          type="text"
                          name="direccion"
                          className="form-control form-control-lg bg-light fs-6"
                          placeholder="Dirección"
                        />
                      </div>
                      <ErrorMessage
                        name="direccion"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faMobileScreen} />
                        </span>
                        <Field
                          type="text"
                          name="telefono"
                          className="form-control form-control-lg bg-light fs-6"
                          placeholder="Teléfono"
                        />
                      </div>
                      <ErrorMessage
                        name="telefono"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faCreditCard} />
                        </span>
                        <Field
                          type="text"
                          name="tarjeta"
                          className="form-control form-control-lg bg-light fs-6"
                          placeholder="Número de tarjeta"
                        />
                      </div>
                      <ErrorMessage
                        name="tarjeta"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faLock} />
                          </span>
                          <Field
                            type="text"
                            name="codigo"
                            className="form-control form-control-lg bg-light fs-6"
                            placeholder="Código de seguridad"
                          />
                        </div>
                        <ErrorMessage
                          name="codigo"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                          </span>
                          <Field
                            type="text"
                            name="fechaVencimiento"
                            className="form-control form-control-lg bg-light fs-6"
                            placeholder="Fecha de vencimiento (MM/YY)"
                          />
                        </div>
                        <ErrorMessage
                          name="fechaVencimiento"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <p>Total:</p>
                      <div className="input-group">
                        <Field
                          type="text"
                          name="total"
                          className="form-control form-control-lg bg-light fs-6"
                          placeholder="Total"
                          value={`$${formatPrice(calculateTotal())} COP`}
                          disabled
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                        <p>Productos:</p>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                        <Field
                          type="text"
                          name="productos"
                          className="form-control form-control-lg bg-light fs-6"
                          placeholder="Productos"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="input-group mb-3 mt-3">
                      <button
                        type="submit"
                        className="btn btn-lg btn-primary w-100 fs-6"
                      >
                        Realizar Pago
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pasarela;
