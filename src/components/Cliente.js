import React from 'react'
import ReactDOM from 'react-dom';
import NuevaCuenta from './NuevaCuenta';
import Cuenta from './Cuenta';

class Cliente extends React.Component {
    constructor(props) {
        super(props);
        this.agregarCuenta = this.agregarCuenta.bind(this);
    }
    agregarCuenta(){
        ReactDOM.render(<NuevaCuenta />, document.getElementById('root'));
        //alert('Agregando una nueva cuenta');
    }
    render() {
        return (
            <div>
                <h1>El cliente {this.props.nombre} tiene las siguientes cuentas</h1>
                <Cuenta />
                <button className="btn btn-primary" onClick={this.agregarCuenta}>Agregar cuenta</button>
            </div>
        );
    }
}

export default Cliente;