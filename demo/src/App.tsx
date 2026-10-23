import './App.css'
import Card from './Card.tsx'
import Sidebar from './Sidebar.tsx'
import Menu from './Menu.tsx'

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

    </>
  )
}

export default App
