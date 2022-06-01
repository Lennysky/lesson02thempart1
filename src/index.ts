import cors from 'cors'
import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import {videosRepository} from "./repositories/videos-repository";
import {videosRouter} from "./routes/videos-routes";
import {authMiddleware} from "./middlewares/authMiddleware";
const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())

app.use(authMiddleware)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/videos', videosRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})