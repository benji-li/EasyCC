var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var elmnt = document.getElementById("secondary");
elmnt.appendChild(node);

var el = document.getElementById("body");
el.appendChild(node);