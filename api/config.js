//config.js

const mongodb = {
    username: "ravindu",
    password: "584627913",
}

const dbconfig = {
    connectionString: `mongodb+srv://${mongodb.username}:${mongodb.password}@cluster0.j13fi.mongodb.net/Test?retryWrites=true&w=majority`,
}


module.exports = { dbconfig }