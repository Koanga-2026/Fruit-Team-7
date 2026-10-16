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
  const [conflict, setConflict] = useState(false)
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
      <div className="shuriken shuriken-1"></div>
      <div className="shuriken shuriken-2"></div>
      <div className="shuriken shuriken-3"></div>
      <div className="shuriken shuriken-4"></div>
      <div className="shuriken shuriken-5"></div>
      <div className="shuriken shuriken-6"></div>
      <h2>Home</h2>
      <p>Team 7's Fruit Stand!</p>
      <SearchBox
        value={search}
        onChange={setSearch}
        currentSeason={currentSeason}
        setCurrentSeason={setCurrentSeason}
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
      />
      <button
        className="deploy-to-prod-btn"
        onClick={() =>
          alert('Deploying to production... just kidding. Go home. 🍺')
        }
      >
        <span className="deploy-normal">🚀 Deploy to Prod</span>
        <span className="deploy-panic">😰 Are you sure?! It's Friday!</span>
      </button>
      <div className="fruit-list">
        {filteredFruit.map((fruit) => (
          <div className="fruit-card" key={fruit.name}>
            <img
              className="fruit-image"
              src={fruit.imageUrl}
              alt={fruit.name}
              loading="lazy"
            />
            <div className="fruit-card-body">
              <span className="fruit-emoji">{fruit.emoji}</span>
              <h3>{fruit.name}</h3>
              <p className="fruit-season">{fruit.season}</p>
              <Link to={`/fruits/${fruit.name}`}>View {fruit.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
