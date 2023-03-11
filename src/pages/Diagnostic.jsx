import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import ModalVertically from './ModalVertically';
import ModalFullScreen from './ModalFullScreen';
import Button from 'react-bootstrap/Button';
/* Base de conocimiento */
import { sintomasEnfermedadesComunes, sintomasComunes, sintomasUnicos,sintomaCompleto } from '../Base'
import Switch from '../components/Switch';

const Diagnostic = () => {
  const [modalShow, setModalShow] = useState(false);
  const [diseaseFound, setDiseaseFound] = useState('Esperando..') 
  const [sintomasSeleccionados, setSintomasSeleccionados] = useState([])

  const [datosUsuario, setDatosUsuario] = useState([])

  const handleOnChange = e => {
    setDatosUsuario(e.target.value)
    console.log(datosUsuario)
  }
  /* Indicador */
  const [sintomaCompleto, setSintomaCompleto] = useState([])
  /* 
  console.warn('Sintomas comunes')
  // Primera palabra del síntoma
  console.log(sintomasComunes)
  
  // console.log(sintomasEnfermedadesComunes)
  // Primera palabra sin repetir
  console.warn('Sintomas unicos')
  console.log(sintomasUnicos)
  
  // Sintomas completos
  console.warn('Sintomas completos')
  console.log(sintomasEnfermedadesComunes) */
  
  const [sintomasEnfermedadesComunesState, setSintomasEnfermedadesComunesState] = useState(sintomasEnfermedadesComunes)
  let cantidadDeSintomas = 0
  
  /* array que se llenará según las acciones del usuario */
  const criteriosEnfermedades = [
    // Array de criterios (ids) de los sintomas de cada enfermedad
    { nombre: "Resfriado común", sintomas: [1, 2, 3, 4, 5, 6, 7] },
    { nombre: "Gripe", sintomas: [8, 9, 10, 11, 12, 13, 14, 15] },
    { nombre: "Alergias", sintomas: [16, 17, 18, 19, 20, 21] },
    { nombre: "Hipertensión arterial", sintomas: [22, 23, 24, 25, 26, 27, 28] },
    { nombre: "Diabetes tipo 2", sintomas: [29, 30, 31, 32, 33, 34, 35] },
    { nombre: "Obesidad", sintomas: [36, 37, 38, 39, 40, 41] },
    { nombre: "Depresión", sintomas: [42, 43, 44, 45, 46, 47, 48, 49] },
    { nombre: "Ansiedad", sintomas: [50, 51, 52, 53, 54, 55, 56] },
    { nombre: "Acidez Estomacal", sintomas: [57, 58, 59, 60, 61, 62, 63] },
    { nombre: "Conjuntivitis", sintomas: [64, 65, 66, 67, 68, 69]},
    {nombre: "Náuseas y vómitos", sintomas: [70, 71, 72, 73, 74, 75, 76]}
  ];

  const array_equal = (arraySintomas, arrayCriterios) => {
    if ((Array.isArray(arraySintomas) && Array.isArray(arrayCriterios)) === false) return false;
    return JSON.stringify([...new Set(arraySintomas.flat().sort())]) === JSON.stringify([...new Set(arrayCriterios.flat().sort())]);
  }

  console.warn('CRITERIOS')
  console.log(criteriosEnfermedades[0].sintomas)
  console.warn('iguales en contenido')
  console.log(array_equal(sintomasSeleccionados,criteriosEnfermedades[0].sintomas))
  
  let titulo = ''
  /* Identificar la enfermedad según los sintomas */
  const queEnfermedad = (arraySintomas) => {
    /*  */
    if(array_equal(arraySintomas,criteriosEnfermedades[0].sintomas)) {
      // setDiseaseFound('asdf')
      titulo = criteriosEnfermedades[0].nombre
      // console.log(titulo)
      // console.log(typeof(titulo))
    } 
    if(array_equal(arraySintomas,criteriosEnfermedades[1].sintomas)) {
      titulo = criteriosEnfermedades[1].nombre
    }
    if(array_equal(arraySintomas,criteriosEnfermedades[2].sintomas)) {
      titulo = criteriosEnfermedades[2].nombre
    }
    if(array_equal(arraySintomas,criteriosEnfermedades[3].sintomas)) {
      titulo = criteriosEnfermedades[3].nombre
    }
    if(array_equal(arraySintomas,criteriosEnfermedades[4].sintomas)) {
      titulo = criteriosEnfermedades[4].nombre
    }
    if(array_equal(arraySintomas,criteriosEnfermedades[5].sintomas)) {
      titulo = criteriosEnfermedades[5].nombre
    }
    if(array_equal(arraySintomas,criteriosEnfermedades[6].sintomas)) {
      titulo = criteriosEnfermedades[6].nombre
    }
    if(array_equal(arraySintomas,criteriosEnfermedades[7].sintomas)) {
      titulo = criteriosEnfermedades[7].nombre
    }
    if(array_equal(arraySintomas,criteriosEnfermedades[8].sintomas)) {
      titulo = criteriosEnfermedades[8].nombre
    }
    if(array_equal(arraySintomas,criteriosEnfermedades[9].sintomas)) {
      titulo = criteriosEnfermedades[9].nombre
    }
    if(array_equal(arraySintomas,criteriosEnfermedades[10].sintomas)) {
      titulo = criteriosEnfermedades[10].nombre
    }
  }

  // setDiseaseFound(titulo)
  queEnfermedad(sintomasSeleccionados)
  /*Buscador  */
  // state para buscador
  const [search, setSearch] = useState("")
  const searcher = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  useEffect(()=> {
    /* Enfermedad detectada */
    setDiseaseFound(titulo)
    console.warn('Disease')
    console.log(diseaseFound)
  })

  const resultsSearch = !search ? sintomasEnfermedadesComunesState
    : sintomasEnfermedadesComunesState.filter((dato) => 
      dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
      // && dato.nombre.length === search.length
      // resto de campos
    )
  // console.log(sintomasSeleccionados)
  // sintomasDelPaciente(idsComunes, sintomasSeleccionados)
  
  return (
    <>
      <Header />
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              {/* <h1 className="fs-2 mb-4">Diagnóstico de Referencia</h1> */}
              <h2 className="fs-3">Información del paciente</h2>
              <form action="">
                <div className="input-group my-4">
                  <label htmlFor="" className="form-label">
                    Nombre
                  </label>
                  <input 
                    className="form-control" 
                    type="text" 
                    name="" 
                    id="" 
                    onChange={handleOnChange} />
                  <label htmlFor="" className="form-label">
                    Edad
                  </label>
                  <input className="form-control" type="number" name="" id="" />
                </div>
                <h3 className="fs-3">Búsqueda de síntomas</h3>
                <label htmlFor=""></label>
                <i className="bi bi-search"></i>
                <input 
                  type="search" 
                  onChange={searcher}
                  placeholder="Ingresa el nombre del síntoma..." 
                  name="" 
                  id="" 
                  className="form-control mb-4" 
                />
              </form>
              <h3 className="fs-4">Tabla de síntomas</h3>
              <table className="table table-striped table-bordered my-4">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Sintoma</th>
                    <th scope="col">Accion</th>
                  </tr>
                </thead>
                <tbody>
                  
                  { search === ''  ? (
                    <tr>
                      <td colSpan="3">Debes ingresar palabras clave para encontrar tu síntoma</td>
                    </tr>
                  )   
                  :
                  resultsSearch.map((item,index) => 
                    <tr key={index}>
                      <th>{index+1}</th>
                      <td>{item.nombre}</td>
                      <td>
                        {/* <Switch ></Switch> */}
                        <input
                          type="checkbox"
                          checked={sintomasSeleccionados.includes(item.id)}
                          onChange={(e) => {
                            // queEnfermedad(sintomasSeleccionados)
                            
                          if (e.target.checked) {
                            setSintomasSeleccionados([
                              /* Construcción del array  */
                              ...sintomasSeleccionados,
                              item.id,
                            ]);
                            setSintomaCompleto([
                              ...sintomaCompleto,
                              item.nombre
                            ])
                          } else {
                            setSintomasSeleccionados(
                              sintomasSeleccionados.filter((id) => id !== item.id)
                            );
                            setSintomaCompleto(
                              sintomaCompleto.filter((nombre) => nombre !== item.nombre)
                            )
                          }
                        }}
                        />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <p>{diseaseFound}</p>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Ayuda
              </Button>
              <ModalVertically
                /* PROPS  */
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <div className="col">
              <h3>Síntomas seleccionados</h3>
              <ol class="list-group list-group-numbered my-4">
                {sintomaCompleto.map((item) => 
                  <li class="list-group-item">{item}</li>
                )
                }
              </ol>
            <div className="card">
              <h5 className="card-header">Enfermedad detectada</h5>
              <div className="card-body">
                <h5 className="card-title">{datosUsuario}</h5>
                <p className="card-text">La enfermedad detectada en base a los síntomas es:
                </p>
                <p className="text-decoration-underline text-success">
                  {diseaseFound}
                </p>
                {/* <ModalFullScreen 
                  // PROPS 
                  clase={"me-2 mb-2 bg-light disabled"}
                /> */}
                <p className="fst-italic fw-lighter">
                  No olvides que esto no es un diagnóstico oficial. En caso de tener dudas siempre es mejor realizar una consulta médica
                </p>
              </div>
            </div>
              
            </div>
          </div>
        </div>
      </div>{/* 
      
      <button onClick={() => setModalShow(true)}>Test</button> */}
    </>
  )
}

export default Diagnostic