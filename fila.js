export function criarFila(tamanho = 10) {
    return [... new Array(tamanho)]
}

export function inserirItemFila(fila, item) {
    const spacePosition = fila.indexOf(undefined);
    if (spacePosition === -1) {

        console.log("Está cheio");

        return;
    }


    fila[spacePosition] = item;

}

export function retirarItemFila(fila) {

    if (fila[0] == undefined) {
        
        return; 
        
    }

    let itemPegado = fila[0];

    for (let i = 0; i < fila.length; i++) {
        fila[i] = fila[i + 1];
    }
       
    return itemPegado;

}

export function esvaziarFila(fila) {
    let primeiro = fila[0];

    for (i = 0; i < fila.length; i++) {
        fila[i] = undefined;
    }

    return primeiro;
}

// //
// export function verTamanhoFila(fila = []) {
//     let emptySpaces  (fila.length, fila.indexOf(undefined));
//     let usedSpaces = emptySpaces
//     let size = fila.length
//     let subFila = []

//     for (let i = 0; i < fila.indexOf(undefined); i++) { subFila[i] = fila[i] }

//     console.log(fila,

//         {

//             "emptySpaces": emptySpaces,
//             "usedSpaces": usedSpaces,
//             "size": size,
//             "subF": subFila,

//         }

//     )

// }
// //

