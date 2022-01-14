import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Coffee from './components/Coffee';
import {useState} from 'react';
import YourCoffee from './components/YourCoffee';
import Login from "./components/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [coffeeNum, setCoffeeNum] = useState(0);
  const [yourCoffee, setYourCoffee] = useState([]);
  const [coffee] = useState([
    {
      id: 1,
      title: "Cappuccino",
      description:
        "espresso-based coffee drink prepared with steamed milk foam",
      img: 'https://picsum.photos/id/113/200/200',
      amount: 0,
    },
    {
      id: 2,
      title: "Iced coffee",
      description:
        "coffee beverage served cold prepared by brewing coffee",
      img: 'https://picsum.photos/id/1060/200/200',
      amount: 0,
    },
    {
      id: 3,
      title: "Matcha Latte",
      description:
        "tea-based beverage with vivid green matcha tea powder",
      img: 'https://picsum.photos/id/225/200/200',
      amount: 0,
    },
    {
      id: 4,
      title: "Espresso",
      description:
        "made with a wide variety of coffee beans",
      img: 'https://picsum.photos/id/2/200/200',
      amount: 0,
    },
    {
      id: 5,
      title: "Tea",
      description:
        "aromatic beverage prepared by pouring hot water over cured or fresh leaves",
      img: 'https://picsum.photos/id/326/200/200',
      amount: 0,
    },
]);
function refresh() {
  let newCoffee=coffee.filter((cof)=>cof.amount>0);
  setYourCoffee(newCoffee);
}
function addCoffee(title, id) {
  setCoffeeNum(coffeeNum+1);
  coffee.forEach((cof)=>{
    if(cof.id===id) {
      cof.amount++;
    }
  });
  refresh();
}
  return (
    <BrowserRouter className="App">
      <NavBar coffeeNum={coffeeNum}/>
      <Routes>
        <Route
        path="/"
        element={<Coffee coffee={coffee} addCoffee={addCoffee}/>}
        />
        <Route
        path="/yourcoffee"
        element={<YourCoffee coffee={yourCoffee}/>}
        />
        <Route 
        path="/login"
        element={<Login/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
