import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const count = useMotionValue(1);
  const rounded = useTransform(count, Math.round);
  const navigate = useNavigate();

  useEffect(() => {
    const animation = animate(count, 100, { duration: 10, onComplete: () => navigate('/emre') });

    // Temizleme fonksiyonunu döndür
    return () => {
      animation.stop();
    };
  }, [count, navigate]);

  return (
    <div className='bg-black flex justify-center text-white h-screen items-center text-9xl'>
      {/* motion.h1 yerine motion.div kullanın */}
      <motion.div>{rounded}</motion.div>
    </div>
  );
}
