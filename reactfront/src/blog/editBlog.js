import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:8000/blogs/'

const CompEditarBlog = () => {
	const [salida, setSalida] = useState('')
	const navigate = useNavigate()

	const { id } = useParams()

	//actualizar
	const update = async (e) => {
		e.preventDefault()
		await axios.put(URI + id, {
			hora_salida: salida
		})
		navigate('/')
	}

	useEffect(() => {
		getBlogById()
	}, [])

	const getBlogById = async () => {
		const res = await axios.get(URI + id)
		setSalida(res.data.hora_salida)
	}
	const salidaHora = new Date()
	return (
		<div>
			<h3>salida del vehiculo</h3>
			<form onSubmit={update}>

				<div className="mb-3">
					<label className="from-label">hora de salida del vehiculo</label>
					<input
						value={salida + salidaHora}
						onBlur={(e) => setSalida(e.target.value)}
						type='text'
						className="form-control"
					/>
				</div>
				<button type="submit" className="btn btn-primary">parquear</button>
			</form>
		</div>
	)
}

export default CompEditarBlog