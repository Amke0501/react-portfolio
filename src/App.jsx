// import all components
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {
    return (
        <div className="App">
            <div className="text-gray-800">
            <Navbar />
            <Home />
        </div>
        </div>

    );

}

//export the App so it can be used in other files such as main
export default App;