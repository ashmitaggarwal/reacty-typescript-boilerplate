import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import './App.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
            </Switch>
        </div>
    );
}

export default App;
