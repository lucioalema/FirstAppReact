import React from 'react'

class Cuenta extends React.Component {
    render() {
        const saldo = 150;
        return (
            <ul>
                <li>Caja de ahorro con <span>{saldo.toLocaleString("es-AR", {style: "currency", currency: "ARS"})}</span></li>
                <li>Cuenta corriente</li>
            </ul>
        );
    }
}

export default Cuenta;