function SwapStage(prevMap, nextMap ){
  document.getElementById(prevMap).style = "display: none" ? "display: none" : "display:inline-block";
  document.getElementById(nextMap).style = "display: none" ? "display: inline-block" : "display: none";
};

document.querySelectorAll(".Next").forEach(change=>{
  change.addEventListener("click",function(){
    SwapStage;
  })
})

document.querySelectorAll(".Stages").forEach(stage=>{
  stage.addEventListener("click", function(){
    document.querySelector(".stage_infoCon").style = "display: inline-block" ? "display:inline-block" : "display: none";
  })
});

document.querySelectorAll(".enemy_infobtn").forEach(press=>{
  press.addEventListener("click", function(){
    document.querySelector(".stage_infoCon").style = "display: none";
  })
})