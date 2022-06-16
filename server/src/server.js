require('dotenv').config()
const http = require("http")
const app = require("./app")


const PORT = process.env.PORT || 8000

const server = http.createServer(app)

async function startServer() {
    try {
        server.listen(PORT, () => {
            console.log(`Server is listening on ${PORT}...`)
        })
    } catch (error) {
        
    }
}

startServer()