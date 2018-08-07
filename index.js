require("./index.css")
require("./loader.css")
require("./rainbow.css")
const despacitoes = require("./despacitoes.js")

var player
var firstVid

if (location.hash !== "") {
    firstVid = location.hash.substr(1)
} else {
    firstVid = despacitoes()
}

window.onload = () => {
    player = new YT.Player("player", {
        videoId: firstVid,
        playerVars: {
            controls: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            color: "red",
            origin: "http://localhost:1234"
        },
        events: {
            "onReady": onPlayerReady,
            "onStateChange": onPlayerStateChange
        }
    })
    
    function onPlayerReady(event) {
        
        event.target.playVideo()
        event.target.setVolume(100)
        event.target.setLoop(true)
        event.target.setPlaybackQuality("highres")
        document.getElementById("playing").innerHTML = event.target.getVideoData().title
    }

    function onPlayerStateChange(event) {

        if(event.data === YT.PlayerState.PAUSED) {
            event.target.playVideo()
        }

        if(event.data === YT.PlayerState.ENDED) {
            event.target.loadVideoById(despacitoes(), 0, "highres")
            document.getElementById("playing").innerHTML = event.target.getVideoData().title
        }

        if(event.data === YT.PlayerStatus.CUED || event.data === YT.PlayerStatus.PLAYING || event.data === -1) {
            document.getElementById("playing").innerHTML = event.target.getVideoData().title
        }
    }
}
