import styles from './page.module.css'
import GameCard from './components/gameCard'
import games from './objects'
import MyForm from './components/form';

export default function Home() {

  const listItems = games.map(game => 
    <GameCard title={game.title} console={game.console} rating={game.rating}/>
  );

  return (
    <main className={styles.main}>
      <MyForm></MyForm>
      <h1>My Game Vault</h1>
      <div className='cards-container'>
        <ul>{listItems}</ul>
        <button>New Game</button>
      </div>
    </main>
  );
}
