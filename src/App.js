import logo from "./logo.svg";
//link
import "./App.css";
import {Header} from "./components/Header"
import Content from "./components/Content";
import { Products } from "./components/products/Products";
import { UseStateDemo } from "./components/UseStateDemo";
import { UseStateDemo2 } from "./components/UseStateDemo2";

function App() {
 

  return (
    <div className="App">
      <Header></Header>
      {/* <UseStateDemo></UseStateDemo> */}
      <UseStateDemo2></UseStateDemo2>
      {/* <Products></Products> */}
      {/* <Content></Content> */}
    </div>
  );
}

export default App;
