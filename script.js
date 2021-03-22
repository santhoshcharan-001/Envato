if(localStorage.getItem("ad_seen")){
    annremove();
}else{
    var x=document.getElementById("annon");
    x.style.display="flex";
}

function annremove()
{
    var x=document.getElementById("annon");
    x.style.display="none";
    localStorage.setItem("ad_seen",true);
}
function collapsed()
{
    var t=document.getElementById("move");
    t.classList.toggle("move");
}