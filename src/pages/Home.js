import { Link } from "react-router-dom"
import businessCat from "../assets/images/business-cat.png"

const Home = props => {
  return (
    <div id="home" className="page c-flex align-center">
      <img src={businessCat} alt="Cat in a suit" />
      <h1>
        Welcome to <Link to="/hell">hell</Link>. Grab a suit and get to work.
      </h1>
    </div>
  )
}

export default Home
