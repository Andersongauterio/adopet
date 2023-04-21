import "./App.css";
import "./assets/styles/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./Routes";

function App() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <AppRoutes />
        </div>
    );
}

export default App;
