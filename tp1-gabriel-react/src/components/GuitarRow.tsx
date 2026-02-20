import { type guitarData } from "./guitarList";
import '../styles/GuitarTable.css'

interface GuitarRowProps {
    guitar: guitarData;
}

function GuitarRow({ guitar }: GuitarRowProps) {
    const estAubaine = guitar.note > 5 && guitar.prix < 600;

    return (
        <tr>
            <td>
                <img src={guitar.image} alt={guitar.nom} style={{ width: '100px' }} />
            </td>
            <td>{guitar.nom}</td>
            <td>{guitar.prix} $</td>
            <td>
                {estAubaine ? "👍" : ""}
            </td>
        </tr>
    );
}

export default GuitarRow;