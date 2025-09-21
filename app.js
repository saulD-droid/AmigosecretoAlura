let amigos = [];

function agregarAmigo() { 
  let inputAmigo = document.getElementById("amigo");
  let amigo = inputAmigo.value;

  if (amigo.trim() === "") {
    alert("Por favor, ingresa el nombre de un amigo.");
    return;
   }

   
   

  amigos.push(amigo);
  inputAmigo.value = "";
  

 }


function sortearAmigo() {

    if (amigos.length === 0) {
        alert("No hay ningun nombre en la lista, agrega algunos por favor.");
        return;
    }

    let indiceAl = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAl];
    let resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `¡El amigo sorteado es: ${amigoSeleccionado}`;
    
    }

function mostrarAmigo() {
  
  let lista = document.getElementById("listaAmigos");
  
  lista.innerHTML = "";
  
  for (let i = 0; i < amigos.length; i++) {
  
    let li = document.createElement("li");
    li.textContent = amigos[i];
    
    lista.appendChild(li);
  }
}

          