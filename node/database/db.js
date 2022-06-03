import sequelize from 'sequelize'

const db = new sequelize('database_app', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
})

export default db