import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const RouterDom = () => {
  return (
    <>
      <Router>
        <div className="navs">
          <nav>
            <ul>
              <li>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "orangered" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "orangered" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/users"
                  style={{ textDecoration: "none", color: "orangered" }}
                >
                  Users
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <p>Ansh Sawant</p>
    </div>
  );
}

export default RouterDom;