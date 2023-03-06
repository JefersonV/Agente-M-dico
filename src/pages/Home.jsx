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
						<img src="" alt="Imagen" />
						<p>asdfa</p>
					</div>
				</div>
			</div>
			<div>Home</div>
    </>
  )
}

export default Home