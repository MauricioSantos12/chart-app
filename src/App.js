import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart/BarChart";
import { UserData } from "./Data";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import TwoColumns from "./components/twoColumns/TwoColumns.jsx";
import Footer from "./components/Footer/Footer";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <Header />
      <Cards />
      <BarChart chartData={userData} />
      <TwoColumns chartData={userData} />
      <Footer />
    </div>
  );
}

export default App;
