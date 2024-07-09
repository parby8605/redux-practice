import './App.css'
import Outside from './components/Outside'
import Providers from './redux/Providers'

function App() {
  return (
    <>
      <Providers>
        <Outside></Outside>
      </Providers>
    </>
  )
}

export default App
