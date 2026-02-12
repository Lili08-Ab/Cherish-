import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CARD_TEMPLATES, SUGGESTED_MESSAGES } from '../data/templates';
import { Sparkles, Heart, CheckCircle2, Share2, Download, Camera, Upload, User, ArrowLeft, Type, Image as ImageIcon, Palette } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Editor = () => {
  const location = useLocation();
  const [selectedTemplate, setSelectedTemplate] = useState(CARD_TEMPLATES[0]);
  
  // Récupérer le template depuis la navigation
  useEffect(() => {
    if (location.state?.selectedTemplate) {
      setSelectedTemplate(location.state.selectedTemplate);
    }
  }, [location.state]);
  const [message, setMessage] = useState("Tu es mon plus beau voyage, ma plus douce évidence...");
  const [recipient, setRecipient] = useState("Mon Amour");
  const [sender, setSender] = useState("Ton Éternel");
  const [signOff, setSignOff] = useState("Avec tout mon amour");
  const [image, setImage] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cherish-cream via-white to-cherish-pink/5 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-white p-10 rounded-[40px] shadow-2xl text-center border border-cherish-pink/20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
          >
            <CheckCircle2 size={40} strokeWidth={3} />
          </motion.div>
          <h2 className="text-3xl font-serif font-bold mb-3 text-slate-800">
            Carte Prête !
          </h2>
          <p className="text-slate-600 mb-10 text-sm">
            Votre message pour <span className="font-semibold text-cherish-red">{recipient}</span> a été créé avec succès.
          </p>
          
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-cherish-red text-white py-3.5 rounded-2xl font-semibold hover:bg-cherish-rose transition-colors shadow-lg shadow-cherish-red/20"
              >
                <Share2 size={18} />
                Partager
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-slate-800 text-white py-3.5 rounded-2xl font-semibold hover:bg-slate-900 transition-colors"
              >
                <Download size={18} />
                Télécharger
              </motion.button>
            </div>
            <button 
              onClick={() => setIsFinished(false)}
              className="w-full text-slate-400 hover:text-cherish-red transition-colors text-sm font-medium py-2"
            >
              Modifier la carte
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cherish-cream/30 to-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <Link to="/" className="text-slate-400 hover:text-cherish-red transition-colors flex items-center gap-2 mb-3 font-medium text-sm group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Retour
            </Link>
            <h1 className="text-4xl font-serif font-bold text-slate-900">
              Atelier de Création
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-2 text-cherish-red bg-cherish-pink/10 px-4 py-2 rounded-full">
            <Sparkles size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Design Premium</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Controls */}
          <div className="space-y-8">
            {/* 1. Templates */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 bg-gradient-to-br from-cherish-pink to-cherish-red text-white rounded-lg flex items-center justify-center text-xs font-bold shadow-lg shadow-cherish-pink/30">1</span>
                <h2 className="text-lg font-bold text-slate-800">Modèle de carte</h2>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {CARD_TEMPLATES.map((tpl) => (
                  <motion.button
                    key={tpl.id}
                    onClick={() => setSelectedTemplate(tpl)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative rounded-xl overflow-hidden border-3 transition-all ${
                      selectedTemplate.id === tpl.id 
                        ? 'border-cherish-red shadow-xl shadow-cherish-red/20' 
                        : 'border-transparent opacity-60 hover:opacity-100 hover:border-slate-200'
                    }`}
                  >
                    <img src={tpl.thumbnail} alt={tpl.name} className="w-full aspect-[3/4] object-cover" />
                    {selectedTemplate.id === tpl.id && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 right-2 bg-cherish-red text-white rounded-full p-1 shadow-lg"
                      >
                        <CheckCircle2 size={14} strokeWidth={3} />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
              <Link 
                to="/templates" 
                className="mt-4 inline-flex items-center gap-2 text-cherish-red hover:text-cherish-rose text-sm font-semibold group"
              >
                <Palette size={16} />
                Voir tous les modèles
                <ArrowLeft size={14} className="rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.section>

            {/* 2. Photo */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 bg-gradient-to-br from-cherish-pink to-cherish-red text-white rounded-lg flex items-center justify-center text-xs font-bold shadow-lg shadow-cherish-pink/30">2</span>
                <h2 className="text-lg font-bold text-slate-800">Ajouter une photo</h2>
              </div>
              <motion.div 
                onClick={() => fileInputRef.current.click()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-44 bg-gradient-to-br from-slate-50 to-slate-100/50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-cherish-pink hover:bg-cherish-pink/5 transition-all overflow-hidden group"
              >
                {image ? (
                  <>
                    <img src={image} className="w-full h-full object-cover" alt="Preview" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-slate-700">
                        Changer la photo
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Camera className="text-cherish-red" size={24} />
                    </div>
                    <p className="text-sm font-semibold text-slate-700">Cliquez pour choisir une photo</p>
                    <p className="text-xs text-slate-400 mt-1">JPG, PNG jusqu'à 10MB</p>
                  </div>
                )}
                <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
              </motion.div>
            </motion.section>

            {/* 3. Text */}
            <motion.section 
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-gradient-to-br from-cherish-pink to-cherish-red text-white rounded-lg flex items-center justify-center text-xs font-bold shadow-lg shadow-cherish-pink/30">3</span>
                <h2 className="text-lg font-bold text-slate-800">Votre message</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-wider">Destinataire</label>
                  <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="Mon Amour"
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border-2 border-slate-200 focus:border-cherish-red outline-none transition-colors shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-wider">Expéditeur</label>
                  <input
                    type="text"
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    placeholder="Ton Éternel"
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border-2 border-slate-200 focus:border-cherish-red outline-none transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-wider">Message</label>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Écrivez votre message d'amour..."
                  className="w-full px-4 py-3 text-sm rounded-xl bg-white border-2 border-slate-200 focus:border-cherish-red outline-none transition-colors resize-none font-serif shadow-sm"
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  {SUGGESTED_MESSAGES.slice(0, 3).map((msg, i) => (
                    <button
                      key={i}
                      onClick={() => setMessage(msg)}
                      className="text-[10px] bg-gradient-to-r from-slate-100 to-slate-50 px-3 py-1.5 rounded-full hover:from-cherish-pink/20 hover:to-cherish-rose/10 hover:text-cherish-red transition-all border border-slate-200 hover:border-cherish-pink font-medium"
                    >
                      {msg.length > 25 ? msg.substring(0, 25) + "..." : msg}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-wider">Signature</label>
                <select 
                  value={signOff}
                  onChange={(e) => setSignOff(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border-2 border-slate-200 focus:border-cherish-red outline-none transition-colors appearance-none cursor-pointer shadow-sm"
                >
                  <option>Avec tout mon amour</option>
                  <option>Pour l'éternité</option>
                  <option>Ton éternel Valentin</option>
                  <option>À jamais à toi</option>
                </select>
              </div>
            </motion.section>
          </div>

          {/* Preview */}
          <motion.div 
            className="lg:sticky lg:top-8 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-[35px] border-2 border-slate-100 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Aperçu de votre carte</p>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="w-2 h-2 rounded-full bg-cherish-red"></div>
                </div>
              </div>
              
              <motion.div 
                layout
                className="aspect-[3/4] rounded-2xl p-8 flex flex-col justify-between text-center shadow-2xl relative overflow-hidden"
                style={{ 
                  backgroundColor: selectedTemplate.baseStyles.backgroundColor,
                  color: selectedTemplate.baseStyles.textColor,
                  border: `6px double ${selectedTemplate.baseStyles.borderColor}`
                }}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <p className="text-lg mb-4 italic font-serif opacity-90">Chère {recipient},</p>
                  
                  <AnimatePresence mode="wait">
                    {image && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="w-full aspect-square mb-4 rounded-xl overflow-hidden shadow-xl border-4 border-white"
                      >
                        <img src={image} className="w-full h-full object-cover" alt="Card" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex-grow flex items-center justify-center px-2">
                    <h3 className="text-xl font-bold leading-tight font-serif italic">
                      "{message}"
                    </h3>
                  </div>

                  <div className="mt-6 pt-6 border-t border-current/20">
                    <p className="font-serif italic text-base opacity-80 mb-1">{signOff}</p>
                    <p className="font-bold text-lg uppercase tracking-wide">{sender}</p>
                  </div>
                </div>

                {/* Decorative Heart */}
                <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                  <Heart size={180} fill="currentColor" />
                </div>
              </motion.div>

              <motion.button 
                onClick={() => setIsFinished(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-gradient-to-r from-cherish-red to-cherish-rose text-white py-4 rounded-2xl font-bold text-base hover:shadow-2xl hover:shadow-cherish-red/30 transition-all shadow-lg shadow-cherish-red/20 flex items-center justify-center gap-3"
              >
                <Heart size={18} fill="currentColor" />
                Générer ma carte
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Editor;