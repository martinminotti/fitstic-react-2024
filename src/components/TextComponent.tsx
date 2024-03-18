import {useState} from 'react';

export default function TextComponent() {
    //Stato contiene il valore inputato dall'utente
    // Instanzio una variabile di stato, e una funzione che mi permette di modificarlo
    const [text, setText] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return <>
        <h1>Campo di Testo</h1>
        
        {/*                                                                
                                                                            Passargli questo valore vuol 
                                                                            dire che il campo
                                                                            è controllato da me!!
                                                                                |
                                                                                |
                                                                                |
                                                                                |
                                                                                V
        */}

        <div> Username: <input type="text" placeholder="Inserisci il nome" value={text} onChange={(ev) => {
            console.log(ev.target.value);
            setText(ev.target.value);

        }}/> <button onClick={()=>{
            setText("");
        }}>Pulisci</button></div>

        <div> Password: <input type="password" onChange={(ev) => {
            console.log(ev.target.value);
            setPassword(ev.target.value);
        }}/> </div>
        
        <div>Username: {text}</div>
        <div>Password: {password}</div>
        
    </>
}

