const listaSuper = document.getElementById("lista-super");
const input = document.getElementById("input-lista");
const botonAgregar = document.getElementById("boton-agregar");

botonAgregar.addEventListener("click", onClickAdd);
input.addEventListener("input", onTypeList);

function onClickAdd() {
    const li = createListItem(input.value);
    listaSuper.appendChild(li);
    input.value = "";
    botonAgregar.disable = true;
}

function onTypeList() {
    botonAgregar.disable = input.value.length === 0;
}

function guardar() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto Agregado con Exito",
        showConfirmButton: false,
        timer: 1500
    })
}

function createListItem(name) {
    const listItem = document.createElement("li");
    const heading = document.createElement("span");
    heading.textContent = name;
    const botonEliminar = document.createElement("button");

    listItem.classList.add("lista-item");
    botonEliminar.textContent = "X";
    botonEliminar.id = "boton-eliminar";
    botonEliminar.addEventListener("click", onClickDelete);

    listItem.appendChild(heading);
    listItem.appendChild(botonEliminar);

    return listItem;
}

function onClickDelete() {
    this.parentNode.remove();
}