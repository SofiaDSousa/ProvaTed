import { criarFila, inserirItemFila, retirarItemFila} from "./fila.js";

console.log("Nossa fila")


const fila = criarFila(5);

inserirItemFila(fila, "musica");
inserirItemFila(fila, "musica1");

console.log("Fila", fila);

retirarItemFila(fila);
retirarItemFila(fila);

console.log(fila)

// esvaziarFila(fila);

// verTamanhoFila(fila)

// as três funções criar, inserir e retirar estão funcionando, menos as duas ultimas