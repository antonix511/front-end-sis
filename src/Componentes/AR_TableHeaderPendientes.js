import React from 'react'

class AR_tableHeaderPendientes extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return(
            <thead>
                <tr>
                    <th className="th">ID_REC</th>
                    <th className="th">Descripcion</th>
                    <th className="th">apellidos y nombres</th>
                    <th className="th">funcion</th>
                    <th className="th">Concepto</th>
                    
                    <th className="th">Fecha</th>                    
                    <th className="th">Importe</th>

                    {/* <th className="th">Código Alumno</th>
                    <th className="th">Programa</th>

                    <th className="th">Codigo / Programa a escoger</th>
                    <th className="th">Buscar</th>
                    <th className="th">Guardar</th> */}
                </tr>
            </thead>
        )
    }

}
export default AR_tableHeaderPendientes