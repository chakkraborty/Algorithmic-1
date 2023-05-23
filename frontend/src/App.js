import './App.css';
import Login from "./components/screens/login/login";
import Register from "./components/screens/register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Login />
          <Register />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
