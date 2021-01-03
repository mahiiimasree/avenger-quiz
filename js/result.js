var head_result=document.getElementById("result-header");
var body_result=document.getElementById("result-body");

var points=sessionStorage.getItem("points");

function reset(){
    location.href="./index.html"

}

if(points>=5){
    head_result.innerHTML="That's nice! You've got "+points+" out of 6 right";
    body_result.innerHTML="You worked hard and it paid off! Nice work figuring out these questions, you earned it buddy!";
}
else{
    head_result.innerHTML="That's nice! You've got "+points+" out of 6 right";
    body_result.innerHTML="Marvel has created more Avengers that even the geekiest of geeks could remember, but that doen't mean you shouldn't try!";

}
