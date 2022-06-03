import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
	const [blogs, setBlog] = useState([])
	const [busqueda, setBusqueda] = useState([])
	const [tabla, setTabla] = useState([])
	useEffect(() => {
		getBlogs()
	}, [])

	const getBlogs = async () => {
		const res = await axios.get(URI)
		setBlog(res.data)
		setTabla(res.data)
	}
	//procedimiento para eliminar un blog
	const deleteBlog = async (id) => {
		await axios.delete(`${URI}${id}`)
		getBlogs()
	}

	//barra de busqueda
	//se captuera el valor en el buscador
	const inputBusqueda = e => {
		setBusqueda(e.target.value)
		filtar(e.target.value)
		console.log(e.target.value)
	}

	const filtar = (terBusqueda) => {
		let resultadosBusqueda = tabla.filter((element) => element.title.toString().toLowerCase().toUpperCase() === terBusqueda.toString().toLowerCase().toUpperCase())
		console.log(resultadosBusqueda)

		if (terBusqueda === '') {
			setBlog(tabla)
		} else {
			setBlog(resultadosBusqueda)
		}
	}

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<Link to={'/create'} className='btn btn-primary mt-2 mt-2'><i className="fa-solid fa-plus"></i></Link>
					<div className='container-input'>
						<input className='form-control inputBuscar'
							value={busqueda}
							placeholder="busca la placa"
							onChange={inputBusqueda}
						/>
						<button className='btn btn-success'><i className="fa-solid fa-magnifying-glass"></i></button>
					</div>
					<table className='table'>
						<thead className='table-primary'>
							<tr>
								<th>placa</th>
								<th>horas ingreso</th>
								<th>horas salida</th>
								<th>acciones</th>
							</tr>
						</thead>
						<tbody>

							{blogs.length >= 30 ? alert('limites de carros admitidos')
								: blogs.map((blog) => (
									<tr key={blog.id}>
										<td>{blog.title}</td>
										<td>{blog.hora_ingreso}</td>
										<td>{blog.hora_salida}</td>
										<td>
											<Link to={`/edit/${blog.id}`} className="btn btn-info"><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
											<button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</div >
	)
}

export default CompShowBlogs