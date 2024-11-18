import './App.css'
import Header from "./components/header/header.tsx"
import { Fonts } from "./styles/fonts"

function App() {
  return (
    <>
      <Fonts />
      <div className="App">
        <Header title="Holidaze" />
      </div>
    </>
  )
}

export default App
