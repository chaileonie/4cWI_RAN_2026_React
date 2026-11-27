
import Card from './Card.tsx'
import Sidebar from './Sidebar.tsx'
import Menu from './Menu.tsx'
import styles from './App.module.css'

function App() {


  return (
    <>
      <h1>Willkommen</h1>

      <div className={styles.cardcontainer}>
        <Card title="Peter" text="Hallo, ich bin Peter!" image="https://picsum.photos/150/200" />
        <Card title="Susi" text="Hallo, ich bin Susi!" image="https://picsum.photos/150/200" />

      </div>
      <div className={styles.sidebar}>
        <Sidebar title="Navigation" numbering={1} />


      </div>

      <div className={styles.menu}>
        <Menu title="Home" description="Willkommen auf unserer Website" />
      </div>


    </>
  )
}

export default App
