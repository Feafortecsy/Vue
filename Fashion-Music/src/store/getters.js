
    //取state中的数据到组件中
    export const singer = state => state.singer
    export const playing = state => state.playing
    export const playlist = state => state.playlist
    export const sequenceList = state => state.sequenceList
    export const fullscreen = state => state.fullscreen
    export const currentIndex = state => state.currentIndex
    export const playmode = state => state.playmode
    export const disc = state => state.disc
    export const toplist = state => state.toplist
    export const searchHistory = state => state.searchHistory
    export const playHistory = state => state.playHistory
    export const favoritelist = state => state.favoritelist
    export const currentSong = (state) => {
        return state.playlist[state.currentIndex] || {}
    }