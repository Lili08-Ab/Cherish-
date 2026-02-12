import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Sparkles, Check, Search, Filter, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Catégories de modèles
const CATEGORIES = [
  { id: 'all', name: 'Tous', count: 24 },
  { id: 'romantic', name: 'Romantique', count: 12 },
  { id: 'minimal', name: 'Minimaliste', count: 6 },
  { id: 'vintage', name: 'Vintage', count: 4 },
  { id: 'floral', name: 'Floral', count: 8 },
  { id: 'luxury', name: 'Luxe', count: 6 }
];

// Collection étendue de modèles
const ALL_TEMPLATES = [
  {
    id: 'classic-rose',
    name: 'Rose Classique',
    category: 'romantic',
    thumbnail: 'https://placehold.co/400x600/ffe4e8/ff1493?text=Rose+Classique',
    description: 'Élégance intemporelle avec des touches de rose',
    popular: true,
    premium: false,
    baseStyles: {
      backgroundColor: '#ffe4e8',
      textColor: '#ff1493',
      borderColor: '#ff69b4'
    }
  },
  {
    id: 'minimal-love',
    name: 'Amour Minimal',
    category: 'minimal',
    thumbnail: 'https://placehold.co/400x600/f8f8f8/333333?text=Minimal+Love',
    description: 'Simplicité moderne et raffinée',
    popular: true,
    premium: false,
    baseStyles: {
      backgroundColor: '#f8f8f8',
      textColor: '#333333',
      borderColor: '#cccccc'
    }
  },
  {
    id: 'vintage-paris',
    name: 'Paris Vintage',
    category: 'vintage',
    thumbnail: 'https://placehold.co/400x600/f5e6d3/8b4513?text=Vintage+Paris',
    description: 'Charme rétro parisien',
    popular: false,
    premium: true,
    baseStyles: {
      backgroundColor: '#f5e6d3',
      textColor: '#8b4513',
      borderColor: '#d4a574'
    }
  },
  {
    id: 'floral-dream',
    name: 'Rêve Floral',
    category: 'floral',
    thumbnail: 'https://placehold.co/400x600/fff0f5/ff69b4?text=Floral+Dream',
    description: 'Jardin romantique en fleurs',
    popular: true,
    premium: false,
    baseStyles: {
      backgroundColor: '#fff0f5',
      textColor: '#ff69b4',
      borderColor: '#ffb6c1'
    }
  },
  {
    id: 'luxury-gold',
    name: 'Or et Luxe',
    category: 'luxury',
    thumbnail: 'https://placehold.co/400x600/1a1a1a/ffd700?text=Gold+Luxury',
    description: 'Sophistication dorée premium',
    popular: false,
    premium: true,
    baseStyles: {
      backgroundColor: '#1a1a1a',
      textColor: '#ffd700',
      borderColor: '#daa520'
    }
  },
  {
    id: 'sweet-pink',
    name: 'Douceur Rose',
    category: 'romantic',
    thumbnail: 'https://placehold.co/400x600/ffb6c1/ff1493?text=Sweet+Pink',
    description: 'Tendresse et romantisme',
    popular: true,
    premium: false,
    baseStyles: {
      backgroundColor: '#ffb6c1',
      textColor: '#ff1493',
      borderColor: '#ff69b4'
    }
  },
  {
    id: 'black-elegance',
    name: 'Élégance Noire',
    category: 'minimal',
    thumbnail: 'https://placehold.co/400x600/000000/ffffff?text=Black+Elegance',
    description: 'Sophistication monochrome',
    popular: false,
    premium: true,
    baseStyles: {
      backgroundColor: '#000000',
      textColor: '#ffffff',
      borderColor: '#444444'
    }
  },
  {
    id: 'spring-garden',
    name: 'Jardin Printanier',
    category: 'floral',
    thumbnail: 'https://placehold.co/400x600/e8f5e9/4caf50?text=Spring+Garden',
    description: 'Fraîcheur florale du printemps',
    popular: false,
    premium: false,
    baseStyles: {
      backgroundColor: '#e8f5e9',
      textColor: '#4caf50',
      borderColor: '#81c784'
    }
  },
  {
    id: 'royal-purple',
    name: 'Pourpre Royal',
    category: 'luxury',
    thumbnail: 'https://placehold.co/400x600/4a148c/e1bee7?text=Royal+Purple',
    description: 'Majesté violette',
    popular: false,
    premium: true,
    baseStyles: {
      backgroundColor: '#4a148c',
      textColor: '#e1bee7',
      borderColor: '#9c27b0'
    }
  },
  {
    id: 'retro-love',
    name: 'Amour Rétro',
    category: 'vintage',
    thumbnail: 'https://placehold.co/400x600/ffd7ba/8b4513?text=Retro+Love',
    description: 'Nostalgie des années 60',
    popular: false,
    premium: false,
    baseStyles: {
      backgroundColor: '#ffd7ba',
      textColor: '#8b4513',
      borderColor: '#d4a574'
    }
  },
  {
    id: 'coral-sunset',
    name: 'Coucher Corail',
    category: 'romantic',
    thumbnail: 'https://placehold.co/400x600/ff7f50/ffffff?text=Coral+Sunset',
    description: 'Chaleur d\'un coucher de soleil',
    popular: true,
    premium: false,
    baseStyles: {
      backgroundColor: '#ff7f50',
      textColor: '#ffffff',
      borderColor: '#ff6347'
    }
  },
  {
    id: 'marble-chic',
    name: 'Marbre Chic',
    category: 'luxury',
    thumbnail: 'https://placehold.co/400x600/ffffff/c0c0c0?text=Marble+Chic',
    description: 'Luxe marbré contemporain',
    popular: false,
    premium: true,
    baseStyles: {
      backgroundColor: '#ffffff',
      textColor: '#c0c0c0',
      borderColor: '#d3d3d3'
    }
  },
  {
    id: 'lavender-field',
    name: 'Champ de Lavande',
    category: 'floral',
    thumbnail: 'https://placehold.co/400x600/e6e6fa/9370db?text=Lavender+Field',
    description: 'Sérénité provençale',
    popular: false,
    premium: false,
    baseStyles: {
      backgroundColor: '#e6e6fa',
      textColor: '#9370db',
      borderColor: '#b19cd9'
    }
  },
  {
    id: 'modern-white',
    name: 'Blanc Moderne',
    category: 'minimal',
    thumbnail: 'https://placehold.co/400x600/ffffff/666666?text=Modern+White',
    description: 'Pureté minimaliste',
    popular: true,
    premium: false,
    baseStyles: {
      backgroundColor: '#ffffff',
      textColor: '#666666',
      borderColor: '#dddddd'
    }
  },
  {
    id: 'art-deco',
    name: 'Art Déco',
    category: 'vintage',
    thumbnail: 'https://placehold.co/400x600/1c1c1c/daa520?text=Art+Deco',
    description: 'Glamour des années folles',
    popular: false,
    premium: true,
    baseStyles: {
      backgroundColor: '#1c1c1c',
      textColor: '#daa520',
      borderColor: '#b8860b'
    }
  },
  {
    id: 'rose-garden',
    name: 'Roseraie',
    category: 'floral',
    thumbnail: 'https://placehold.co/400x600/fff0f0/dc143c?text=Rose+Garden',
    description: 'Jardin de roses éclatantes',
    popular: true,
    premium: false,
    baseStyles: {
      backgroundColor: '#fff0f0',
      textColor: '#dc143c',
      borderColor: '#ff69b4'
    }
  }
];

const Templates = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredTemplate, setHoveredTemplate] = useState(null);

  const filteredTemplates = ALL_TEMPLATES.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectTemplate = (template) => {
    // Stocker le template sélectionné et rediriger vers l'éditeur
    navigate('/editor', { state: { selectedTemplate: template } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cherish-cream/20 to-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Link 
                to="/editor" 
                className="text-slate-400 hover:text-cherish-red transition-colors flex items-center gap-2 mb-2 font-medium text-sm group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Retour à l'éditeur
              </Link>
              <h1 className="text-4xl font-serif font-bold text-slate-900">
                Galerie de Modèles
              </h1>
            </div>
            
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2 text-cherish-red bg-cherish-pink/10 px-4 py-2 rounded-full">
                <Sparkles size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">{filteredTemplates.length} Modèles</span>
              </div>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher un modèle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-cherish-pink focus:bg-white outline-none transition-all text-sm"
              />
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-cherish-red to-cherish-rose text-white shadow-lg shadow-cherish-red/30'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === cat.id ? 'bg-white/20' : 'bg-slate-200'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredTemplates.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-slate-400" size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">Aucun modèle trouvé</h3>
            <p className="text-slate-500">Essayez une autre recherche ou catégorie</p>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredTemplate(template.id)}
                onMouseLeave={() => setHoveredTemplate(null)}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
                  {/* Template Image */}
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img 
                      src={template.thumbnail} 
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                      hoveredTemplate === template.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <p className="text-sm mb-3 opacity-90">{template.description}</p>
                        <motion.button
                          onClick={() => handleSelectTemplate(template)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-cherish-pink hover:text-white transition-colors"
                        >
                          <Check size={16} />
                          Choisir ce modèle
                        </motion.button>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {template.popular && (
                        <span className="bg-cherish-red text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                          <Star size={10} fill="currentColor" />
                          Populaire
                        </span>
                      )}
                      {template.premium && (
                        <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                          <Sparkles size={10} />
                          Premium
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Template Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 mb-1 text-base">{template.name}</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                      {CATEGORIES.find(c => c.id === template.category)?.name}
                    </p>
                  </div>
                </div>

                {/* Quick Select Button (visible on mobile) */}
                <motion.button
                  onClick={() => handleSelectTemplate(template)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="md:hidden mt-3 w-full bg-gradient-to-r from-cherish-red to-cherish-rose text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <Check size={16} />
                  Sélectionner
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-[40px] p-12 text-center border border-slate-100 shadow-xl">
          <Heart className="w-12 h-12 text-cherish-red mx-auto mb-4 fill-cherish-red" />
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">
            Vous ne trouvez pas votre bonheur ?
          </h2>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Nos designers ajoutent régulièrement de nouveaux modèles. Revenez bientôt !
          </p>
          <Link
            to="/editor"
            className="inline-flex items-center gap-2 bg-cherish-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-cherish-rose transition-colors shadow-lg shadow-cherish-red/20"
          >
            Créer avec un modèle simple
            <ArrowLeft size={16} className="rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Templates;