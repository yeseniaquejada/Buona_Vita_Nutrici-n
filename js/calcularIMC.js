let pacientes = document.querySelectorAll(".paciente")

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i]
  let tdPeso = paciente.querySelector(".info-peso")
  let peso = tdPeso.textContent

  let tdAltura = paciente.querySelector(".info-altura")
  let altura = tdAltura.textContent

  let tdIMC = paciente.querySelector(".info-imc")

  pesoValido = validarPeso(peso)
  alturaValida = validarAltura(altura)

  if (!pesoValido) {
    console.log("Peso incorrecto")
    tdIMC.textContent = "Peso incorrecto"
    pesoValido = false
    paciente.classList.add("paciente-incorrecto")
  }

  if (!alturaValida) {
    console.log("Altura incorrecto")
    tdIMC.textContent = "Altura incorrecto"
    alturaValida = false
    paciente.classList.add("paciente-incorrecto")
  }

  if (pesoValido && alturaValida) {
    tdIMC.textContent = calcularIMC(peso, altura)
  }
}

function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura)
  return imc.toFixed(2)
}

function validarPeso(peso) {
  if ((peso > 0 && peso < 1000)) {
    return true
  }else{
    return false
  }
}

function validarAltura(altura) {
  if (altura > 0 && altura < 3.00){
    return true
  }else{
    return false
  }
}