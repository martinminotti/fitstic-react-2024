import { useState } from "react";
import Display from "./display";

interface State{
    readonly value: number;
}

export default function CounterObjectState() {
    //Defiinizione di uno stato, di tipo number, inizializzato a 0
    //setContatore è una funzione che mi permette di modificare il valore di contatore
    const [state, setState] = useState<State>({value : 0}); //tra parentesi angolari metto il tipo di stato, in modo da poterlo usare come interfaccia


    console.log("CounterWithObjectState()", state);

    return <>
    <Display n={state.value} color='black'/>

    <button onClick={() =>{
        
        
        const newState:State = {
            ...state,
            value: state.value + 1
        }
        setState(newState);
        console.log("aggiunto 1, ", state.value); 
    }}>PREMI QUI PER AGGIUNGERE 1 BRO</button>

    {state.value > 5 && <div>attenzione! maggiore di 5!</div>}
    </>
}



