import Hero from "./components/hero";
import Features from "./components/features";
import Trustee from "./components/trust";
import Visionaries from "./components/visionaries";
import Footer from "./components/footer";

function App() {
  return (
    <div className="items-center justify-center font-sans antialiased">
      <Hero />
      <Features />
      <Trustee />
      <Visionaries />
      <Footer />
    </div>
  );
}

export default App;
