
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Terminal, 
  ShieldAlert, 
  Activity,
  Globe
} from 'lucide-react';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { SocialCard } from './components/SocialCard';
import { TerminalText } from './components/TerminalText';
import { SystemLog } from './components/SystemLog';

// Теперь просто положи файл avat.png в папку с проектом
const AVATAR_URL = "./avat.png"; 

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full selection:bg-cyan-500/30 overflow-x-hidden">
      <BackgroundAnimation />
      
      {/* Decorative scanning line */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-50 animate-[scan_6s_linear_infinite]" />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 md:py-20 text-center">
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl w-full"
            >
              {/* Avatar Section */}
              <div className="relative mb-10 flex justify-center">
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative p-1 rounded-full bg-gradient-to-br from-cyan-500/40 via-transparent to-blue-500/40 backdrop-blur-sm border border-white/5">
                    <div className="overflow-hidden rounded-full w-32 h-32 md:w-44 md:h-44 border-4 border-black/50 bg-neutral-900">
                      <img 
                        src={AVATAR_URL} 
                        alt="Avatar" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                        onError={(e) => {
                          // Fallback if image not found
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/400?text=avat.png+not+found";
                        }}
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 w-5 h-5 bg-black rounded-full flex items-center justify-center border border-white/10 shadow-xl">
                    <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_#06b6d4]" />
                  </div>
                </motion.div>
              </div>

              {/* Identity Section */}
              <div className="space-y-4 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                      @zhivp
                    </span>
                  </h1>
                </motion.div>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="h-[1px] w-12 bg-cyan-500/30" />
                  <TerminalText />
                </div>
              </div>

              {/* Links Grid */}
              <div className="space-y-3 w-full mb-10">
                <SocialCard 
                  title="Official Telegram"
                  handle="t.me/zhivp"
                  url="https://t.me/zhivp"
                  icon={<Send className="w-5 h-5" />}
                  primary
                />
                
                <SocialCard 
                  title="Personal Bio"
                  handle="@legalizez"
                  url="https://t.me/legalizez"
                  icon={<Globe className="w-5 h-5" />}
                />
              </div>

              {/* System Log Window */}
              <SystemLog />

              {/* Warning/Footer Section */}
              <motion.div 
                className="mt-12 pt-8 border-t border-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/5 border border-red-500/10 text-red-500/70 mono text-[10px] uppercase tracking-widest">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>no trolling permitted</span>
                </div>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <div className="fixed top-8 left-8 hidden lg:flex items-center gap-3 opacity-20 mono text-[10px] tracking-tighter">
        <Activity className="w-3 h-3 text-cyan-500" />
        <span>UPLINK_ESTABLISHED</span>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default App;
