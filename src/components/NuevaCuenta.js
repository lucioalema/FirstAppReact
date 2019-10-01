import React from 'react';
import ReactDOM from 'react-dom';
import Cliente from './Cliente';

class NuevaCuenta extends React.Component {
    constructor(props){
        super(props);
        this.volverCliente = this.volverCliente.bind(this);
    }
    volverCliente(){
        ReactDOM.render(<Cliente />, document.getElementById('root'));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="selTipoCuenta">Tipo de cuenta</label>
                        <select id="selTipoCuenta" className="form-control">
                            <option value="CA">Caja de Ahorro</option>
                            <option value="CC">Cuenta Corriente</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="txtSaldo">Saldo</label>
                        <input id="txtSaldo" type="number" className="form-control" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-warning" onClick={this.volverCliente}>Volver</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NuevaCuenta;