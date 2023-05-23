import "./App.css";
import Login from "./components/screens/login/login";
import Home from "./components/HomePage/Home.js";
import { Routes, BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     {/* <Button href="login" variant='primary' size='sm'> Large Button</Button> */}
    //     <Login />
    //   </header>
    // </div>
  );
}

export default App;
