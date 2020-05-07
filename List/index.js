 var entrada = document.getElementById("entry");
 var boton = document.getElementById("bEntry");
 var lista = document.getElementById("list");

 boton.addEventListener("click", create );

function create(){
  var task = entrada.value;
  if(task === "") {
    entrada.setAttribute("placeholder", "Add something");
     return false
   };
  var newTask = document.createElement("li");
  var content = document.createTextNode(task);
  newTask.appendChild(content);
  lista.appendChild(newTask);
  entrada.value = "";

  for(var i = 0 ; i < lista.children.length ; i++){
    lista.children[i].addEventListener("click", delet);
  };
};

function delet(){this.parentNode.removeChild(this)}
