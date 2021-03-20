
//Seleccionamos la etiquetas
const btnAumentar = document.querySelector(".btn-info")
const btnDisminuir = document.querySelector(".btn-danger")
const span = document.getElementById("span")
const h1 = document.querySelector("h1").textContent = "Contador de Click"

let contador =0

//Capturamos los eventos de los botones
btnAumentar.addEventListener("click",()=>{

	console.log("Diste click en aumetar")
	contador++
	
	span.textContent =contador
})

btnDisminuir.addEventListener("click",()=>{
	console.log("Diste click en Disminuir")
	contador--
	span.textContent=contador
})

// Con EventDelegation

// const container = document.querySelector(".container")
// container.addEventListener("click",e=>{
// 	if (e.target.classList.contains("btn-info")){
// 		console.log("click en Aumentar")
// 		contador++
// 		span.textContent =contador
// 	}

// 	if (e.target.classList.contains("btn-danger")){
// 		console.log("click en Disminuir")
// 		contador--
// 		span.textContent =contador
// 	}



	
	


