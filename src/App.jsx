import reactLogo from './assets/react.svg'
import './App.css'
import Greeting from './Greeting'

function App() {
  

  return (
    <>
      <div>

        <img src={reactLogo} className="logo react" alt="React logo" />

      </div>
      <h1>Vite + React</h1>

      <Greeting />

    </>
  )
}

export default App
