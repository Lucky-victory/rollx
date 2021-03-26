const circles=Array.from(document.querySelectorAll(".circle"));
let dragging=false,speed=3;
const roller=document.querySelector("#roller");
const center=document.querySelector(".center");
const title=document.querySelector(".title");

//  iterate through the circle elements and rotate them by their index
for (let i = 0; i < circles.length; i++) {
  circles[i].style.transform=`rotate(${i * 40}deg)`;


}
//  map through the circles and set a function to each.
circles.map((circle,index)=>{
      eventHandler(circle,"touchstart",startEvent);
    eventHandler(circle,"mousedown",startEvent);
    eventHandler(circle,"mousemove",moveEvent(circle));
    eventHandler(circle,"touchmove",moveEvent(circle));
    eventHandler(circle,"touchend",endEvent);
    eventHandler(circle,"touchcancel",endEvent);
    eventHandler(circle,"mouseout",endEvent);
    eventHandler(circle,"mouseup",endEvent);
    eventHandler(circle,"mouseleave",endEvent);
});

function startEvent(){
  dragging=true;
  
}
function moveEvent(circle){
return function(evt){
    let dir = evt.type.includes("touch") ? evt.changedTouches[0].clientX : evt.clientX

  if(dragging){
        roller.style.transform=`rotate(${(dir * speed)}deg)`;
        center.style.transform=`rotate(${-dir * speed}deg)`;
     title.style.filter=`hue-rotate(${(dir * speed)}deg)`;

  }
    requestAnimationFrame(moveEvent);

}
}
function endEvent(){
  dragging=false;

}
function eventHandler(target,evt,func){
  
 return target.addEventListener(evt,func,false);
}