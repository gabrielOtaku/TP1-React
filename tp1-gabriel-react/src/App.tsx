import '../src/styles/App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import GuitarTable from './components/GuitarTable'

function App() {

  return (
    <div>
    <Banner titre= "Apprenez la musique avec nous et devenez une rockstar ! 🎸🎸🎸🎸🎸"/>
    <GuitarTable/>
    <Footer/>

    </div>
  )
}

export default App
