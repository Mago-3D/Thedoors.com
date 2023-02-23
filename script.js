// for change tabs
function openTab(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

//Link to 
function showDiv(id, name) {
  var divs = document.getElementsByClassName("tabcontent");
  console.log(divs[0])
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }

  var div = document.getElementById(id);
  div.style.display = "block";

  document.getElementById(name).scrollIntoView({
    behavior: 'smooth'
  });
}