// import all components
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
        
        </div>

    );

}

//export the App so it can be used in other files such as main
export default App;