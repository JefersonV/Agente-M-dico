import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
			<Header />
			<div className="container">
				<div className="row min-vh-100 d-flex align-items-center">
					<div className="col-7">
							<h1 className="fs-1">Sistema de Diagnóstico Médico</h1>
							<p className="1h-lg">No olvides que esto no es un diagnóstico oficial. En caso de tener dudas siempre es mejor realizar una consulta médica</p>
							<Link to="/diagnostic" className="btn btn-info">Iniciar herramienta</Link>
							
							<button className="btn btn-light">Iniciar herramientass</button>
					</div>
					<div className="col">
						<img src="https://img.freepik.com/vector-gratis/icono-isometrico-aplicacion-chatbot-telefono-inteligente-personaje-gafas-realidad-virtual_1284-63051.jpg?w=740&t=st=1678285475~exp=1678286075~hmac=be20d4ddfdbcbe8de836c1b10efa45f77a345d1262a4c453b102302104266db9" width="450px" alt="Imagen" />
					</div>
				</div>
			</div>
			<div>Home</div>
    </>
  )
}

export default Home