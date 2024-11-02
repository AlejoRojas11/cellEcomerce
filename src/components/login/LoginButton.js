import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LoginButton() {

    const { loginWithRedirect } = useAuth0()
  return (
    //botón para inicar sesión
    <div>
         <Link className="nav-link" onClick={() => loginWithRedirect()}><FontAwesomeIcon icon={faUser} /></Link>
    </div>
  )
}

export default LoginButton