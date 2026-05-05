import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Notes from "./components/Notes.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <Header />
      <main className="max-w-3xl mx-auto px-6 md:px-12">
        <Hero />
        <Notes />
      </main>
      <Footer />
    </div>
  );
}
