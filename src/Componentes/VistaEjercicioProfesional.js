import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { browserHistory } from 'react-router-3';

class VistaEjercicioProfesional extends React.Component {
    constructor(props) {
        super(props);

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
            entidades: Array.from([
                "PUBLICA",
                "PRIVADA",
                "OTRO :"
            ]),
            vinculoLaboral: Array.from([
                "DEPENDIENTE",
                "INDEPENDIENTE",
                "CAS",
                "POR SERVICIO",
                "OTRO :"
            ]),


            datos: Array.from([
                "ENTIDAD",
                "TIPO ENTIDAD",
                "CARGO",
                "FUNCIONES",
                "VINCULO LABORAL",
                "FECHA INICIO",
                "FECHA FIN",
                "JEFE INM SUP.",
                "CORREO JEFE INM SUP."
            ]),

            columnas: Array.from([
                Array.from([
                    "1236558541",
                    "PRIVADA",
                    "ANALISTA DE SIST",
                    "ANALISTA",
                    "DEPENDIENTE",
                    "05-05-2018",
                    "06-05-2018",                    
                    "XXXXXXXXXX",
                    "XXXXXXXXXX@gmail.com",
                ]),
                Array.from([
                    "5546585545",
                    "PUBLICA",
                    "ASISTENTE DEL ANALISTA",
                    "ASISTENTE",
                    "POR SERVICIO",
                    "04-05-2018",
                    "06-05-2018",                    
                    "XXXXXXXXXX",
                    "XXXXXXXXXX@gmail.com",
                ]),
            ]),
        }
    }
    //RENDERIZADO INFINITO
    componentDidMount() {
        this.setState({
            apePaterno: "Diaz",
            apeMaterno: "Carpio",
            nombre: "Anthony Moisés",
            fechaNacimiento: "13-05-1999",
            domicilioActual: "",
            distrito: "",
            nTelefFijo: "",
            nTelefCelular: "",
            correoPersonal: "",
            correoLaboral: "",
        });
    }
    setField(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    inputs() {
        this.state.entidades.map(function (item, i) {
            console.log('test');
            return <li key={i}>Test</li>
        })
    }

    render() {
        return (
            <div className="contenedor">
                
                <div className="">
                    <h2 className="titulo">EJERCICIO PROFESIONAL O DOCENTE</h2>
                    <p>Consigne el desempeño profesional o desempeño docente: Entidaden la que labora, Cargo que desempeña, tiempo (años, meses) del servicio. [El mas reciente]</p>
                    <div className="input-dato">
                        <label className="label-dato">
                            ENTIDAD:
                            <input type="text" name="name" value={this.state.codigo} disabled />                            
                        </label>
                        <label className="label-dato">
                            TIPO

                            {this.state.entidades.map(entidad =>
                                <label>
                                    <input name="group1" type="radio" />
                                    {entidad!="OTRO :" ? (
                                        <span className="span">{entidad}</span>
                                    ) : (
                                        <span className="entidad-input span"> {entidad}
                                        
                                        <label className="label-dato">                                                
                                                <input type="text" name="name"/>
                                        </label>    
                                        </span>         
                                                                   
                                    )}
                                </label>
                            )}
                        </label>
                        <br></br>
                        <label className="label-dato">
                            CARGO
                            <input type="text" name="name" />
                        </label>
                        <label className="label-dato">
                            PRINCIPALES FUNCIONES QUE DESEMPEÑA
                            <p>Comente las principales funciones que desempeña</p>
                            <input type="text" name="name" />
                        </label>
                        
                        <label className="label-dato">
                            TIPO DE VINCULO LABORAL

                            {this.state.vinculoLaboral.map(vinculo =>
                                <label>
                                    <input name="group1" type="radio" />
                                    {vinculo!="OTRO :" ? (
                                        <span className="span">{vinculo}</span>
                                    ) : (
                                        <span class="entidad-input span"> {vinculo}
                                        
                                        <label className="label-dato">
                                                
                                                <input type="text" name="name" />
                                            </label>    
                                        </span>         
                                                                   
                                    )}
                                </label>
                            )}
                        </label>
                        
                        <br></br>
                        <label className="label-dato">
                            FECHA DE INICIO
                            <p>La fecha de inicio del trabajo</p>
                            <input type="text" name="name" />
                        </label>
                        <label className="label-dato">
                            FECHA DE FIN
                            <p>La fecha de finalización del trabajo</p>
                            <input type="text" name="name" />
                        </label>
                        <label className="label-dato">
                            NOMBRE DE SU JEFE INMEDIATO SUPERIOR
                            <input type="text" name="name" />
                        </label>
                        
                        <label className="label-dato">
                            CORREO ELECTRÓNICO DE SU JEFE INMEDIATO SUPERIOR
                            <input type="email" name="name" />
                        </label>
                        <input type="submit" value="Enviar" className="btn right" />
                    </div>

                    <br></br>
                    <br></br>


                    <table className="table">
                        <thead>
                            <tr>
                                {this.state.datos.map(da =>
                                    <td>{da}</td>
                                )}
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.columnas.map((col, index) =>
                                <tr className="centrar-contenido">
                                    <td>{col[0]}</td>
                                    <td>{col[1]}</td>
                                    <td>{col[2]}</td>
                                    <td>{col[3]}</td>
                                    <td>{col[4]}</td>
                                    <td>{col[5]}</td>
                                    <td>{col[6]}</td>
                                    <td>{col[7]}</td>
                                    <td>{col[8]}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default VistaEjercicioProfesional;