var hour=document.getElementById('hour');
var minute=document.getElementById('minute');
var button=document.getElementById('add');
var adder=document.getElementById('adder');
var timeline=document.getElementById('timeline');
var h;
var m;
var tasks=[];
var count=0;
hour.addEventListener('keyup',function(e){
if(e.key == 'Enter'){
     h=e.target.value;
    console.log(h);
}
});
minute.addEventListener('keyup',function(e){
    if(e.key == 'Enter'){
        m=e.target.value;
        console.log(m);
    }
    });

button.addEventListener('click',function(e){
    
    const task={
        id:count,
        hour:h,
        min:m
    }
    addtask(task);
    
    count=count+1;
    
        
        });
function reload(){
    adder.innerHTML='';
    for(var i=0;i<tasks.length;i++){
        
        adder.innerHTML+=`<div class="anu">${tasks[i].hour}</div>
    <div class="anu">${tasks[i].min}</div>
    <button class="delete" type="submit" id="${tasks[i].id}">delete</button>`;
    }

}
function addtask(t){
    tasks.push(t);
    reload();
    
    }
function Delete(taskid){
    const index= tasks.findIndex(i=>{
        i.id==taskid;
    });
    tasks.splice(index,1);
    reload();

}
function handler(e){
    const rakesh=e.target;
    if(rakesh.className == 'delete'){
        const id=rakesh.id;
        Delete(id);

    }
}
document.addEventListener('click',handler);
function update(){
    var today= new Date();
    var hour=formatTime(today.getHours());
    var minute=formatTime(today.getMinutes());
    var seconds=formatTime(today.getSeconds());
    timeline.innerText=`${hour}:${minute}:${seconds}`
}
setInterval(update,1000);
