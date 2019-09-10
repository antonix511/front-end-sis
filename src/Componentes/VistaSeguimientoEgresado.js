import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {browserHistory} from 'react-router-3';


class VistaSeguimientoEgresado extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form1: true,
            form2: false,
            form3: false,
            form4: false,
            codigo: this.props.params.name,
        }
        
        this.Regresar=this.Regresar.bind(this);
    }

    Formulario1=(e)=>{
        this.setState({
            form1: true,
            form2: false,
            form3: false,
            form4: false,
        });
        e.preventDefault();
        
    }
    Formulario2=(e)=>{
        this.setState({
            form1: false,
            form2: true,
            form3: false,
            form4: false,
        });
        e.preventDefault();
    }
    Formulario3=(e)=>{
        this.setState({
            form1: false,
            form2: false,
            form3: true,
            form4: false,
        });
        e.preventDefault();
    }
    Formulario4=(e)=>{
        this.setState({
            form1: false,
            form2: false,
            form3: false,
            form4: true,
        });
        e.preventDefault();
    }

    Regresar=(e)=>{
        browserHistory.push('/'+this.state.codigo);
        e.preventDefault();
    }

    render() {
        return (
            <div className="">

                <h3>FACULTAD DE INGENIERIA DE SISTEMAS E INFORMATICA
                <ul id="nav-mobile" className=" row right  hide-on-med-and-down">
                    <li ><a className="seleccionar col" onClick={this.Regresar} >Regresar<i className="material-icons right">reply</i></a></li>
                </ul>
                </h3>

                <div className="">
                    <main className="content-menu">
                        <div class="collection collection-left content-menu-left">
                            <a href="#" onClick={this.Formulario1} class={`collection-item ${ this.state.form1 ? 'active': '' }`}><i className="small material-icons left">home</i>Formulario 1</a>
                            <a href="#" onClick={this.Formulario2} class={`collection-item ${ this.state.form2 ? 'active': '' }`}><i className="small material-icons left">home</i>Formulario 2</a>
                            <a href="#" onClick={this.Formulario3} class={`collection-item ${ this.state.form3 ? 'active': '' }`}><i className="small material-icons left">home</i>Formulario 3</a>
                            <a href="#" onClick={this.Formulario4} class={`collection-item ${ this.state.form4 ? 'active': '' }`}><i className="small material-icons left">home</i>Formulario 4</a>
                        </div>
                        <div className="content-menu-right">
                            {this.state.form1 ? (
                                <div>
                                    <p>Form1</p>
                                </div>
                            ) : (null)}
                            {this.state.form2 ? (
                                <div>
                                    <p>Form2</p>
                                </div>
                            ) : (null)}
                            {this.state.form3 ? (
                                <div>
                                    <p>Form3</p>
                                </div>
                            ) : (null)}
                            {this.state.form4 ? (
                                <div>
                                    <p>Form4</p>
                                </div>
                            ) : (null)}
                        </div>
                    </main>

                </div>
            </div>
        );
    }
}

export default VistaSeguimientoEgresado;