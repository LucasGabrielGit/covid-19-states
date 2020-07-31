import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import States from "./pages/states";

const App = () => (
  <div className="AppPrincipal bg-light">
    <Header />
    <States />
  </div>
);

export default App;
