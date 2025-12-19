import './App.css'
import { useState, useEffect } from 'react'

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked, title]);

  return (
    <div  className = "card">
      <h2>{title}</h2>

      <button onClick= {() => setHasLiked(!hasLiked)}>
      {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )

}

const App = () => {

  return (
    //for style go to index.css .class-container
    <div className = "card-container"> 
      <Card title = "Avatar"/>
      <Card title = "Home alone"/>
      <Card title = "Space rangers"/>
    </div>
  )

}

export default App
