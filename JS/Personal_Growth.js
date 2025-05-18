const  modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-con');
const  modalImg = document.getElementById("popupImg");
const  captionText = document.getElementById("caption");
const  bio = document.querySelector('.bio');
const  closebtn = document.getElementsByClassName("close")[0];


function Tab(e, TabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(TabName).style.display = "block";
  e.currentTarget.className += " active";
};

function ChangeLevel(evt, tier) {
  var l, content, framelvlTab; 
  content = document.getElementsByClassName("frame_lvl");
  for (l = 0; l < content.length; l++) {
    content[l].style.display = "none";
  }
  framelvlTab = document.getElementsByClassName("framelvlTab");
  for (l = 0; l < framelvlTab.length; l++) {
    framelvlTab[l].className = framelvlTab[l].className.replace("Level", "");
  }
  document.getElementById(tier).style.display = "block";
  evt.currentTarget.className += " Level";
};

function Close_lvl(d, lvl){
  document.getElementById(lvl).style.display = "none";
  d.currentTarget.className += "Closed";
};




//Imported
const Frames = [
  { name:"Weiss-Blaut", info:'Description: yesssssss'},
  { name:"Tharsis", info:'Description: ROBOT'},
  { name:"Crown", info:'Description: A massive Crown'},
];

const frameImgs = document.querySelectorAll('.frameImg').forEach(frame=>{
    frame.addEventListener('click',()=>{
     modalContainer.style.display = 'flex';
     modalContainer.classList = "modal-con_opened";
     modal.style.display = 'inline-flex';
     modalImg.src = frame.src;
     captionText.style.display = 'block'
     captionText.innerHTML = frame.alt;

     Frames.filter((frames)=>{
      for (const name in frames) {
        if(frames[name] === frame.alt){ return bio.innerHTML = frames.info } }
      })
     modal.scrollIntoView({behavior: "smooth"});
     closebtn.style.display = 'block';
    })
})

closebtn.onclick = function() { 
  modal.style.display = "none";
  modalContainer.classList = "modal-con_closed"
}