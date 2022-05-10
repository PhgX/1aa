

function moveright() {  
    let imgObj = document.getElementById("myImage");     
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';    
}
function diChuyen() {
    switch (event.keyCode) {
        case 37: {
            let imgObj = document.getElementById('myImage');
            image.style.left = parseInt(image.style.left) - 10 + 'px'
            break
        }
        case 39: {
            let imgObj = document.getElementById('myImage');
            image.style.left = parseInt(image.style.left) + 10 + 'px'
            break;
        }
    }
}
// window.onload = moveright;