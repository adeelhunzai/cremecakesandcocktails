import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import "@fontsource/quicksand";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}
