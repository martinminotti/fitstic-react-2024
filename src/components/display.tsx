import {Point} from "../lezione1";
import styles from "./display.module.scss";




export default function Display(props: {
    n: number
    color?:string
    obj?: Point
}) {
    const{n, color = "red" } = props;
    // const ColoreDaUsare = color ?? "red";//introduco coloredausare per chiarire che sto usando un valore di default, ma non è necessario

    return <div className={styles.display} style={{color: color}}>{n}</div>//se volessi usare il colore di default, dovrei scrivere color: ColoreDaUsare
}















































