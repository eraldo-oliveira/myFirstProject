import { Link, Route, Switch } from "wouter";
import HomeView from "./views/HomeView"

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomeView} />
      </Switch>
    </>
  )
}

export default App
