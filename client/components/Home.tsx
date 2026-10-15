import fruitData from '../data/fruits'
import { Link } from 'react-router'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>React Development has Begun</p>
      <div className="fruit-list">
        {fruitData.map((fruit) => (
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
