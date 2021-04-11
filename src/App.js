//imports
import "./App.css";
import { Switch, Route } from "react-router-dom";

//component imports
import HeaderNav from "./components/headerNav.js";
import Home from "./components/home";
import About from "./components/about";
import Work from "./components/work";
import Projects from "./components/projects";
import Footer from "./components/footer"

function App() {
  return (
    <div id="app">
      <HeaderNav />
      <Switch>
        <Route exact path={"/home"} components={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/work"} component={Work} />
        <Route path={"/projects"} component={Projects} />
      </Switch>
      <Footer /> 
    </div>
  );
}

export default App;
