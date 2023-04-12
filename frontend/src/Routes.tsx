import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PetDetails from './components/PetDetails';
import Contact from './pages/Contact';
import Home from './pages/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/pet">
          <PetDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
