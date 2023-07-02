
import styles from './page.module.css'
import GameCard from './components/gameCard'

export default function Home() {

  //I don't know how to add stuff interactively in React
  const cardContainer = .getElementsByClassName("cards-container")[0]

  const createNewGame = () => {
    cardContainer.append(<GameCard></GameCard>);
  }
  return (
    <main className={styles.main}>
      <h1>My Game Vault</h1>
      <div className='cards-container'>
        <button onClick={createNewGame}>New Game</button>
        <GameCard title="Metroid" console="GameCube" rating="10"/>
        <GameCard title="Mario" console="N64" rating="2"/>
      </div>

    </main>
  )
}
