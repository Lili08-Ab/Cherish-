import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-cherish-pink/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Heart className="w-9 h-9 text-cherish-red fill-cherish-red group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-cherish-red/20 blur-md rounded-full" />
            </div>
            <span className="text-2xl font-serif font-bold bg-gradient-to-r from-cherish-red to-cherish-rose bg-clip-text text-transparent tracking-tight">
              Cherish
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-slate-600 hover:text-cherish-red font-medium transition-colors">Accueil</Link>
            <Link to="/editor" className="text-slate-600 hover:text-cherish-red font-medium transition-colors">Atelier</Link>
            
            <Link 
              to="/editor" 
              className="bg-cherish-red text-white px-8 py-3 rounded-full font-bold hover:bg-cherish-rose transition-all shadow-lg shadow-cherish-red/10 hover:shadow-cherish-red/20 active:scale-95"
            >
              Commencer
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
