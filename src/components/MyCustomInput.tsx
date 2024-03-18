import { useState } from "react";

export default function MyCustomInput(props: {
    readonly label: string;
    readonly required: boolean;

    //Callback da ricevere in input
    //serve per passare al genitore un contenuto informativo
    //in questo caso, passa al genitore il testo dell'inpu ogni volta
    //che il testo cambia
    readonly onChange: (text: string) => void
}) {
    const { required, label, onChange } = props;
    const [text, setText] = useState<string>("");
    return <>
        <div>
            <div>
                <label>{label} {required === true && <span>*</span>}</label>
                <input type="text" value={text} onChange={ev => {
                    setText(ev.target.value);

                    //Invocazione della callback
                    //passa al genitore il nuovo valore dell'input
                    onChange(ev.target.value);
                }} />
            </div>
            {text.length === 0 && required === true && <div>Campo obbligatorio</div>}
        </div>
    </>
}