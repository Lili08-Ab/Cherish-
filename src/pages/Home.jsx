import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Wand2, ArrowRight, Camera, Share2, Layers, Gift, Heart, Star, Send, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingHearts from '../components/ui/FloatingHearts';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -80]);
  const y2 = useTransform(scrollY, [0, 500], [0, 80]);
  const rotate1 = useTransform(scrollY, [0, 500], [0, 10]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative bg-[#FFFBFC] text-slate-800 overflow-hidden selection:bg-cherish-pink selection:text-white font-sans">
      {/* Immersive Romantic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(255,182,193,0.2),transparent_60%)]" />
        <div className="absolute top-[5%] left-[-5%] w-[700px] h-[700px] bg-cherish-pink/15 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-cherish-rose/10 blur-[150px] rounded-full animate-pulse" />
        <FloatingHearts />
      </div>

      {/* Hero Section: The "Wow" Factor */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-left space-y-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 py-2.5 px-6 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(255,182,193,0.2)] text-cherish-red text-xs font-bold uppercase tracking-[0.25em]"
            >
              <Sparkles size={16} className="text-cherish-rose fill-cherish-rose animate-pulse" />
              L'amour est dans l'air
            </motion.div>
            
            <h1 className="text-7xl md:text-[100px] font-serif font-bold leading-[0.9] tracking-tight text-slate-900">
              Créez une carte <br />
              <span className="text-cherish-red italic relative">
                Inoubliable
                <motion.svg 
                  viewBox="0 0 100 20" 
                  className="absolute -bottom-4 left-0 w-full h-4 text-cherish-pink/50 -z-10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                >
                  <path d="M0 15 Q 50 5 100 15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </motion.svg>
              </span>
              <br />
              pour votre moitié.
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-500 font-light leading-snug max-w-xl italic">
              "Exprimez votre amour avec une élégance rare. Quelques clics pour un souvenir éternel."
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/editor" 
                  className="bg-cherish-red text-white px-14 py-7 rounded-[28px] text-2xl font-bold shadow-[0_25px_50px_-12px_rgba(255,20,147,0.4)] hover:bg-cherish-rose transition-all flex items-center gap-5 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  Lancer l'Atelier
                  <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
              <button className="text-slate-400 hover:text-cherish-red transition-all font-bold text-lg flex items-center gap-3 group">
                <Gift size={24} className="group-hover:rotate-12 transition-transform" />
                Inspirations
              </button>
            </div>

            <div className="flex items-center gap-8 pt-10">
              <div className="flex -space-x-4">
                {[1,2,3,4,5].map(i => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-14 h-14 rounded-full border-4 border-white bg-slate-100 shadow-lg overflow-hidden"
                  >
                    <img src={`https://i.pravatar.cc/150?u=romantic${i}`} alt="user" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-cherish-gold fill-cherish-gold" />)}
                </div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">+5k amoureux conquis</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual: Premium Floating Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <motion.div 
              style={{ y: y1, rotate: rotate1 }}
              className="relative z-20 bg-white p-10 rounded-[60px] shadow-[0_50px_100px_-20px_rgba(255,182,193,0.5)] border border-white/40 max-w-[500px] mx-auto group backdrop-blur-sm"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-10 relative shadow-2xl">
                <img 
                  src="https://placehold.co/800x1000/fff8f8/ff1493?text=Notre+Histoire" 
                  alt="Card Preview" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cherish-pink/30 via-transparent to-transparent" />
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-6 right-6"
                >
                  <Heart size={40} className="text-white fill-white drop-shadow-lg" />
                </motion.div>
              </div>
              <div className="space-y-8 px-4">
                <div className="h-1.5 w-16 bg-cherish-red/30 rounded-full" />
                <p className="font-serif italic text-4xl text-slate-800 leading-tight tracking-tight">
                  "Tu es mon plus beau voyage, ma plus douce évidence..."
                </p>
                <div className="pt-8 border-t border-slate-50 flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">Signature</p>
                    <p className="text-cherish-red font-serif italic text-2xl">Ton Éternel</p>
                  </div>
                  <div className="w-16 h-16 bg-cherish-pink/10 rounded-3xl flex items-center justify-center text-cherish-red rotate-6 shadow-inner">
                    <Sparkles size={28} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating UI Elements */}
            <motion.div 
              style={{ y: y2 }}
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-16 -right-12 z-30 w-44 h-44 bg-white/80 backdrop-blur-2xl rounded-[40px] border border-white shadow-2xl flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-cherish-rose mb-4">
                <Camera size={32} />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">Vos Photos</p>
            </motion.div>

            <motion.div 
              style={{ y: y1 }}
              animate={{ rotate: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-16 z-30 w-52 h-52 bg-white/60 backdrop-blur-2xl rounded-full border border-white shadow-2xl flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="w-20 h-20 bg-cherish-pink/10 rounded-full flex items-center justify-center text-cherish-red mb-4 shadow-inner">
                <MousePointer2 size={40} className="animate-bounce" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Personnalisable</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section: Elegant & Modern */}
      <section className="py-40 px-6 relative bg-white/40 backdrop-blur-xl border-y border-cherish-pink/10">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-cherish-rose font-black uppercase tracking-[0.4em] text-sm"
            >
              Le Processus Créatif
            </motion.span>
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-slate-900 leading-[0.9]">
              L'excellence au bout <br />
              de vos <span className="text-cherish-red italic">doigts.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { 
                icon: Layers, 
                title: "Inspiration", 
                desc: "Parcourez une collection de styles uniques, du minimalisme chic au romantisme floral.",
                color: "bg-rose-50 text-rose-500"
              },
              { 
                icon: Camera, 
                title: "Création", 
                desc: "Insérez vos clichés et composez votre message. L'interface s'adapte à vos envies.",
                color: "bg-cherish-pink/10 text-cherish-red"
              },
              { 
                icon: Send, 
                title: "Partage", 
                desc: "Téléchargez en haute définition ou partagez le lien magique à votre moitié.",
                color: "bg-purple-50 text-purple-600"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`w-24 h-24 ${item.color} rounded-[32px] flex items-center justify-center mb-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-current/10`}>
                  <item.icon size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-slate-800">{item.title}</h3>
                <p className="text-xl text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section: Airy & Romantic */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-32">
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight">
                Une attention <br />
                <span className="text-cherish-red italic">qui fait la différence.</span>
              </h2>
              <p className="text-2xl text-slate-500 font-light leading-relaxed">
                Parce que les plus beaux cadeaux ne sont pas toujours les plus chers, mais ceux qui ont une âme.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                "Papier numérique haute qualité",
                "Mise en page automatique intelligente",
                "Adapté à tous les écrans"
              ].map((text, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-cherish-pink/20 flex items-center justify-center text-cherish-red group-hover:scale-110 transition-transform shadow-lg shadow-cherish-pink/10">
                    <Heart size={20} fill="currentColor" />
                  </div>
                  <span className="text-xl font-bold text-slate-700">{text}</span>
                </motion.div>
              ))}
            </div>
            
            <Link to="/editor" className="inline-flex items-center gap-4 text-cherish-red font-black uppercase tracking-[0.2em] text-sm group border-b-2 border-cherish-red/10 pb-2 hover:border-cherish-red transition-all">
              Découvrir l'Atelier
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="flex-1 relative">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative z-10 bg-white p-12 rounded-[80px] shadow-2xl shadow-cherish-pink/10 border border-slate-50 overflow-hidden"
            >
              <div className="aspect-square bg-slate-50 rounded-[60px] overflow-hidden mb-12 relative group">
                <img 
                  src="https://placehold.co/800x800/fff5f5/ff1493?text=Aperçu+Premium" 
                  alt="Gallery" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cherish-red/20 to-transparent" />
              </div>
              <div className="space-y-4 text-center">
                <p className="font-serif italic text-3xl text-slate-800">"Pour toujours et à jamais."</p>
              </div>
            </motion.div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-cherish-pink/20 blur-[100px] rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-cherish-rose/10 blur-[100px] rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Final CTA: Bold & Romantic */}
      <section className="py-40 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto relative rounded-[100px] overflow-hidden bg-slate-950 text-white p-20 md:p-32 text-center"
        >
          {/* Cosmic Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,20,147,0.15),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
          
          <div className="relative z-10 space-y-16">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              <Heart size={80} className="mx-auto text-cherish-pink fill-cherish-pink drop-shadow-[0_0_30px_rgba(255,182,193,0.5)]" />
            </motion.div>
            
            <div className="space-y-8">
              <h2 className="text-6xl md:text-[110px] font-serif font-bold leading-none tracking-tighter">
                L'amour n'attend <br />
                <span className="text-cherish-pink italic">pas.</span>
              </h2>
              <p className="text-2xl md:text-3xl text-slate-400 font-light max-w-2xl mx-auto italic">
                "N'attendez pas demain pour lui dire à quel point elle compte."
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/editor" 
                className="inline-flex items-center gap-6 bg-white text-slate-950 px-20 py-10 rounded-[40px] text-3xl font-black hover:bg-cherish-pink hover:text-white transition-all shadow-[0_30px_60px_-15px_rgba(255,255,255,0.2)] group"
              >
                Créer ma Carte
                <Wand2 size={36} className="group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer: Minimal & Classy */}
      <footer className="py-24 px-6 border-t border-cherish-pink/10 bg-white/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-cherish-red rounded-2xl flex items-center justify-center shadow-lg shadow-cherish-red/20 rotate-3">
              <Heart size={32} className="text-white fill-white" />
            </div>
            <span className="text-4xl font-serif font-bold bg-gradient-to-r from-cherish-red to-cherish-rose bg-clip-text text-transparent tracking-tighter">Cherish</span>
          </div>
          
          <div className="flex gap-16 text-slate-400 font-black text-xs uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-cherish-red transition-all relative group">
              Atelier
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cherish-red transition-all group-hover:w-full" />
            </a>
            <a href="#" className="hover:text-cherish-red transition-all relative group">
              Collection
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cherish-red transition-all group-hover:w-full" />
            </a>
            <a href="#" className="hover:text-cherish-red transition-all relative group">
              Contact
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cherish-red transition-all group-hover:w-full" />
            </a>
          </div>

          <div className="text-right">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-2">© 2026 Cherish Platform</p>
            <p className="text-cherish-rose text-[10px] font-black uppercase tracking-[0.3em] italic">Made with Love & Code</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
