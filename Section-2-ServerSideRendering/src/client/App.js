import React from "react";
import * as ReactDOM from "react-dom";
import HelloWorld from "./components/helloworld/helloworld.js";

const App = () => {
    return(
        <HelloWorld />
    )
}

ReactDOM.hydrate(<App/>,document.getElementById("root"));