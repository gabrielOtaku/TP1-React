import '../styles/GuitarTable.css'
import GuitarRow from './GuitarRow'
function GuitarTable(){

    return(
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
                {guitarList.map(g => <GuitarRow key={g.id} guitar={g} />)}

            </tbody>
        </table>
        </div>

          <button className='btn btn-primary' >info</button>
        </div>
    )


}
export default GuitarTable