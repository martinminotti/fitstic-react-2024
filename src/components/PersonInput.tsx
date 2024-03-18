// Creare un componente che dovrà visualizzare: 
//
//     • due input di testo, uno per il nome e uno per il cognome.
//     • un pulsante per salvare con scritto "Salva"
//
// App.tsx dovrà utilizzare questo componente e potrà passargli una callback.
// Il comportamento deve essere:
//
//     • quando l'utente preme "salva", app deve essere notificato tramite la 
//       callback del salvataggio e ricevere la persona salvata
//
// Input della callback {name: "....", surname: <....>}


import { useState } from "react";

// Definisco il componente PersonInput
export default function PersonInput(props: {
    // definisco la proprietà del componente: onSave, una funzione di callback che prende come argomento un oggetto con nome e cognome
    readonly onSave: (person: { name: string, surname: string }) => void
}) {
    //estraggo la funzione onSave dalle props
    const { onSave } = props;
    
    // definisco gli stati locali per il nome e il cognome
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");

    return (
        <>
            <div>
                <div>
                    <label>Nome</label>
                    {/* input per il nome, il valore è legato allo stato 'name', l'onChange aggiorna il valore dello stato 'name' */}
                    <input type="text" value={name} onChange={ev => setName(ev.target.value)} />
                </div>
                <div>
                    <label>Cognome</label>
                    {/* come per il nome */}
                    <input type="text" value={surname} onChange={ev => setSurname(ev.target.value)} />
                </div>
                {/* pulsante "Salva" che attiva la funzione onSave passando un oggetto con il nome e il cognome correnti */}
                <button onClick={() => onSave({ name, surname })}>Salva</button>
            </div>
        </>
    );
}
