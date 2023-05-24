import "./App.css";
import Login from "./screens/login/login";
import Register from "./screens/Register/Register";
import "./bootstrap.min (1).css";
import Home from "./components/HomePage/Home.js";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MyList from "./components/ViewLists/ListsPage.js";
import Element from "./components/ListElement/listele";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
      </div>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/mylist" element={<MyList />}></Route>
        <Route path="/element" element={<Element topic="Stack" difficulty="Medium" />} />
      </Routes>
    </BrowserRouter>
  );
}
