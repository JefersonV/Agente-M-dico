import React, { useState } from 'react'
import Header from '../components/Header'
import ModalVertically from './ModalVertically';
import ModalFullScreen from './ModalFullScreen';
import Button from 'react-bootstrap/Button';
import { sintomasEnfermedadesComunes, sintomas, sintomasUnicos } from '../Base'

const Diagnostic = () => {
  const [modalShow, setModalShow] = React.useState(false);

  console.log(sintomas)
  
  return (
    <>
      <Header />
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className="fs-2 mb-4">Diagnóstico de Referencia</h1>
              <h2 className="fs-4">Información del paciente</h2>
              <form action="">
                <div className="input-group my-4">
                  <label htmlFor="" className="form-label">
                    Nombre
                  </label>
                  <input className="form-control" type="text" name="" id="" />
                  <label htmlFor="" className="form-label">
                    Edad
                  </label>
                  <input className="form-control" type="number" name="" id="" />
                </div>
                <h3 className="fs-3">Síntomas</h3>
                <label htmlFor=""></label>
                <i className="bi bi-search"></i>
                <input type="search" placeholder="Ingresa el nombre del síntoma..." name="" id="" className="form-control mb-4" 
                />
              </form>
              {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                Ayuda
              </Button> */}
              <ModalVertically
                /* PROPS  */
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <div className="col">
              <h3>Tabla de síntomas de tu búsqueda</h3>
              
              <table className="table table-striped table-info">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th className="col">Seleccionar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td><input type="checkbox" name="" className="form" id="" /></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td><input type="checkbox" name="" className="form" id="" /></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <ModalFullScreen 
                /* PROPS */
                clase={"me-2 mb-2 disabled"}
              />
            </div>
          </div>
        </div>

      </div>{/* 
      
      <button onClick={() => setModalShow(true)}>Test</button> */}
    </>
  )
}

export default Diagnostic