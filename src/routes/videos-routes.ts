import {Request, Response, Router} from 'express'
import {videosRepository} from "../repositories/videos-repository";

// put here array with videos
export const videosRouter = Router({})

// bind here videosRouter with all handlers

videosRouter.get('/', (req, res) => {
    const videos = videosRepository.getVideos()
    res.send(videos)
})
    .get('/:videoId', (req: Request, res: Response) => {
    const id = +req.params.videoId;
    const video = videosRepository.getVideoById(id)
    if (video) {
        res.send(video)
    } else {
        res.send(404)
    }
})
    .post('/', (req: Request, res: Response) => {
    const newVideo = videosRepository.createVideo(req.body.title)
    if (newVideo) {
        res.send(newVideo)
    } else {
        return false
    }
})
    .delete ('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const isDeleted = videosRepository.deleteVideoById(id)
    if (isDeleted) {
        res.send(204)
    } else {
        res.send (404)
    }
})
    .put ('/:id', (req: Request, res: Response) => {
    //console.log(req.body)
    const id = +req.params.id;
    const isUpdated = videosRepository.updateVideoById(id, req.body.title)
    if (isUpdated) {
        res.send(204)
    } else {
        res.send(404)
    }
})