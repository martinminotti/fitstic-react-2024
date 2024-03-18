
export{ }

console.log('Hello, World!');

// Tipi primitivi
const i: number = 0;
let str:string = 'Hello, World!';
let bool:boolean = true;
str = 'World!';

let array: number[] = [1, 2, 3]; // Array di numeri, scrivo sempre quando possibile il tipo per evitare errori di assegnazione

enum WeekDays { // Enumerazione
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

let myDay:WeekDays = WeekDays.MONDAY;
let dayArray:WeekDays[] = [WeekDays.MONDAY, WeekDays.TUESDAY, WeekDays.WEDNESDAY, WeekDays.THURSDAY, WeekDays.FRIDAY, WeekDays.SATURDAY, WeekDays.SUNDAY];


console.log(array);
array.push(5); // Aggiunge un elemento in coda all'array
console.log(array);

let nuovoArray = array.concat(6);// Restituisce un nuovo array con l'elemento 6 in coda

//push e concat differiscono per il fatto che push modifica l'array originale, mentre concat restituisce un nuovo array

console.log("array", array);
console.log("nuovoArray", nuovoArray);

nuovoArray.pop(); // Rimuove l'ultimo elemento dell'array cambiando l'array di partenza


// Oggetti e strutture dati. Instanzio un punto sul piano cartesiano
let punto = {
  x: 0, y: 0
};

export interface Point {
  readonly x: number;
  readonly y: number;
  readonly z?: number; // Il punto può avere una terza coordinata z come parametro opzionale
}

const mioPunto:Point = {
  x: 9,
  y: 2
};

// mioPunto.x = 10; 
//Grazie alla keyword readonly non posso modificare i valori di x e y successivamente all'assegnazione

interface Point3d extends Point {
  readonly z: number;
}

const punto3d:Point3d = {
  x: 1,
  y: 1,
  z: 1
};


/* // Funzioni
function sum(n1:number, n2:number): number{ //scrivo sempre il tipo di ritorno "number" della funzione per evitare errori
  return n1 + n2;
} */


// Funzioni con interfaccia
// L'interfaccia mi permette di definire il tipo di una funzione, cosa fa. Non come la fa.
interface Sum {
  (pippo:number, pluto:number): number; //non importa come si chiamano i parametri, ma il tipo di ritorno, in questo caso number, perchè la funzione restituisce un numero
}


//arrow function = una funzione anonima che posso assegnare ad una variabile affinché sia possibile chiamarla successivamente con il nome della variabile
const sum2: Sum = (n1:number, n2:number): number =>{
  return n1 + n2;
}

console.log(sum2(2, 3));


interface PuntoConFunzione {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly sum : Sum;
}

const mioPuntoConFunzione:PuntoConFunzione = {
  x: 4,
  y: 2,
  sum: (n1:number, n2:number): number =>{ //posso definire la funzione direttamente nell'oggetto perchè ho definito il tipo di funzione nella interfaccia 
    return n1 + n2;
  }
};


//un altro metodo per instaziare delle costanti è il seguente
const {z, y, x} =punto3d; //assegno a z, y e x i valori di punto3d.x, punto3d.y e punto3d.z
console.log("x =", x);

//così è molto più comodo e leggibile rispetto a scrivere punto3d.x, punto3d.y, punto3d.z


//instanziatore puntini
const punto3d2:Point3d = {...punto3d}; //creo un nuovo punto3d2 con le stesse coordinate di punto3d
//Questo nuovo instanziatore è molto utile per creare copie di oggetti e array senza modificarli
//Può essere inteso come un metodo per CLONARE oggetti e array
console.log("punto3d2: ",punto3d2);
console.log("punto3d",punto3d);



//funzioni classiche della programmazione funzionale
const arr1 = [1, 2, 3];
const risultato = arr1.map((item) => item * 2); //map applica una funzione ad ogni elemento dell'array
console.log("arr1", arr1);
console.log("risultato", risultato);


const arr2 = [1, 2, 3];
const risultato2 = arr1.filter(item => (item % 2) === 0); //filter restituisce un nuovo array con gli elementi che soddisfano la condizione
console.log("arr2", arr2);
console.log("risultato2", risultato2);

//esporto il file
// Path: src/lezione1.ts
