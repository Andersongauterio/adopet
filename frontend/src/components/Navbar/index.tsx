import './styles.css';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary navbar-container">
            <div className="container-fluid">
                <h4>AdoPet</h4>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#adopet-navbar"
                    aria-controls="adopet-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;