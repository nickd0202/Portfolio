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


let navContents = document.getElementsByClassName('navContent');
let menu = false;

document.getElementsByClassName('navigation').onclick = function(){
    if(menu){
        for (let i = 0; i < navContents.length; i++) {
            navContents[i].style.display = "none";
        }
    }else{
        for (let i = 0; i < navContents.length; i++) {
            navContents[i].style.display = "block";
        }
    }
}
