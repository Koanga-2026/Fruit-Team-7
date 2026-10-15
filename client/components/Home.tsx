import fruitData from '../data/fruits'
import { Link } from 'react-router'
import { useState } from 'react'
import SearchBox from './SearchBox'

function Home() {
  const [search, setSearch] = useState('')
  const filteredFruit = fruitData.filter((fruit) =>
    fruit.name.toLowerCase().includes(search.toLowerCase()),
  )

  if (filteredFruit.length === 0) {
    return <p>No fruits found</p>
  }
  return (
    <div>
      <h2>Home</h2>
      <p>React Development has Begun</p>
      <SearchBox value={search} onChange={setSearch} />
      <div className="fruit-list">
        {filteredFruit.map((fruit) => (
          <div className="fruit-card" key={fruit.name}>
            <h3>{fruit.name}</h3>
            <Link to={`/fruits/${fruit.name}`}>View {fruit.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

/*
Show every fruit as a card using .map(), with its name and a link to its own page.

You'll practise: importing data, .map(), keys and Link

Done when: every fruit shows as a card, and clicking one opens its fruit page.
*/
