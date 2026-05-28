// src/App.jsx
import React from 'react';
import './index.css'; 
import { clubInfo } from './data'; 

function App() {
  return (
    // Le fond du site commence tout en haut (plus de centrage vertical bloquant)
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* 1. ZONE NAVBAR (En haut) - Emplacement temporaire pour le menu */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-black text-amber-500 tracking-wider">
            ENACTUS FSBM
          </div>
          <div className="flex space-x-6 text-sm font-semibold text-gray-600">
            <a href="#accueil" className="text-amber-500">Accueil</a>
            <a href="#equipe" className="hover:text-amber-500 transition">Notre Équipe</a>
            <a href="#projets" className="hover:text-amber-500 transition">Projets</a>
          </div>
        </div>
      </nav>

      {/* 2. ZONE BANNIÈRE / HÉRO (Le haut du site qui souhaite la bienvenue) */}
      <header className="bg-gradient-to-b from-amber-50 to-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Bienvenue sur notre plateforme 🚀
          </span>
          <h1 className="text-5xl font-black tracking-tight text-gray-950 mt-4 mb-4">
            {clubInfo.name}
          </h1>
          <p className="text-xl text-amber-600 font-medium italic max-w-xl mx-auto mb-6">
            "{clubInfo.slogan}"
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>
      </header>

      {/* 3. ZONE CONTENU PRINCIPAL (La description détaillée) */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
            À propos de notre Club
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {clubInfo.description}
          </p>
        </div>
        
        {/* les filles ajouter ici en dessous */}
      </main>

    </div>
  );
}

export default App;