import "./App.css";

import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Footer />
    </>
  );
};

export default App;