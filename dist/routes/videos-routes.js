"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRouter = void 0;
const express_1 = require("express");
const videos_repository_1 = require("../repositories/videos-repository");
// put here array with videos
exports.videosRouter = (0, express_1.Router)({});
// bind here videosRouter with all handlers
exports.videosRouter.get('/', (req, res) => {
    const videos = videos_repository_1.videosRepository.getVideos();
    res.send(videos);
})
    .get('/:videoId', (req, res) => {
    const id = +req.params.videoId;
    const video = videos_repository_1.videosRepository.getVideoById(id);
    if (video) {
        res.send(video);
    }
    else {
        res.send(404);
    }
})
    .post('/', (req, res) => {
    const newVideo = videos_repository_1.videosRepository.createVideo(req.body.title);
    if (newVideo) {
        res.send(newVideo);
    }
    else {
        return false;
    }
})
    .delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const isDeleted = videos_repository_1.videosRepository.deleteVideoById(id);
    if (isDeleted) {
        res.send(204);
    }
    else {
        res.send(404);
    }
})
    .put('/:id', (req, res) => {
    //console.log(req.body)
    const id = +req.params.id;
    const isUpdated = videos_repository_1.videosRepository.updateVideoById(id, req.body.title);
    if (isUpdated) {
        res.send(204);
    }
    else {
        res.send(404);
    }
});
//# sourceMappingURL=videos-routes.js.map