
import styles from './page.module.css'
import GameCard from './components/gameCard'

export default function Home() {


  return (
    <main className={styles.main}>
      <h1>My Game Vault</h1>
      <div className='cards-container'>
        <GameCard title="Metroid" console="GameCube" rating="10"/>
        <GameCard title="Mario" console="N64" rating="2"/>
      </div>

    </main>
  )
}
