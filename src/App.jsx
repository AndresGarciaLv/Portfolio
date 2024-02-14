import Clients from "./components/Clients";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Hero />
      <Clients />
      <Works />
   {/*    <Reviews />
      <Services />*/}
      <Footer /> 
      </Router>
    </div>
  );
}

export default App;
