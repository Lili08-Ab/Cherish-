import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CARD_TEMPLATES, SUGGESTED_MESSAGES } from '../data/templates';
import { Sparkles, Heart, CheckCircle2, Share2, Download, Camera, Upload, User, ArrowLeft, Wand2, Type, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingHearts from '../components/ui/FloatingHearts';

const Editor = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(CARD_TEMPLATES[0]);
  const [message, setMessage] = useState("Tu es mon plus beau voyage, ma plus douce évidence...");
  const [recipient, setRecipient] = useState("Mon Amour");
  const [sender, setSender] = useState("Ton Éternel");
  const [signOff, setSignOff] = useState("Avec tout mon amour");
  const [image, setImage] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isHoveringPreview, setIsHoveringPreview] = useState(false);
  const fileInputRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
      <div className="relative min-h-screen bg-[#FFFBFC] flex items-center justify-center p-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(255,182,193,0.2),transparent_60%)]" />
          <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-cherish-pink/10 blur-[120px] rounded-full animate-pulse" />
          <FloatingHearts />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-2xl p-12 md:p-16 rounded-[60px] shadow-[0_50px_100px_-20px_rgba(255,182,193,0.3)] border border-white text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-200"
          >
            <CheckCircle2 className="w-12 h-12" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-slate-900 leading-tight">
            C'est <span className="text-cherish-red italic">magnifique.</span>
          </h2>
          <p className="text-xl text-slate-500 font-light mb-12 italic leading-relaxed">
            "Votre attention délicate pour {recipient} est prête à s'envoler. Un geste simple pour un souvenir éternel."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-cherish-red text-white px-10 py-5 rounded-[24px] font-bold text-lg hover:bg-cherish-rose transition-all shadow-[0_20px_40px_-10px_rgba(255,20,147,0.4)]"
            >
              <Share2 className="w-6 h-6" />
              Partager l'Amour
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-[24px] font-bold text-lg hover:bg-black transition-all shadow-xl"
            >
              <Download className="w-6 h-6" />
              Télécharger
            </motion.button>
          </div>
          
          <button 
            onClick={() => setIsFinished(false)}
            className="mt-12 text-slate-400 hover:text-cherish-red transition-all text-sm font-black uppercase tracking-[0.2em] flex items-center gap-2 mx-auto border-b border-transparent hover:border-cherish-red pb-1"
          >
            <ArrowLeft size={14} />
            Perfectionner encore
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#FFFBFC] text-slate-800 selection:bg-cherish-pink selection:text-white font-sans overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_10%,rgba(255,182,193,0.15),transparent_50%)]" />
        <div className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] bg-cherish-pink/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] bg-cherish-rose/5 blur-[100px] rounded-full animate-pulse" />
        <FloatingHearts />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm text-cherish-red text-[10px] font-black uppercase tracking-[0.3em]"
            >
              <Wand2 size={12} className="animate-pulse" />
              Atelier Créatif
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-none tracking-tight">
              L'art de <br />
              <span className="text-cherish-red italic">S'exprimer.</span>
            </h1>
          </div>
          <Link to="/" className="text-slate-400 hover:text-cherish-red transition-all font-bold flex items-center gap-3 group mb-2">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Controls */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* 1. Style Selection */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-4">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-12 h-12 bg-cherish-pink/10 rounded-2xl flex items-center justify-center text-cherish-red shadow-inner"
                >
                  <Sparkles size={24} />
                </motion.div>
                <h2 className="text-2xl font-bold text-slate-800">1. Choisissez un univers</h2>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {CARD_TEMPLATES.map((tpl) => (
                  <motion.button
                    key={tpl.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTemplate(tpl)}
                    className={`group relative rounded-[32px] overflow-hidden transition-all duration-500 ${
                      selectedTemplate.id === tpl.id 
                        ? 'ring-4 ring-cherish-red/20 scale-[1.02] shadow-2xl' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img src={tpl.thumbnail} alt={tpl.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className={`absolute inset-0 transition-opacity duration-500 ${selectedTemplate.id === tpl.id ? 'bg-cherish-red/10' : 'bg-black/20 group-hover:bg-transparent'}`} />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-[10px] text-white font-black uppercase tracking-[0.2em]">{tpl.name}</p>
                    </div>
                    {selectedTemplate.id === tpl.id && (
                      <motion.div 
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-lg"
                      >
                        <CheckCircle2 size={16} className="text-cherish-red" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.section>

            {/* 2. Photo Souvenir */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-4">
                <motion.div 
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  className="w-12 h-12 bg-cherish-pink/10 rounded-2xl flex items-center justify-center text-cherish-red shadow-inner"
                >
                  <ImageIcon size={24} />
                </motion.div>
                <h2 className="text-2xl font-bold text-slate-800">2. Immortalisez l'instant</h2>
              </div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                onClick={() => fileInputRef.current.click()}
                className="relative h-64 bg-white/40 backdrop-blur-sm border-2 border-dashed border-slate-200 rounded-[40px] flex flex-col items-center justify-center cursor-pointer hover:border-cherish-pink hover:bg-cherish-pink/5 transition-all duration-500 overflow-hidden group"
              >
                <AnimatePresence mode="wait">
                  {image ? (
                    <motion.div 
                      key="preview"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full"
                    >
                      <img src={image} className="w-full h-full object-cover" alt="Preview" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          className="bg-white/20 p-6 rounded-full border border-white/40"
                        >
                          <Upload className="text-white w-8 h-8" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center space-y-4"
                    >
                      <motion.div 
                        animate={{ 
                          y: [0, -10, 0],
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                        className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto text-slate-300 group-hover:text-cherish-red group-hover:bg-cherish-pink/10 transition-all duration-500"
                      >
                        <Camera size={32} />
                      </motion.div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-slate-600">Glissez une photo souvenir</p>
                        <p className="text-xs text-slate-400 font-medium">Ou cliquez pour parcourir</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  className="hidden" 
                  accept="image/*" 
                />
              </motion.div>
            </motion.section>

            {/* 3. Vos Mots Doux */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-12 h-12 bg-cherish-pink/10 rounded-2xl flex items-center justify-center text-cherish-red shadow-inner"
                >
                  <Type size={24} />
                </motion.div>
                <h2 className="text-2xl font-bold text-slate-800">3. Confiez-lui votre cœur</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-cherish-red transition-colors" />
                    <input
                      type="text"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="w-full pl-14 pr-6 py-5 rounded-[24px] bg-white border border-slate-100 focus:ring-4 focus:ring-cherish-pink/10 focus:border-cherish-red outline-none transition-all font-medium text-slate-700 shadow-sm"
                      placeholder="À qui ?"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-cherish-red transition-colors" />
                    <input
                      type="text"
                      value={sender}
                      onChange={(e) => setSender(e.target.value)}
                      className="w-full pl-14 pr-6 py-5 rounded-[24px] bg-white border border-slate-100 focus:ring-4 focus:ring-cherish-pink/10 focus:border-cherish-red outline-none transition-all font-medium text-slate-700 shadow-sm"
                      placeholder="De la part de ?"
                    />
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-8 py-6 rounded-[32px] bg-white border border-slate-100 focus:ring-4 focus:ring-cherish-pink/10 focus:border-cherish-red outline-none transition-all font-serif italic text-xl text-slate-700 shadow-sm resize-none leading-relaxed"
                    placeholder="Écrivez votre message..."
                  />
                  <div className="flex flex-wrap gap-3">
                    {SUGGESTED_MESSAGES.map((msg, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.05, backgroundColor: '#fff' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setMessage(msg)}
                        className="text-[10px] font-black uppercase tracking-widest bg-white/60 backdrop-blur-sm border border-slate-100 px-4 py-2.5 rounded-full hover:border-cherish-red hover:text-cherish-red transition-all shadow-sm"
                      >
                        {msg.length > 25 ? msg.substring(0, 25) + "..." : msg}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <select 
                    value={signOff}
                    onChange={(e) => setSignOff(e.target.value)}
                    className="w-full px-8 py-5 rounded-[24px] bg-white border border-slate-100 focus:ring-4 focus:ring-cherish-pink/10 focus:border-cherish-red outline-none transition-all font-bold text-slate-700 shadow-sm appearance-none cursor-pointer"
                  >
                    <option value="Avec tout mon amour">Avec tout mon amour</option>
                    <option value="Pour l'éternité">Pour l'éternité</option>
                    <option value="Ton éternel Valentin">Ton éternel Valentin</option>
                    <option value="À jamais à toi">À jamais à toi</option>
                  </select>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-cherish-red/40"
                  >
                    <Heart size={16} fill="currentColor" />
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </motion.div>

          {/* Right: Preview */}
          <div className="lg:sticky lg:top-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onHoverStart={() => setIsHoveringPreview(true)}
              onHoverEnd={() => setIsHoveringPreview(false)}
              className="bg-white/40 backdrop-blur-2xl p-8 md:p-12 rounded-[60px] shadow-[0_40px_80px_-20px_rgba(255,182,193,0.3)] border border-white"
            >
              <div className="mb-10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2.5 h-2.5 rounded-full bg-cherish-pink" 
                  />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Aperçu en Temps Réel</span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i}
                      animate={isHoveringPreview ? {
                        y: [0, -5, 0],
                        backgroundColor: ['#e2e8f0', '#ff1493', '#e2e8f0']
                      } : {}}
                      transition={{ delay: i * 0.1, duration: 0.5, repeat: isHoveringPreview ? Infinity : 0 }}
                      className="w-1.5 h-1.5 rounded-full bg-slate-200" 
                    />
                  ))}
                </div>
              </div>
              
              {/* The Card Preview */}
              <motion.div 
                layout
                animate={isHoveringPreview ? {
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.02,
                  boxShadow: "0 50px 100px -20px rgba(255,182,193,0.4)"
                } : {
                  rotateY: 0,
                  rotateX: 0,
                  scale: 1,
                  boxShadow: "0 20px 60px -15px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="aspect-[3/4] rounded-[48px] p-10 md:p-14 flex flex-col justify-between text-center relative overflow-hidden group perspective-1000"
                style={{ 
                  backgroundColor: selectedTemplate.baseStyles.backgroundColor,
                  color: selectedTemplate.baseStyles.textColor,
                  border: `12px double ${selectedTemplate.baseStyles.borderColor}`
                }}
              >
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 left-10"
                  >
                    <Heart fill="currentColor" size={150} />
                  </motion.div>
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-10 right-10"
                  >
                    <Heart fill="currentColor" size={180} />
                  </motion.div>
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <motion.p 
                    layout
                    className={`text-2xl mb-8 italic ${selectedTemplate.baseStyles.fontFamily === 'serif' ? 'font-serif' : 'font-sans'}`}
                  >
                    Chère {recipient},
                  </motion.p>

                  <AnimatePresence mode="wait">
                    {image ? (
                      <motion.div 
                        key="image"
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 2 }}
                        exit={{ opacity: 0, scale: 1.1, rotate: 0 }}
                        className="w-full aspect-square mb-8 rounded-[32px] overflow-hidden shadow-2xl border-8 border-white group-hover:rotate-0 transition-transform duration-700"
                      >
                        <img src={image} className="w-full h-full object-cover" alt="Recipient" />
                      </motion.div>
                    ) : (
                      <div className="flex-grow" />
                    )}
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${selectedTemplate.id}-${recipient}-${message}-${sender}`}
                      initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                      className="flex-grow flex flex-col justify-center"
                    >
                      <h3 className={`text-3xl md:text-4xl font-bold leading-snug tracking-tight ${selectedTemplate.baseStyles.fontFamily === 'serif' ? 'font-serif' : 'font-sans'}`}>
                        "{message}"
                      </h3>
                    </motion.div>
                  </AnimatePresence>

                  <motion.div layout className="mt-10 pt-10 border-t border-current/10 space-y-2">
                    <p className="font-serif italic text-xl opacity-80">{signOff}</p>
                    <p className="font-bold text-2xl tracking-wide uppercase">{sender}</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.button 
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsFinished(true)}
                className="w-full mt-12 bg-slate-900 text-white py-7 rounded-[32px] font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-2xl flex items-center justify-center gap-4 group relative overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                />
                <Heart className="w-6 h-6 fill-white text-cherish-red" />
                Générer ma carte
              </motion.button>
              
              <p className="text-center mt-6 text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
                Un souvenir inoubliable vous attend
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Editor;
