import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";

function App() {
  // const [place, setPlace] = useState("");
  // const [placeData, setPlaceData] = useState({});

  // const updatePlaceData = () => {
  //   fetch(
  //     `https://api.weatherapi.com/v1/current.json?key=e0c416034cbf48dc852153122210908&q=${place}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPlaceData(data);
  //     });
  // };

  return (
    <div className="App">
      <Form />
      <WeatherCard />
    </div>
  );
}

export default App;