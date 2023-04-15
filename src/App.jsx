import Galeria from "./Galeria"
import bulbasaur from './img/1.jpg'
import ivysaur from './img/2.jpg'
import venasaur from './img/3.jpg'
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"

const pokedex = [ //array o vector 
  {
    nombre: 'Bulbasaur',
    img: bulbasaur,
    tipo: 'Planta',
    descripcion: 'AAAA'
  },
  {
    nombre: 'Ivysaur',
    img: ivysaur,
    tipo: 'Planta'
  },
  {
    nombre: 'Venasaur',
    img: venasaur,
    tipo: 'Planta'
  },
]

function App() {

  return (



    <div className="App">
      <Navbar />
      <Galeria pokedex={pokedex} />
      <Footer />
    </div>





  )
}

export default App
