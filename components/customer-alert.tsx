"use client";

import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const customerNames = [
  "João Silva",
  "Maria Oliveira", 
  "Carlos Souza",
  "Ana Santos",
  "Roberto Pereira",
  "Juliana Costa",
  "Marcos Rodrigues",
  "Fernanda Lima",
  "Rute Sousa",
  "Mateus Lemos",
  "Pedro Lima",
  "Danniel Santos"
];

const plans = [
  "Plano Mensal",
  "Plano Trimestral",
  "Plano Semestral"
];

const cities = [
  "São Paulo", 
  "Rio de Janeiro",
  "Belo Horizonte",
  "Florianópolis", 
  "Porto Alegre",
  "Curitiba",
  "Brasília",
  "Salvador"
];

export default function CustomerAlert() {
  const [notifications, setNotifications] = useState<Array<{
    id: number;
    name: string;
    plan: string;
    city: string;
    timestamp: number;
  }>>([]);

  useEffect(() => {
    // Show first notification after 3 seconds
    const timeout = setTimeout(() => {
      addNotification();
    }, 3000);

    // Set up interval for subsequent notifications
    const interval = setInterval(() => {
      if (Math.random() > 0.5) { // 50% chance to show notification
        addNotification();
      }
    }, 30000); // Every 30 seconds

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const addNotification = () => {
    const name = customerNames[Math.floor(Math.random() * customerNames.length)];
    const plan = plans[Math.floor(Math.random() * plans.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    
    setNotifications(prev => [...prev, {
      id: Date.now(),
      name,
      plan,
      city,
      timestamp: Date.now()
    }]);
  };

  // Remove notifications after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prev => 
        prev.filter(notification => Date.now() - notification.timestamp < 5000)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-32 left-4 z-50 pointer-events-none">
      <div className="flex flex-col-reverse gap-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={cn(
              "bg-black/90 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-violet-900/20",
              "transform transition-all duration-500",
              "animate-in slide-in-from-left-4 fade-in",
              "w-80"
            )}
          >
            <div className="flex items-center gap-3">
              <div className="bg-violet-600/20 rounded-full p-2 flex-shrink-0">
                <Check className="h-4 w-4 text-violet-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white mb-1 truncate">
                  Novo assinante!
                </p>
                <p className="text-xs text-gray-400 truncate">
                  <span className="text-violet-400">{notification.name}</span> de {notification.city} acabou de assinar o <span className="text-violet-400">{notification.plan}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}