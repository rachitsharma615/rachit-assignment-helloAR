import './App.css';
import { lazy, Suspense, useEffect } from "react";
import Sidebar from './sidebar';
import Header from './header';
import Settings from './Settings/Settings.js'
import Products from './Products/Products';
import Sales from './Sales/Sales';
import Demos from './Demos/Demos';
import Demoscript from './Demoscript/Demoscript';
import Customers from './Customers/Customers';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Routes, Route} from "react-router-dom";


// const Settings = lazy(() => import("./Settings"));


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Sidebar/>
          
          <Switch>
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/demos" component={Demos} />
          <Route exact path="/demoscript" component={Demoscript} />
          <Route exact path="/sales" component={Sales} />





          </Switch>
      </div>
    </Router>
  );
}

export default App;
