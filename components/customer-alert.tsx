'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  '🔥 João (SP) acabou de assinar o plano de 1 mês!',
  '✨ Carla (RJ) garantiu 3 meses de acesso!',
  '🚀 Marcos (MG) ativou o plano de 6 meses!',
  '🏆 Ana (BA) assinou o plano de 1 ano!',
  '🎉 Pedro (PR) fez uma nova assinatura mensal!',
  '💥 Juliana (SC) fechou o pacote de 3 meses!',
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
      }, 300); // tempo entre transições
    }, 5000); // tempo entre mensagens

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-full max-w-md -translate-x-1/2 px-4">
      <AnimatePresence>
        {visible && (
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg bg-violet-700 px-4 py-3 text-white shadow-lg"
          >
            {messages[currentMessage]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
