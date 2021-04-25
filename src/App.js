//=========   imports, Not used but I left them anyway===========
import react from "react";
import ReactDOM from "react-dom";

import "./App.css";
import { Switch, Route } from "react-router-dom";

//component imports
import HeaderNav from "./components/headerNav";
import Home from "./components/home";
import Storyline from "./components/storyline";
import About from "./components/about";
import Projects from "./components/projects";
import Services from "./components/services";
import Footer from "./components/footer";

// ===== funtion  ===============
function App() {
  return (
    <div id="app">
      {/* To get from one page to another */}
      <HeaderNav />
      <Switch>
        <Route exact path={"/home"} component={Home} />
        <Route path={"/storyline"} component={Storyline} />
        <Route path={"/about"} component={About} />
        <Route path={"/projects"} component={Projects} />
        <Route path={"/services"} component={Services} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
