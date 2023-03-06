import React, { useState } from 'react'
import Header from '../components/Header'
import ModalVertically from './ModalVertically';
import ModalFullScreen from './ModalFullScreen';
import Button from 'react-bootstrap/Button';

const Diagnostic = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  /* const myModal = document.getElementById('myModal')
  const myInput = document.getElementById('myInput')

  myModal.addEventLisstener('shown.bs.modal', () => {
    myInput.focus()
  }) */
  return (
    <>
      <Header />
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className="fs-1">Bienvenido al diagnóstico de Referencia</h1>
              <h2 className="fs-3">Información del paciente</h2>
              <form action="">
                <label htmlFor="" className="form-label">
                  Nombre
                </label>
                <input className="form-control" type="text" name="" id="" />
                <label htmlFor="" className="form-label">
                  Edad
                </label>
                <h3 className="fs-3">Síntomas</h3>
                <p>Buscar un síntoma</p>
                <input type="search" name="" id="" className="form-control" />
              </form>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Ayuda
              </Button>
              <ModalVertically
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