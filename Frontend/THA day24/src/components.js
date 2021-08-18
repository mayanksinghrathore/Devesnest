const Home = ({ log, setLog }) => {
    return (
      <div className="main">
        <h1>Home</h1>
        <h2>If not logged in cant access, Profile & Dashboard</h2>
        <button onClick={() => setLog(!log)}>
          {log === true ? "Logout" : "Login"}
        </button>
      </div>
    );
  };
  
  const About = () => {
    return (
        <div className="main">
        <h1>About</h1>
        <h2>Mayank Singh Rathore</h2>
      </div>
    );
  };
  
  const Profile = () => {
    return <h1>Profile</h1>;
  };
  
  const Dashboard = () => {
    return <h1>Dashboard</h1>;
  };
  
  export { Home, About, Profile, Dashboard };