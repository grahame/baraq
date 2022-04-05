import React from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/header";
import routes from "./routes";

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                {routes}
            </Router>
        </div>
    );
};

export default App;
