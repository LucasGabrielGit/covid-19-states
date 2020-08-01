import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import States from "./pages/states";
import Footer from "./components/Footer";

const App = () => (
  <div className="AppPrincipal bg-light">
    <Header />
    <States />
    <Footer />
  </div>
);

export default App;
