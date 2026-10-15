import { useParams } from "react-router"
import fruitData from '../data/fruits.ts'

function FruitDetail(){
const { name } = useParams()

const fruit = fruitData.find((fruitName) => fruitName.name === name)

if (!fruit) 
  return(
    <div>
      <h4>FRUIT NOT FOUND NUMPTY!</h4>
    </div>

  )

  return (
    <div>
      <h2>{fruit.name}</h2>
      <p>You are looking at {fruit.name}</p>
    </div>
  )
}

export default FruitDetail
