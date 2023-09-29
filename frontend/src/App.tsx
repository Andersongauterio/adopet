import "./assets/styles/custom.scss";
import "./App.css";
import AppRoutes from "./Routes";

function App() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <AppRoutes />
        </div>
    );
}

export default App;
