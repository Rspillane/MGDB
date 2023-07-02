
import styles from './page.module.css'
import GameCard from './components/gameCard'
import games from './objects'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>My Game Vault</h1>
      <div className='cards-container'>
        {games.map((game, index) => (
          <GameCard title={game.title} console={game.console} rating={game.rating}/>
        ))}
        <button onClick={createNewGame}>New Game</button>
        <GameCard title="Metroid" console="GameCube" rating="10"/>
        <GameCard title="Mario" console="N64" rating="2"/>
      </div>

    </main>
  )
}
