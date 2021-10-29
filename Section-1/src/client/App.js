import React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
    return(
        <div>
            <h1>Hello World!</h1>
            <h2>From inside src/app.js bundled by webpack.</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"));