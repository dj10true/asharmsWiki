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