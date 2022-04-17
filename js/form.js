let botonAdicionar = document.querySelector("#adicionar-paciente")

botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault()

  let form = document.querySelector("#form-adicionar")
  let paciente = capturarDatosPaciente(form)
  let errores = validarPaciente(paciente)

  if (errores.length > 0) {
    exhibirMensajeErrores(errores)
    return
  }
  adicionarPacientesTabla(paciente)
  form.reset()
  let mensajesErrores = document.querySelector("#mensajes-errores")
  mensajesErrores.innerHTML = ""
})

function adicionarPacientesTabla(paciente) {
  let pacienteTr = construirTr(paciente)
  let tabla = document.querySelector("#tabla-pacientes")
  tabla.appendChild(pacienteTr)
}

function capturarDatosPaciente(form) {
  //Capturando los datos del formulario
  let paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc : calcularIMC(form.peso.value, form.altura.value)
  }

  return paciente
}

function construirTr(paciente) {
  let pacienteTr = document.createElement("tr")
  pacienteTr.classList.add("paciente")

  pacienteTr.appendChild(contruirTd(paciente.nombre,"info-nombre"))
  pacienteTr.appendChild(contruirTd(paciente.peso,"info-peso"))
  pacienteTr.appendChild(contruirTd(paciente.altura,"info-altura"))
  pacienteTr.appendChild(contruirTd(paciente.gordura,"info-gordura"))
  pacienteTr.appendChild(contruirTd(paciente.imc,"info-imc"))

  return pacienteTr
}

function contruirTd(dato,clase) {
  let td = document.createElement("td")
  td.classList.add(clase)
  td.textContent = dato

  return td
}

function validarPaciente(paciente) {
  let errores = []

  if (paciente.nombre.length == 0) {
    errores.push("El nombre no puede estar vacío")
  }

  if (paciente.peso.length == 0) {
    errores.push("El peso no puede estar vacío")
  }

  if (paciente.altura.length == 0) {
    errores.push("La altura no puede estar vacía")
  }

  if (paciente.gordura.length == 0) {
    errores.push("El %  gordura no puede estar vacío")
  }

  if (!validarPeso(paciente.peso)) {
    errores.push("El peso es incorrecto")
  }

  if (!validarAltura(paciente.altura)) {
    errores.push("La altura es incorrecta")
  }
  return errores
}

function exhibirMensajeErrores(errores) {
  let ul = document.querySelector("#mensajes-errores")
  ul.innerHTML = ""

  errores.forEach(function (error) {
    let li = document.createElement("li")
    li.textContent = error;
    ul.appendChild(li)
  })
}