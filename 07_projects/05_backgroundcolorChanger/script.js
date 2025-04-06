// generate random color
const randomColor =function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    };
    return color;
};
console.log(randomColor());


let colorChange;
const startChangingColor=function(){
    function changeColor(){
        document.querySelector("body").style.backgroundColor=`${randomColor()}`;
    }
    if(!colorChange){
        colorChange =setInterval(changeColor,1000);
    }
}
const stopChangingColor = function(){
    clearInterval(colorChange);
    colorChange=null;// use for saving extra space
}


document.querySelector("#start").addEventListener('click',startChangingColor)

document.querySelector("#stop").addEventListener('click',stopChangingColor);
