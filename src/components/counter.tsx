import { useEffect, useState } from "react";
import Display from "./display";

export default function Counter(props:{
    readonly initialValue?: number;
}) {

    const{initialValue = 0} = props;
    //Defiinizione di uno stato, di tipo number, inizializzato a 0
    //setContatore è una funzione che mi permette di modificare il valore di contatore
    const [contatore, setContatore] = useState(initialValue);
    console.log("Counter()", contatore);


    // Lo useEffect viene eseguito ogni volta che il valore di initialValue cambia
    // In questo caso lo uso per inizializzare il contatore con initialValue
    // In generale, lo useEffect è un hook che permette di eseguire del codice in risposta a cambiamenti di stato
    // Lo useEffect viene eseguito dopo che il componente è stato renderizzato

    /** come si legge in italiano?
     * 
     * quando almeno una delle variabili indicate nella lista delle dipendenze cambia,
     * allora viene invocato l'effetto
     * 
     * 
     * con:
     *      lista delle dipendenze -> array (secondo argomento di useEffect)
     *      effetto -> funzione (primo argomento di useEffect)
     */





    useEffect (() => {
        console.log("useEffect in azione", initialValue);
        setContatore(initialValue);
        return () => {
            console.log("return useEffect");
        }
    },[initialValue]);




    return <>
    <Display n={contatore} color='black'/>

    <button onClick={() =>{
        // setContatore(partial => partial + 2);
        setContatore(partial => partial + 1);
        console.log("aggiunto 1, ", contatore); 
    }}>PREMI QUI PER AGGIUNGERE 1 BRO</button>

    <button onClick={() =>{
        setContatore(contatore - 1);
        console.log("tolto 1, ", contatore); 
    }}>PREMI QUI PER Togliere 1 BRO</button>

    {contatore > 5 && <div>attenzione! maggiore di 5!</div>}
    </>
}



