
import Game from "./Game";
import { useStyles } from 'react-styles-hook' 


const styles = useStyles({
  gameContainer: {
    backgroundColor: 'DodgerBlue',
    color: 'rgb(66, 63, 58)', 
    padding: '20px',
    width: '100vw',
    height:'100vh',
    fontWeight: 'bold',
  }, 
})

export default function App() {
  return (
     <> 
    <div style={styles.gameContainer}>
    <Game></Game>
  </div>
  </>
  )
}
