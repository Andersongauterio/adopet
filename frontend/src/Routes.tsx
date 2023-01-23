import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PetDetails from "./pages/PetDetails";

const Routes = () => {
	return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/pet/:petId">
					<PetDetails />
				</Route>
            </Switch>
        </BrowserRouter>
    );
};
export default Routes;