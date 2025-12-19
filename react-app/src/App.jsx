import './App.css'

const Card = ({ title }) => {
  return (
    <div  className = "card">
      <h2>{title}</h2>
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
