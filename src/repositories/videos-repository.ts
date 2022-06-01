import {videos} from "./db"

export const videosRepository = {
    getVideos() {
        return videos
    },
    getVideoById(id: number) {
        const video = videos.find(v=> {
            if (v.id === id) return true;
            else return false;
        })
        if (!!video) {
            return video
        } else {
            return false
        }
    },
    deleteVideoById(id: number) {
        const videos1 = [...videos]
        videos.forEach((v, index) => {
            if(v.id === id) {
                videos.splice(index)
            }
        })
        if(videos1.length > videos.length) {
            return true
        } else {
            return false
        }
    },
    updateVideoById(id: number, title: string) {
        const video = videos.find(v=> {
            if (v.id === id) return true;
            else return false;
        })
        if (!!video) {
            video.title = title
            return true
        } else {
            return false
        }

    },
    createVideo(title: string) {
        const newVideo = {
            id: +(new Date()),
            title: title,
            author: 'it-incubator.eu'
        }
        videos.push(newVideo)
        return newVideo
    }
}