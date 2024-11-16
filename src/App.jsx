import { Link, Route, Switch } from "wouter";
import HomePage from "./views/HomePage"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </>
  )
}

export default App
