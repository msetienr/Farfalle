import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'; 

const IniciarSesion = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <h1>Página de Iniciar Sesion</h1>
        </div>
    );
};

export default IniciarSesion;