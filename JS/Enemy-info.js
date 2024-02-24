const  modal = document.querySelector('.modal');
const modalContainer = document.getElementById('modal-container');
const  modalImg = document.getElementById("popupImg");
const  captionText = document.getElementById("caption");
const  bio = document.querySelector('.bio');
const  closebtn = document.getElementsByClassName("close")[0];
const Resetters = [
  { name:"Weiss-Blaut", info:'Description: yesssssss'},
  { name:"Tharsis", info:'Description: ROBOT'},
  { name:"Crown", info:'Description: A massive Crown'},
];

const enemyImgs = document.querySelectorAll('.enemyImg').forEach(Img=>{
    Img.addEventListener('click',()=>{
     modalContainer.style.display = 'flex';
     modal.style.display = 'block';
     modalImg.src = Img.src;
     captionText.style.display = 'block'
     captionText.innerHTML = Img.alt;

     Resetters.filter((resetters)=>{
      for (const name in resetters) {
        if(resetters[name] === Img.alt){ return bio.innerHTML = resetters.info } }
      })
     modal.scrollIntoView({behavior: "smooth"});
     closebtn.style.display = 'block';
    })
})

// const enemyImgs = document.querySelectorAll('.enemyImg').forEach(Img=>{
//   Img.addEventListener('click',()=>{
//    modalContainer.style.display = 'flex';
//    modal.style.display = 'inline-block';
//    if(modalImg.src === Img.alt){
//       modalImg.src = Img.src;      
//       console.log(modalImg.src)
//    }
//    captionText.style.display = 'block'
//    captionText.innerHTML = Img.alt;
//    Resetters.filter((resetters)=>{
//     for (const name in resetters) {
//       if(resetters[name] === Img.alt){ return bio.innerHTML = resetters.info } }
//     })
//    modal.scrollIntoView({behavior: "smooth"});
//    closebtn.style.display = 'block';
//   })
// })


closebtn.onclick = function() { 
  modal.style.display = "none";
}
