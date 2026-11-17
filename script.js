
let listaDeSuper = ["Sal", "Leche", "Arroz"];

function logItems(arreglo) {
    arreglo.forEach(function(producto, indice) {
        console.log(`${indice}: ${producto}`);
    });
}

function iniciarApp() {
    let comando = prompt("¿Qué querés hacer? nuevo, listar, borrar o salir");

    while (comando !== null && comando.toLowerCase() !== "salir") {

        comando = comando.toLowerCase();

        if (comando === "nuevo") {
            let producto = prompt("¿Qué producto querés agregar?");

            if (producto && producto.trim() !== "") {
                listaDeSuper.push(producto);
                console.log(`${producto} fue agregado.`);
            }

        } else if (comando === "listar") {
            logItems(listaDeSuper);

        } else if (comando === "borrar") {
    logItems(listaDeSuper);

    let producto = prompt("¿Qué producto querés borrar?");

    let indice = listaDeSuper.indexOf(producto);

    if (indice !== -1) {
        let eliminado = listaDeSuper.splice(indice, 1);
        console.log(`${eliminado[0]} fue eliminado.`);
    } else {
        console.log("Ese producto no está en la lista.");
    }

        } else {
            console.log("Comando inválido.");
        }

        comando = prompt("¿Qué querés hacer? nuevo, listar, borrar o salir");
    }

    console.log("¡Hasta luego!");
}

// Iniciar el programa una sola vez
iniciarApp();
