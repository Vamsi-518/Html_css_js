let count = 0
let timer

function start(){

timer = setInterval(function(){

count++

document.getElementById("time").innerHTML = count

},1000)

}

function stop(){

clearInterval(timer)

}

function reset(){

count = 0

document.getElementById("time").innerHTML = count

clearInterval(timer)

}