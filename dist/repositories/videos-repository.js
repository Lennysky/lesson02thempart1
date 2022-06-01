"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRepository = void 0;
const db_1 = require("./db");
exports.videosRepository = {
    getVideos() {
        return db_1.videos;
    },
    getVideoById(id) {
        const video = db_1.videos.find(v => {
            if (v.id === id)
                return true;
            else
                return false;
        });
        if (!!video) {
            return video;
        }
        else {
            return false;
        }
    },
    deleteVideoById(id) {
        const videos1 = [...db_1.videos];
        db_1.videos.forEach((v, index) => {
            if (v.id === id) {
                db_1.videos.splice(index);
            }
        });
        if (videos1.length > db_1.videos.length) {
            return true;
        }
        else {
            return false;
        }
    },
    updateVideoById(id, title) {
        const video = db_1.videos.find(v => {
            if (v.id === id)
                return true;
            else
                return false;
        });
        if (!!video) {
            video.title = title;
            return true;
        }
        else {
            return false;
        }
    },
    createVideo(title) {
        const newVideo = {
            id: +(new Date()),
            title: title,
            author: 'it-incubator.eu'
        };
        db_1.videos.push(newVideo);
        return newVideo;
    }
};
//# sourceMappingURL=videos-repository.js.map