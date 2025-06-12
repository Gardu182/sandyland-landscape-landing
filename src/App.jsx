import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { main } from "framer-motion/client";

function App() {
  return (
    <main className="flex-grow">
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Footer></Footer>
      </div>
    </main>
  );
}

export default App;
