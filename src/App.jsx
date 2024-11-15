import { Link, Route, Switch } from "wouter";
import HomePage from "./views/HomePage"
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  )
}

export default App
