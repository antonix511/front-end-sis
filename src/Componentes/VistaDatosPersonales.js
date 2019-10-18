import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { browserHistory } from 'react-router-3';
import CONFIG from '../Configuracion/Config'
import swal from 'sweetalert';


class VistaDatosPersonales extends React.Component {
    constructor(props) {
        super(props);

        dni: '',
        this.state = {
            codigo: this.props.codigo,
            apePaterno: "",
            apeMaterno: "",
            nombre: "",
            fechaNacimiento: "",
            domicilioActual: "",
            distrito: "",
            nTelefFijo: "",
            nTelefCelular: "",
            correoPersonal: "",
            correoLaboral: "",
        }


        this.onSubmitDatosPersonales = this.onSubmitDatosPersonales.bind(this);
    }


    //RENDERIZADO INFINITO
    componentDidMount() {
        fetch(CONFIG + 'mse/alumno/buscar/' + this.state.codigo)
            .then((response) => {
                return response.json();
            })
            .then((alumno) => {
                console.log("---Alumno---");
                console.log(alumno);
                this.setState({
                    apePaterno: alumno.apellidoPaterno,
                    apeMaterno: alumno.apellidoMaterno,
                    nombre: alumno.nombre,
                    fechaNacimiento: alumno.fechaNacimiento,
                    domicilioActual: alumno.domicilioActual,
                    distrito: alumno.distrito,
                    nTelefFijo: alumno.telefonoFijo,
                    nTelefCelular: alumno.telefonoCelular,
                    correoPersonal: alumno.correoPersonal,
                    correoLaboral: alumno.correoLaboral,
                });
            })
            .catch((error) => {
                swal("Algo salió mal", "", "warning")
                console.log(error);
            });
    }
    setField(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="contenedor">
                <div className="">
                    <h2 className="titulo">Datos Personales</h2>
                    <div className="input-dato">
                        <label className="label-dato">
                            N° DE DOCUMENTO DE IDENTIDAD (DNI O CARNE DE EXTRANJERÍA):
                            <input type="text" name="name" value={this.state.codigo} disabled />
                        </label>
                        <label className="label-dato">
                            APELLIDO PATERNO:
                            <input type="text" name="name" value={this.state.apePaterno} disabled />
                        </label>
                        <label className="label-dato">
                            APELLIDO MATERNO:
                            <input type="text" name="name" value={this.state.apeMaterno} disabled />
                        </label>
                        <label className="label-dato">
                            NOMBRES:
                            <input type="text" name="name" value={this.state.nombre} disabled />
                        </label>
                        <label className="label-dato">
                            FECHA DE NACIMIENTO:
                            <input type="text" name="name" value={this.state.fechaNacimiento} disabled />
                        </label>
                        <label className="label-dato">
                            DOMICILIO ACTUAL:
                            <input type="text" name="domicilioActual" value={this.state.domicilioActual} onChange={(e) => this.setField(e)} required />
                        </label>
                        <label className="label-dato">
                            DISTRITO:
                            <input type="text" name="distrito" value={this.state.distrito} onChange={(e) => this.setField(e)} required />
                        </label>
                        <label className="label-dato">
                            N° TELÉFONO FIJO:
                            <input type="number" name="nTelefFijo" value={this.state.nTelefFijo} onChange={(e) => this.setField(e)} required />
                        </label>
                        <label className="label-dato">
                            N° TELÉFONO CELULAR:
                            <input type="number" name="nTelefCelular" value={this.state.nTelefCelular} onChange={(e) => this.setField(e)} required />
                        </label>
                        <label className="label-dato">
                            CORREO ELECTRÓNICO PERSONAL:
                            <input type="text" name="correoPersonal" value={this.state.correoPersonal} onChange={(e) => this.setField(e)} required />
                        </label>
                        <label className="label-dato">
                            CORREO ELECTRÓNICO LABORAL:
                            <input type="text" name="correoLaboral" value={this.state.correoLaboral} onChange={(e) => this.setField(e)} required />
                        </label>
                        <input type="submit" value="Enviar" className="btn right" onClick={this.onSubmitDatosPersonales} />
                    </div>

                </div>
            </div>
        );
    }

    onSubmitDatosPersonales = (e) => {

        e.preventDefault();
        console.log("---ENVIA---");
        console.log(JSON.stringify({
            codigoAlumno: this.state.codigo,
            dni: this.state.dni,
            apellidoPaterno: this.state.apePaterno,
            apellidoMaterno: this.state.apeMaterno,
            nombre: this.state.nombre,
            fechaNacimiento: this.state.fechaNacimiento,
            domicilioActual: this.state.domicilioActual,
            distrito: this.state.distrito,
            telefonoFijo: this.state.nTelefFijo,
            telefonoCelular: this.state.nTelefCelular,
            correoPersonal: this.state.correoPersonal,
            correoLaboral: this.state.correoLaboral,
        }));

        fetch(CONFIG + 'mse/alumno/actualizar/', {
            method: 'PUT',
            body: JSON.stringify({
                codigoAlumno: this.state.codigo,
                dni: this.state.dni,
                apellidoPaterno: this.state.apePaterno,
                apellidoMaterno: this.state.apeMaterno,
                nombre: this.state.nombre,
                fechaNacimiento: this.state.fechaNacimiento,
                domicilioActual: this.state.domicilioActual,
                distrito: this.state.distrito,
                telefonoFijo: this.state.nTelefFijo,
                telefonoCelular: this.state.nTelefCelular,
                correoPersonal: this.state.correoPersonal,
                correoLaboral: this.state.correoLaboral,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                swal("Actualizado Correctamente", "", "success");
                return response.json();
            })
            .then((alumno) => {
                console.log("---RESPUESTA---");
                console.log(alumno);
            })
            .catch((error) => {
                swal("Algo salió mal", "", "warning");
                console.log(error);
            });


    }
}

export default VistaDatosPersonales;