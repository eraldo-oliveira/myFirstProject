import { Link, Route, Switch } from "wouter";
import HomePage from "./views/HomePage"
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailsPage from "./views/DetailsPage";
import AddLocationPage from "./views/AddLocationPage";
import TheTravelerPage from "./views/TheTravelerPage";


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/details/:citySlug" component={DetailsPage} />
          <Route path="/add-location" component={AddLocationPage} />
          <Route path="/the-traveler" component={TheTravelerPage} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App
