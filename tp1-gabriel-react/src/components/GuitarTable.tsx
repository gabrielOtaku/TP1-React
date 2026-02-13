import '../styles/GuitarTable.css'
import GuitarRow from './GuitarRow'
import { guitarList } from './guitarList'

function GuitarTable() {

    const handleInfo = () => {
        const total = guitarList.reduce((acc, guitar) => acc + guitar.prix, 0);
        alert(`Savais-tu que tu pourrais acheter toutes ces guitares pour seulement ${total}$? C'est donné!`);
    };

    return (
        <div className="gt-table">
            <h3>Nos meilleurs vendeurs</h3>

            <div className="gt-element">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Aubaine</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Boucle map et passage de la key  */}
                        {guitarList.map(g => (
                            <GuitarRow key={g.id} guitar={g} />
                        ))}
                    </tbody>
                </table>
            </div>
            <button className='btn btn-primary' onClick={handleInfo}>Info</button>
        </div>
    )
}

export default GuitarTable;