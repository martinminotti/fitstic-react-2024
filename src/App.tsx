import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import logo from "./assets/logo512.png";
import Display from './components/display';
import Counter from './components/counter';
import TextComponent from './components/TextComponent';
import CounterObjectState from './components/CounterObjectState';
import MyCustomInput from './components/MyCustomInput';
import PersonInput from './components/PersonInput';
import MiddleComponent from './components/MiddleComponent';
import IncrementalComponent from './components/IncrementalComponent';
import ToDoList from './components/todolist/ToDoList';
import { Button } from 'antd';

//qui sotto ho un componente, che è una funzione che restituisce un JSX
//il JSX è una sintassi simile all'HTML, ma è un'estensione di JavaScript
//è una sintassi che permette di scrivere codice HTML all'interno di un file JavaScript

//DIFFERENZE
//1. Invece di usare class, uso className

function calcolo (n1:number){
  console.log("Esecuzione di calcolo con", n1);
  return n1 *2;
}


export default function App(){
  const [text, setText] = useState("");
  const [value, setValue] = useState(10);
  const risultatoCalcolo = calcolo(value);
  //Defiinizione di uno stato, di tipo number, inizializzato a 0
  //setContatore è una funzione che mi permette di modificare il valore di contatore
  // const [contatore, setContatore] = useState(0);
  // console.log("App()", contatore);


  /**
   * Se nello useEffect si passa come lista di dipendendze l'array vuoto[],
   * l'effetto viene eseguito solo una volta, quando il componente viene montato
   */


  useEffect(() => {
    console.log("useEffect evento di mount!");
  });

  //non c'è limite al numero di useEffect che posso definire
  useEffect(() => {
    console.log("useEffect evento di mount!");
  });

  console.log("App()");


  return <>
  <h1>MyReactApp</h1>
  <ToDoList />
  <Button type="primary">Ciao</Button>
  <div>risultato:{value}</div>
  <IncrementalComponent />


  {/* <PersonInput onSave={person => {console.log(person); }} />


  <MiddleComponent onChange={text => {
  console.log(text);
  setText(text);
  }} /> */}


  {/* <MyCustomInput label = {"Nome"}required={true} onChange={text => {
    console.log(text);
    setText(text);
  }} /> */}
  {/* <CounterObjectState /> */}
  {/* <TextComponent /> */}

{/*
    Differenza tra cambio di una prop qualsiasi e cambio di una prop key:

      -se cambia una  prop qualsiasi, il componente viene ridisegnato.
      -se cambia la prop key, il componente viene reinizializzato 
        (tutti gli stati tornano al valore iniziale)
*/}


  <Counter initialValue={value}/>
  {/* <Counter key={value}/> */}
  <button onClick={() => setValue(20)}>Imposta a 20</button>
  <div>value:{value}</div>
  se faccio così, cambia il valore di value ma non l'output del contatore






  <Counter initialValue = {10} />
</>
}


















// export default function App() { //di export default c'è solo uno per file, e rappresenta il componente principale, non ce ne possono essere più di uno
  
//   return <>
//     <div style={{paddingLeft: "30px"}}>
//     <CyclicRenderingComponent />

//     <div className={styles.title}>

//       <img src={logo} alt="logo" />

//       <div>Fitstic React 2024</div>
      
//     </div>
//     {/* <MyComponent /> */}
//     </div>
//   </>
// }
//il tag aperto e chiuso <> </> è il React.Fragment, serve per raggruppare più elementi senza doverli mettere all'interno di un div, altrimenti dovrei sempre fare un div contenitore




const sum = (n1:number, n2:number) =>{
  return n1 + n2;
}





export function MyComponent(){
  // function sum(n1:number, n2:number){
  //   return n1 + n2;
  // }


  let num:number = 5;
  let str:string = "ciao";
  let bool:boolean = true;

  //Rendering condizionale con variabile di appoggio
  let val: JSX.Element; //definisco una variabile di tipo JSX.Element, che può contenere un elemento JSX
  if (bool === true){
    val = <div>1º metodo: Il booleano è true</div>
  } else {
    val = <div>1º metodo: Il booleano è false</div>
  }


  let varAppoggio: JSX.Element;
  switch (num){
    case 1:
      varAppoggio = <div>Il numero è 1</div>
      break;
    case 2:
      varAppoggio = <div>Il numero è 2</div>
      break;
    default:
      varAppoggio = <div>Il numero è diverso da 1 e 2</div>
  }

  let risultatoSomma = sum(3,4);


  return<>
    <h2>MyComponent!</h2>
    <div>num: {num}</div>
    <div>str: {str}</div>
    <div>bool: {bool} Attenzione! I booleani non vengono visualizzati!</div> 
    {val}


    {/* Rendering condizionale con operatore ternario */}
    {bool === true 
    ? <div>2º metodo: Il booleano è true</div> 
    : <div>2º metodo: Il booleano è false</div>
    }
    
    {/* SOLUZIONE PIÙ CORRETTA E SPICCIOLA - Rendering condizionale con operatore && */}
    {bool === true && <div>3º metodo - IL PIU CORRETTO - : Il booleano è true</div>}
    
    {/* null non viene visualizzato */}
    {null}

    {varAppoggio}


    <div>Risultato somma: {risultatoSomma}</div>
    <div> Risultato somma: {sum (3,4)}</div>
  </>
  /*per stampare un booleano devo concatenarlo con una stringa vuota*/
  //grazie alle graffe posso scrivere codice JavaScript all'interno del JSX
}

export function CyclicRenderingComponent() {
  let array = [2, 4, 6, 7];

  let arrayDiJsx = [];
  for (let i = 0; i < array.length; i++) {
    arrayDiJsx.push(<div key={i}>arrayDiJsx posizione {i}: {array[i]}</div>);
  }

  return <>
    <h4>Rendering ciclico</h4>
    {array.map((item, index) => <div key={index}>Num {index}: {item}</div>)}
    {arrayDiJsx}
  </>
}