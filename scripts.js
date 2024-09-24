const form = document.querySelector(".formulario-agendamento")
const mascara = document.querySelector(".mascara-formulario")

function mostrarform() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderform() {
    mascara.style.visibility = "hidden"
    form.style.transform = "translateX(0)"
    form.style.left = "-50%"
}