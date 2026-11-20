import './App.css'
import Card from './Card.tsx'
import Sidebar from './Sidebar.tsx'
import Menu from './Menu.tsx'
import Component_2 from './Component_2.tsx'

function App() {


  return (
    <>
      <h1>Willkommen</h1>

      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="menu">
        <Menu />
      </div>

      <div className="component_2">
        <Component_2 />
      </div>

    </>
  )
}

export default App
