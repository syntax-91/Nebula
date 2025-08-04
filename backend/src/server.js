import express, { json } from 'express'
import { AuthRouter } from './routes/auth.route.js';
import cors from 'cors'
import { PostRouter } from './routes/post.route.js';
import { Server } from 'socket.io'
import {createServer} from 'http'
import { Socket } from './service/socket/socketService.js';

const app = express()
const PORT = 3000;

const server = createServer(app)

// socket.io
const io = new Server(server, {
    cors:{
        origin: '*',
        methods: ['GET', 'POST']
    }
})


// JSON
app.use(express.json())

// CORS
app.use(
    cors({
        origin: '*',
        credentials: true  
    })
)

//routes
app.use('/auth', AuthRouter)

app.use('/post', PostRouter)

const run = async() => {
    
    try {

        await Socket(io)

        server.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`)
        })
    } catch(err){
        console.log('ERROR - server.js - func run >> ', err)
    }
}

run()