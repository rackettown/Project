window.onload = function() {
  footer();
}

function changeImg(){
  var newimg = document.getElementById("comm").value;
  var imageURL = "images/" + newimg + ".jpg";
  document.getElementById("example").src = imageURL;
}

function footer(){
  var x = document.lastModified;
  document.getElementById("date").innerHTML = x;
}