import React from 'react';
import Select from 'react-select'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import CONFIG from '../Configuracion/Config'

class VistaRegistroEgresados extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: { value: '', label: '' },
            codigo: this.props.codigo,
            dni: this.props.dni,

            datos: Array.from([
                "SIGLA DEL PROGRAMA",
                "CODIGO ALUMNO",
                "AÑO DE INGRESO",
                "AÑO DE EGRESO",
            ]),
            opciones2: [],
            programaValue: 'Programa 1',
            cursos: [],
            programas: [],

        }
        this.handleChange = this.handleChange.bind(this);

    }

    componentWillMount() {

        //ANTERIOR LINK
        //https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-jdbc-client/alumno/alumnoprograma/programa/listar
        fetch(CONFIG + '/mse/alumno/conProgramaPorCodigo/' + this.state.dni)
            .then((response) => {
                return response.json()
            })
            .then((progs) => {
                this.setState({ cursos: progs })
                console.log(this.state.cursos);
                // console.log(alumno);

            })
            .catch(error => {
                // si hay algún error lo mostramos en consola
                console.error(error)
            });

        fetch(CONFIG + '/mse/alumno/conProgramas/' + this.state.codigo)
            .then((response) => {
                return response.json()
            })
            .then((programas) => {
                this.setState({ opciones2: programas,
                    value: programas[0]['value'] })
                // console.log(alumno);

            })
            .catch(error => {
                // si hay algún error lo mostramos en consola
                console.error(error)
            });
    }

    handleChange = (selectedOption) => {

        this.setState({
            value: selectedOption,
            programaValue: selectedOption.value,
        });
    }
    render() {
        return (
            <div className="contenedor">
                <div className="">
                    <h2 className="titulo">Formacion Academica en Posgrado</h2>

                    <div className="input-dato">
                        <label className="label-dato">
                            CODIGO DE ESTUDIANTE:
                            <input type="text" name="name" value={this.state.codigo} disabled />
                        </label>
                        <label className="label-dato">
                            PROGRAMA CURSADO:
                            <div className="SplitPane row">
                                <div className="col-xs-12">
                                    <div className="col-xs-8">
                                        <Select value={this.state.value} onChange={this.handleChange} options={this.state.opciones2}
                                            clearable={false} searchable={false} />
                                    </div>
                                </div>
                            </div>
                        </label>
                        <label className="label-dato">
                            SEMESTRE ACADEMICO QUE INGRESO:
                            <input type="text" name="name" required />
                        </label>
                        <label className="label-dato">
                            SEMESTRE ACADEMICO QUE EGRESO:
                            <input type="text" name="name" required />
                        </label>
                        <label className="label-dato">
                            SITUACION ACADEMICA ACTUAL:
                            <input type="text" name="name" required />
                        </label>
                        <br></br>
                        <input type="submit" value="Enviar" className="btn right" required />
                        <br></br><br></br>
                        <label className="label-dato">
                            VALORE LOS SERVICIOS UNIVERSITARIOS RECIBIDOS:
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td></td>
                                        {this.state.datos.map(da =>
                                            <td>{da}</td>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.cursos.map((col, index) =>
                                        <tr className="centrar-contenido">
                                            <td></td>
                                            <td>{col['siglaPrograma']}</td>
                                            <td>{col['codAlumno']}</td>
                                            <td>{col['anioIngreso']}</td>
                                            {col['anioEgreso'] ? (
                                                <td>{col['anioEgreso']}</td>
                                            ) : (
                                                    <td> - </td>
                                                )}
                                        </tr>
                                    )}

                                </tbody>


                            </table>
                        </label>

                    </div>

                </div>
            </div>
        );
    }
}

export default VistaRegistroEgresados;