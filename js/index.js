const $video = document.querySelector('#video') 
const $play = document.querySelector('#play') 
const $pause = document.querySelector('#pause') 
const $backward = document.querySelector('#backward') 
const $forward = document.querySelector('#forward') 
const $progress = document.querySelector('#progress')


$progress.addEventListener('input', handleInput)
$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)
$backward.addEventListener('click',handleBackward)
$forward.addEventListener('click',handleForward)
$video.addEventListener('loadedmetadata',handleLoaded)
$video.addEventListener('timeupdate',handleTimeUpdate)

function handlePlay() {
    console.log('Boton play')
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}

function handlePause() {
    console.log('boton pausa')
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
}

function handleBackward() {
    console.log('menos 10 segundos', $video.currentTime)
    $video.currentTime -= 10
}

function handleForward() {
    console.log('mas 10 segundos', $video.currentTime)
    $video.currentTime += 10
}

function handleLoaded() {
    $progress.max = $video.duration
    console.log('video cargado', $video.duration)
}

function handleTimeUpdate() {
    $progress.value =$video.currentTime
    console.log('tiempo actual', $video.currentTime)
}

function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}