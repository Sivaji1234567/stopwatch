let startBtn=document.querySelector(".start-btn")
let stopBtn=document.querySelector(".stop-btn")
let resetBtn=document.querySelector(".reset-btn")
let hour=document.querySelector(".hour")
let minute=document.querySelector(".minute")
let second=document.querySelector(".seconds")
let time=[0,0,0];
let timerid=0;
startBtn.addEventListener("click",function(){
    startBtn.classList.add("disable");
    if(timerid!=0){
        return;
    }
    timerid=setInterval(() =>{
        time[2]++;
        if(time[2]==60){
            time[1]++;
            time[2]=0;
        }
        if(time[1]==60){
            time[0]++;
            time[1]=0;
        }
        displayTime();
    },1000);
})
stopBtn.addEventListener("click",function(){
    stopBtn.classList.add("disable");
   clearInterval(timerid);
})
resetBtn.addEventListener("click",function(){
    startBtn.classList.remove("disable");
    stopBtn.classList.remove("disable");
    time=[0,0,0]
    timerid=0;
    displayTime();
})
function displayTime(){
    hour.innerText=time[0].toString().padStart(2,"0").padEnd(4,":");
    minute.innerText=time[1].toString().padStart(2,"0").padEnd(4,":");
    second.innerText=time[2].toString().padStart(2,"0");
}
