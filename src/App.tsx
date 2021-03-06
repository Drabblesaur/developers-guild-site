import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Landing } from "./components/pages/Landing";
import { Contact } from "./components/pages/Contact";
import { NavbarMain } from "./components/ui/NavbarMain";
import { About } from "./components/pages/About";
import { Contributing } from "./components/pages/Contributing";
import { Thanks } from "./components/pages/Thanks";
import Lab from "./components/pages/Lab";
import Constitution from "./components/pages/Constitution";
import Roles from "./components/pages/Roles";
import Code from "./components/pages/Code/Code";
import CodeDetailView from "./components/pages/Code/CodeDetailView";
import NewCodeBlock from "./components/pages/Code/NewCodeBlock";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavbarMain />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/contributing" exact component={Contributing} />
        <Route path="/roles" exact component={Roles} />
        <Route path="/constitution" exact component={Constitution} />
        <Route path="/thanks" exact component={Thanks} />
        <Route path="/lab" exact component={Lab}/>
        <Route path="/code" exact component={Code} />
        <Route path="/code/new" exact component={NewCodeBlock} />
        <Route path="/code/:hash" exact component={CodeDetailView} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
