// App.jsx
import "./App.css";
import AboutSection from "./components/AboutSection";
import CodeSection from "./components/CodeSection";
import GameSection from "./components/GameSection";
import DataSection from "./components/DataSection";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900">
      <nav className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-100 to-gray-300 px-6 py-3 flex gap-6 justify-center text-lg font-\[\"Orbitron\",_sans-serif\] text-cyan-700 font-bold'>
        <a href="#about" className="hover:text-cyan-900 transition-colors">
          About
        </a>
        <a href="#code" className="hover:text-cyan-900 transition-colors">
          Code
        </a>
        <a href="#games" className="hover:text-cyan-900 transition-colors">
          Games
        </a>
        <a href="#analytics" className="hover:text-cyan-900 transition-colors">
          Analytics
        </a>
      </nav>

      <div className="pt-20 px-6 md:px-12 max-w-6xl mx-auto space-y-12">
        <section id="about">
          <AboutSection />
        </section>

        <section id="code">
          <CodeSection />
        </section>

        <section id="games">
          <GameSection />
        </section>

        <section id="analytics">
          <DataSection />
        </section>
      </div>
    </main>
  );
}
