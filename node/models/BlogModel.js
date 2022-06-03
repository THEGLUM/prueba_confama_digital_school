//importar la conexion a la base de datos
import db from "../database/db.js";

import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs', {
	title: { type: DataTypes.STRING },
	hora_ingreso: { type: DataTypes.STRING },
	hora_salida: { type: DataTypes.STRING },
}
)

export default BlogModel