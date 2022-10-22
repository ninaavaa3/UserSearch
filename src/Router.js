import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Mypage from "./Component/Mypage";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Header from "./Component/Header";


class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
              <Header />
                <Switch>
              
                    <Route exact path="/" component={App} />
                    <Route path="/Home" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/MyPage" component={Mypage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;
