import logo from "./logo.svg";
//link
import "./App.css";
import {Header} from "./components/Header"
import Content from "./components/Content";
import { Products } from "./components/products/Products";
import { UseStateDemo } from "./components/UseStateDemo";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./netflix/NetflixHome";
import { NetflixShows } from "./netflix/NetflixShows";
import { Navbar } from "./Navbar";
import { NetflixMovies } from "./netflix/NetflixMovies";
import { Error404 } from "./Error404";
import { PlayShow } from "./netflix/PlayShow";
import { FormDemo1 } from "./forms/FormDemo1";

function App() {
 

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path ="/" element ={<Content/>}></Route>
        <Route path="/netflix/home" element={<NetflixHome/>}></Route>
        <Route path = "/netflix/shows" element = {<NetflixShows/>}></Route>
        <Route path ="/netflix/movies" element = {<NetflixMovies/>}></Route>
        <Route path = "/netflix/playshow/:id" element = {<PlayShow/>}></Route>
        <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
        {/* <Route path ="/*" element = {<h1>404</h1>}></Route> */}
        <Route path="/*" element ={<Error404/>}></Route>
      </Routes>
      {/* <Header></Header> */}
      {/* <UseStateDemo></UseStateDemo> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      {/* <Products></Products> */}
      {/* <Content></Content> */}
    </div>
  );
}

export default App;
