import { User, Bug, Gamepad2, ChartNoAxesColumnIncreasing } from "lucide-react";

export default function NavSection() {
  return (
    // <nav className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-100 to-gray-300 px-6 py-3 flex gap-20 justify-center text-lg font-\[\"Orbitron\",_sans-serif\] text-cyan-700 font-bold'>
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md px-6 py-3 flex gap-20 justify-center text-lg font-\[\"Orbitron\",_sans-serif\] text-cyan-700 font-bold'>
      <a href="#about" className="flex items-center gap-2 whitespace-nowrap">
        <User size={20} /> About
      </a>
      <a href="#code" className="flex items-center gap-2 whitespace-nowrap">
        <Bug size={20} /> Code
      </a>
      <a href="#games" className="flex items-center gap-2 whitespace-nowrap">
        <Gamepad2 size={20} /> Games
      </a>
      <a
        href="#analytics"
        className="flex items-center gap-2 whitespace-nowrap"
      >
        <ChartNoAxesColumnIncreasing size={20} /> Analytics
      </a>
    </nav>
  );
}
