const doll = document.querySelectorAll("icon_tag");
const collection_assignment = document.querySelectorAll("collection_assignment");
const jobswap = document.querySelectorAll("jobswap");
const Skin_container =  document.getElementById("Skin_container");
const skin_collection = document.querySelectorAll("skin_collection");
const maus_collection = document.getElementById("maus_collection");
const skua_collection = document.getElementById("skua_collection");
const expanded_container = document.getElementById("expanded_container");
const Expanded = document.querySelectorAll("Expanded");

function Display(e, doll) {
  var i, DollBody, dollIcon;
  DollBody = document.getElementsByClassName("child_body");
  for (i = 0; i < DollBody.length; i++) {
    DollBody[i].style.display = "none";
  }
  dollIcon = document.getElementsByClassName("icon_tag");
  for (i = 0; i < dollIcon.length; i++) {
    dollIcon[i].className = dollIcon[i].className.replace("child_body","");
  }
  document.getElementById(doll).style = "display: block";
  document.getElementById(doll).scrollIntoView({behavior: 'smooth'});
  e.currentTarget.className += "";
}


//The Src For Modal Images Inside Modal

//Collab/Limiteds
Marfusha.src  = "./img/BaseArt/MarfushaFull.png";
Laica.src     = "./img/BaseArt/LaicaFull.png";
Albina.src    = "./img/BaseArt/AlbinaFull.png";
Bion.src      = "./img/BaseArt/BionFull.png";
Felicette.src = "./img/BaseArt/FelicetteFull.png";
Strelka.src   = "./img/BaseArt/StrelkaFull.png";

//three stars
Maus.src = "./img/BaseArt/maus full.png";
Skua.src = "./img/BaseArt/SkuaFull.png";
Tis_A.src = "./img/BaseArt/Tis-AFull.png";
B4.src = "./img/BaseArt/B4Full.png";
Aircraftmodel11.src = "./img/BaseArt/Aircraftmodel11Full.png";
Ahat.src  = "./img/BaseArt/AhatFull.png";
Chito.src = "./img/BaseArt/ChitoFull.png";
Blackwidow.src = "./img/BaseArt/BlackwidowFull.png";
Bf109.src = "./img/BaseArt/Bf109Full.png";
Shamon.src ="./img/BaseArt/ShamonFull.png";
Senha.src ="./img/BaseArt/SenhaFull.png";
Ryusei.src = "./img/BaseArt/RyuseiFull.png";
Puma.src  = "./img/BaseArt/PumaFull.png";
Raincaster.src = "./img/BaseArt/RaincasterFull.png";
Raiden.src = "./img/BaseArt/RaidenFull.png";
Pershing.src = "./img/BaseArt/PershingFull.png";
Lightning.src = "./img/BaseArt/LightningFull.png";
B29.src  = "./img/BaseArt/B29Full.png";
Hellcat.src = "./img/BaseArt/HellcatFull.png";
Fokker.src = "./img/BaseArt/FokkerFull.png";
Halifax.src = "./img/BaseArt/HalifaxFull.png";
He177.src = "./img/BaseArt/He177aFull.png";
Flyingfortress.src = "./img/BaseArt/FlyingfortressFull.png";
Do335.src = "./img/BaseArt/Do335aFull.png";
Daemon.src = "./img/BaseArt/DaemonFull.png";
Coventry.src ="./img/BaseArt/CoventryFull.png";
Shuvalbe.src = "./img/BaseArt/ShuvalbeFull.png";
Churchellmk2.src = "./img/BaseArt/Churchellmk2Full.png";
Leopard.src = "./img/BaseArt/LeopardFull.png";
Kv1.src = "./img/BaseArt/Kv85Full.png";
Kv2.src = "./img/BaseArt/Kv2Full.png";
Jagdtiger.src = "./img/BaseArt/JagdtigerFull.png";


//two stars
Hyabusa.src = "./img/BaseArt/HyabusaFull.png";

//one stars
T26E.src      = "./img/BaseArt/T-26EFull.png";
Tetrak.src    = "./img/BaseArt/TetrakFull.png";
Brenten.src   = "./img/BaseArt/BrentenFull.png";
Dawnt.src     = "./img/BaseArt/DawntFull.png";
T70.src       = "./img/BaseArt/T-70Full.png";
Ju88.src      = "./img/BaseArt/Ju88A-4Full.png";
Grille.src    = "./img/BaseArt/GrilleFull.png";
Wolverine.src = "./img/BaseArt/WolverineFull.png";
Pe2.src       = "./img/BaseArt/Pe-2Full.png";
WildCat.src   = "./img/BaseArt/WildCatFull.png";
Hesshia.src   = "./img/BaseArt/HesshiaFull.png";
Mc200.src     = "./img/BaseArt/Mc200Full.png";
T77.src       = "./img/BaseArt/T77Full.png";
He111.src     = "./img/BaseArt/He111Full.png";
Hoischlek.src = "./img/BaseArt/HoischlekFull.png";
T60z.src      = "./img/BaseArt/T60zFull.png";
M3lee.src     = "./img/BaseArt/M3leeFull.png";
BT5.src       = "./img/BaseArt/BT5Full.png";
I165.src      = "./img/BaseArt/I165Full.png";
Veroche.src   = "./img/BaseArt/VerocheFull.png";
Bis.src       = "./img/BaseArt/BisFull.png";
Hs129.src     = "./img/BaseArt/Hs129Full.png";
Hurricane.src = "./img/BaseArt/HurricaneFull.png";
Su26.src      = "./img/BaseArt/Su26Full.png";
M8.src        = "./img/BaseArt/m8Full.png";
Lagg3.src     = "./img/BaseArt/LaggFull.png";
Malda.src     = "./img/BaseArt/MaldaFull.png";



function Assign(collection){
if(collection.className == "" || Skin_container.style === "display:inline-block"){
collection.className = "skin_collection";
skin_collection.style = "display:none";
collection.style = "display:inline-block";
Skin_container.style = "display:inline-block";
Expanded.style = "display:none";
skin_closer.onclick = function()
{
   Skin_container.style = "display:none"; 
   collection.style = "display:none";
   Expanded.style = "display:none";
   expanded_container.style = "display:none";
   
}
} else{
collection.style = "display:none";
Skin_container.style = "display:none";
skin_collection.style = "display:none"
expanded_container.style = "display:none";
Expanded.style = "display:none";
collection.className = "";
}
}Assign(collection_assignment)






function JobSwap(job){
  if(job.className == ""){
  job.className = "jobswap";
  job.style = "display:inline-block";
  } else{
  job.style = "display:none";
  job.className = "";
  }
  }JobSwap(jobswap)







async function View(Expanded){
if(Expanded.className == ""){
Expanded.className = "Expanded";
await View("click",MouseEvent)
expanded_container.style = "display:inline-block";
Expanded.style = "display:inline-block";
}else{
Expanded.className = "";
Expanded.style = "display:none";
expanded_container.style = "display:none";
}}View(Expanded)






