import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


function LogoutButton() {
    const { logout, user } = useAuth0();
    return (
        //botón para cerrar sesión
        <div >
            <img onClick={() => logout()} className="img-fluid rounded-circle " style={{ maxWidth: "35px", maxHeight: "40px"}} src={user.picture} alt={user.name} />
        </div>


    )
}

export default LogoutButton