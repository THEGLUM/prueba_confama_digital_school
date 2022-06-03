import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlogs = () => {
	const [title, setTitle] = useState('')
	// const [content, setContent] = useState('')
	const [ingreso, setIngreso] = useState('')
	const navigate = useNavigate()

	const parque = async (e) => {
		e.preventDefault()
		await axios.post(URI, { title: title, hora_ingreso: ingreso })
		navigate('/')
	}

	const diaIngreso = new Date()
	return (
		<div>
			<h3>introduccion del vehiculo</h3>
			<form onSubmit={parque}>
				<div className="mb-3">
					<label className="from-label">placa de la moto</label>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type='text'
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label">hora de ingreso del vehiculo</label>
					<input
						value={ingreso + diaIngreso}
						onBlur={(e) => setIngreso(e.target.value)}
						type='text'
						className="form-control"
					/>
				</div>
				<button type="submit" className="btn btn-primary">parquear</button>
			</form>
		</div>
	)
}

export default CompCreateBlogs