const Navbar = ({ setCategory }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <span className="badge bg-light text-dark fs-4">Newsify</span>
                </span>

                <div className="navbar-nav">
                    <button className="nav-link btn text-light" onClick={() => setCategory("general")}>
                        Home
                    </button>
                    <button className="nav-link btn text-light" onClick={() => setCategory("technology")}>
                        Technology
                    </button>
                    <button className="nav-link btn text-light" onClick={() => setCategory("world")}>
                        World
                    </button>
                    <button className="nav-link btn text-light" onClick={() => setCategory("business")}>
                        Business
                    </button>
                    <button className="nav-link btn text-light" onClick={() => setCategory("sports")}>
                        Sports
                    </button>
                    <button className="nav-link btn text-light" onClick={() => setCategory("health")}>
                        Health
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
