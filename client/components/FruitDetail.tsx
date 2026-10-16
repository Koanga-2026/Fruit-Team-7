import { Link, useParams } from 'react-router'
import fruitData from '../data/fruits.ts'

function FruitDetail() {
  const { name } = useParams()

  const fruit = fruitData.find((fruitName) => fruitName.name === name)

  if (!fruit)
    return (
      <div>
        <h4>FRUIT NOT FOUND NUMPTY!</h4>
      </div>
    )
  //Ticket 2: Need to display all the data - previously grabbed all the data so can just "call" it i.e. fruit.emoji etc
  return (
    <div>
      <h2>
        {fruit.name} {fruit.emoji}
      </h2>
      <img
        className="fruit-detail-image"
        src={fruit.imageUrl}
        alt={fruit.name}
      />
      <p>You are looking at {fruit.name}</p>
      <p>Description: {fruit.description}</p>
      <p>Interesting Fact: {fruit.interestingFact}</p>
      <p>Price: {fruit.price}</p>
      <p>Best Seasons to eat: {fruit.season}</p>
      <Link to="/">Click to return to Homepage</Link>
    </div>
  )
}

export default FruitDetail
