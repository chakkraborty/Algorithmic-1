import "./App.css";
import Login from "./screens/login/login";
import Register from "./screens/Register/Register";
import "./bootstrap.min (1).css";
import Home from "./components/HomePage/Home.js";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MyList from "./components/ViewLists/ListsPage.js";
import Element from "./components/ListElement/listele";


const arr = [
  {
    _id: 12324,
    sid: 1,
    title: "Implement stack",
    difficulty: "hard",
    done: 0,
    link: "https://leetcode.com/problems/maximum-subsequence-score/"
  }
];

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
        <Route exact path="/element" element={<Element title={arr[0].sid + ". " + arr[0].title} difficulty={arr[0].difficulty} link={arr[0].link} _id={arr[0]._id} />} />
      </Routes>
    </BrowserRouter>
  );
}
