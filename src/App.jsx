import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import "@fontsource/quicksand";
import Footer from "./components/Footer";
import AgeVerificationModal from "./components/AgeVerificationModal";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <AgeVerificationModal />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}
