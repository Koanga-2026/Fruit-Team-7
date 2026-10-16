import fruitData from '../data/fruits'
import { Link } from 'react-router'
import { useState } from 'react'
import SearchBox from './SearchBox'

function Home() {
  const [search, setSearch] = useState('')
  //create states for both seasons and price (because these are dynamic)
  const [currentSeason, setCurrentSeason] = useState('All')
  const [sortPrice, setSortPrice] = useState('default')
  //using the searchbox we want to be able to filter by season aswell (then eventually sort (by price))
  //the search and the filter need to match (when returned)
  const filteredFruit = fruitData
    .filter((fruit) => {
      const matchesSearch = fruit.name
        .toLowerCase()
        .includes(search.toLowerCase())
      //this is where state will change for filter
      const matchesSeason =
        currentSeason === 'All' ||
        fruit.season.toLowerCase().includes(currentSeason.toLowerCase())
      return matchesSearch && matchesSeason
    })
    //Sorting price selections high-low and low-high
    .sort((a, b) => {
      if (sortPrice === 'low-high') return a.price - b.price
      if (sortPrice === 'high-low') return b.price - a.price
    })

  if (filteredFruit.length === 0) {
    return <p>No fruits or season found</p>
  }
  //add in states to searchbox //
  return (
    <div>
      <h2>Home</h2>
      <p>React Development has Begun</p>
      <SearchBox
        value={search}
        onChange={setSearch}
        currentSeason={currentSeason}
        setCurrentSeason={setCurrentSeason}
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
      />

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
