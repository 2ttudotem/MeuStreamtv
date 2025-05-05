'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  '🔥 João - SP acabou de assinar o plano de 1 mês!',
  '✨ Carla - RJ garantiu 3 meses de acesso!',
  '🚀 Marcos - MG ativou o plano de 6 meses!',
  '🏆 Ana - BA assinou o plano de 1 ano!',
  '🎉 Pedro - PR fez uma nova assinatura mensal!',
  '🔥 Lucas - SP acabou de assinar o plano de 1 mês!',
  '✨ Rute - RJ garantiu 3 meses de acesso!',
  '🚀 Beatriz - MG ativou o plano de 6 meses!',
  '🏆 Paula - SP assinou o plano de 1 ano!',
  '🎉 Joana - MG fez uma nova assinatura mensal!',
  '💥 Juliana - RJ fechou o pacote de 3 meses!',
];

export default function CustomerAlert() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 800); // tempo entre saída e entrada
    }, 8000); // tempo total de exibição de cada mensagem

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-16 left-4 z-50 w-[300px] sm:w-[340px]">
      <AnimatePresence>
        {visible && (
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7 }}
            className="rounded-lg bg-green-600/50 px-4 py-3 text-white shadow-xl backdrop-blur-sm"
          >
            {messages[currentMessage]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
