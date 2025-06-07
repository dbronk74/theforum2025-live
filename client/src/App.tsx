
import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="hero-bg min-h-screen flex flex-col text-white items-center justify-center text-center">
      <header className="absolute top-0 left-0 w-full flex justify-between p-6 text-lg font-semibold bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="logo-text animate-glow">🜂 The Forum 2025</div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-cyan-300 transition">Gauntlet</a>
          <a href="#" className="hover:text-cyan-300 transition">Arena</a>
          <a href="#" className="hover:text-cyan-300 transition">Oracle</a>
        </nav>
      </header>
      <div className="z-10 mt-20">
        <h1 className="text-6xl font-extrabold mb-4 animate-slidein">Speak. Listen. Evolve.</h1>
        <p className="text-xl mb-8 max-w-xl mx-auto">A living arena of ideas, connection, and clarity — welcome to the future of discourse.</p>
        <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-xl font-medium shadow-lg transition animate-pulse">Enter The Forum</button>
      </div>
      <div className="absolute bottom-6 text-sm text-cyan-200 animate-bounce">Scroll down ↓</div>
      <div className="animated-stars" />
    </div>
  );
}
