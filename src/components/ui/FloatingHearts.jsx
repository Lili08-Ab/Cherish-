import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const [heartsData, setHeartsData] = useState([]);

  useEffect(() => {
    // Générer les données des cœurs dans un useEffect pour respecter la pureté du rendu initial
    const colors = [
      'text-cherish-red',
      'text-cherish-rose',
      'text-cherish-pink',
      'text-red-400',
      'text-pink-400'
    ];

    const generatedHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      color: colors[i % colors.length],
      size: Math.random() * 25 + 15,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 20,
      startX: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5
    }));
    
    setHeartsData(generatedHearts);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      <AnimatePresence>
        {heartsData.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ 
              opacity: 0, 
              y: '110vh', 
              x: `${heart.startX}vw`, 
              scale: heart.scale 
            }}
            animate={{ 
              opacity: [0, 0.8, 0.8, 0], 
              y: '-15vh',
              rotate: [0, 45, -45, 0]
            }}
            transition={{ 
              duration: heart.duration, 
              repeat: Infinity, 
              delay: heart.delay,
              ease: "linear"
            }}
            className={`absolute ${heart.color} drop-shadow-[0_2px_4px_rgba(255,182,193,0.5)] filter blur-[0.5px]`}
          >
            <Heart 
              size={heart.size} 
              fill="currentColor" 
              className="opacity-70"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingHearts;
