import logo from "./logo.svg";
//link
import "./App.css";
import {Header} from "./components/Header"
import Content from "./components/Content";
import { Products } from "./components/products/Products";

function App() {
 

  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      {/* <Content></Content> */}
    </div>
  );
}

export default App;
