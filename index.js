let light = false;

document.getElementById("light").onclick = function() {
    if(light){
        document.getElementById('projectDisplay').style.backgroundColor = 'black';
        light = false;
    }
    else {
        document.getElementById('projectDisplay').style.backgroundColor = 'hsl(192, 100%, 91%)';
        light = true;
    }
}