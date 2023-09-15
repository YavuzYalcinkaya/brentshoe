import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
const App = () => (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
  </main>
);

export default App;
