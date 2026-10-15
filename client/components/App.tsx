import { Outlet } from 'react-router'
import Nav from './Nav'

function App() {
  return (
    <>
      <header>
        <h1>Fruit Stand</h1>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
