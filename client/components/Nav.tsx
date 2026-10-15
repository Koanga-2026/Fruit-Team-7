import { Link } from "react-router"

function Quiz() {
  return (
    <div className="navlink-container">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/Quiz">
        <span>Quiz</span>
      </Link>
    </div>
  )
}

export default Quiz
