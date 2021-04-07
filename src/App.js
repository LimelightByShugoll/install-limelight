import { Switch, Route } from "react-router-dom"
import { Home, NotFound } from "./pages"

function App() {
  return (
    <Switch>
      <Route exact path="/" render={loc => <Home {...loc} />} />
      <Route path="*" render={loc => <NotFound {...loc} />} />
    </Switch>
  )
}

export default App
