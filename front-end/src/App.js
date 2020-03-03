import React from 'react';
import './App.css';
import {Navigation} from './component/navigation';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Index } from './pages/Index';
import { Copyright } from './component/Copyright';
import { News } from './pages/news';
import { Product } from './pages/product';
import { Intro } from './pages/introduction';
import { JoinUs } from './pages/JoinUs';
const BlankBar = () => (
    <div style={
        {
            width: '100vw',
            height: "64px",
            backgroundColor:"#1b1f25"
        }
    }></div>
)
function App() {
    document.title = "浙江大学区块链协会"
    return (
        <div className="App">
            <Router>
                <Navigation/>
                <BlankBar/>
                <Switch>
                    <Route path="/news">
                        <News/>
                    </Route>
                    <Route path="/product">
                        <Product/>
                    </Route>
                    <Route path="/introduction">
                        <Intro/>
                    </Route>
                    <Route path="/join">
                        <JoinUs/>
                    </Route>
                    <Route path="/">
                        <Index/>
                    </Route>
                </Switch>
                <Copyright/>
            </Router>
        </div>
    );
}

export default App;
