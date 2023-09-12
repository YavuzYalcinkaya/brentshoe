import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
const App = () => (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
  </main>
);

export default App;
