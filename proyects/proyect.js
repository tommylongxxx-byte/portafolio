const formulario = document.getElementById("formulario");
const listaRegistros = document.getElementById("lista-registros");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const datos = new FormData(formulario);
    const nombre = datos.get("nombre");
    const email = datos.get("email");

    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = `Nombre: ${nombre}, Email: ${email}`;

    listaRegistros.appendChild(nuevoItem);

    const usuario = {nombre, email};
    console.log("datos del usuario:", usuario);

    formulario.reset(); // Limpia los campos del formulario
});

