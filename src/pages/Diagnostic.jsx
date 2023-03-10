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
  /* // const [enfermedadEncontrada, setEnfermedadEncontrada] = useState('') 
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
  /* Utilidad */
  const busquedaVacia = [
    { nombre: "Ingresa tu búsqueda"}
  ]
  // console.warn('titulos')
  // console.log(criteriosEnfermedades[0].nombre)
  
  // Ids de todos los síntomas
  let idsComunes = sintomasEnfermedadesComunes.map(item => item.id)
  // console.log(idsComunes)

  let enfermedadEncontrada = ''

  /* Determinar que tipo de enfermeda tiene el paciente */
  /* arrayIdsComunes -> todos los ids de las enfermedades
     arrayCriteriosEnfermedad -> ids de criterios de enfermedad [1-n .... normalmente 7 items]*/
  const sintomasDelPaciente = (arrayIdsComunes,arrayCriteriosEnfermedad, noCriterioEnfermedad) => { 
    // Compara el total de ids de sintomas con los criterios de una enfermedad
    // Si se cumple la condición de arrayCriteriosEnfermedad[] -> true
    const contieneCriteriosDeSintomas = arrayCriteriosEnfermedad.every((idSintoma) => {
      return arrayIdsComunes.includes(idSintoma)
    })
    
    contieneCriteriosDeSintomas ? 
      enfermedadEncontrada = criteriosEnfermedades[noCriterioEnfermedad].nombre
    : null
    console.log(contieneCriteriosDeSintomas)
    console.log('La enfermedad encontrada', enfermedadEncontrada)
  }

  /*Buscador  */
  // state para buscador
  const [search, setSearch] = useState("")
  const searcher = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  useEffect(()=> {
    searcher
  }, [])

  const textoSearch = 'Ingresa tu búsqueda ... '

  const resultsSearch = !search ? sintomasEnfermedadesComunesState
    : sintomasEnfermedadesComunesState.filter((dato) => 
      dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
      // && dato.nombre.length === search.length
      // resto de campos
    )

    console.warn('State')
    console.log(sintomasEnfermedadesComunesState)
 /*  
  console.log(sintomasEnfermedadesComunesState[0].nombre)
  // Enfermedad 1
  sintomasDelPaciente(idsComunes, criteriosEnfermedades[0].sintomas, 0)
  sintomasDelPaciente(idsComunes, criteriosEnfermedades[1].sintomas,1) */

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
                <input 
                  type="search" 
                  onChange={searcher}
                  placeholder="Ingresa el nombre del síntoma..." 
                  name="" 
                  id="" 
                  className="form-control mb-4" 
                />
              </form>
{/*               <Switch >

              </Switch> */}
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
              <h3>Tabla de síntomas de tu búsqueda</h3>
              
              <table className="table table-striped table-info">
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
                      <td>Debes ingresar palabras clave para encontrar tu síntoma</td>
                    </tr>
                  )   
                  :
                  resultsSearch.map((item,index) => 
                    <tr key={index}>
                      <th>{index+1}</th>
                      <td>{item.nombre}</td>

                    </tr>
                  )}
                  
                  {/* <tr>
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
                  </tr> */}
                  
                </tbody>
              </table>
              <ModalFullScreen 
                /* PROPS */
                clase={"me-2 mb-2 bg-light disabled"}
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