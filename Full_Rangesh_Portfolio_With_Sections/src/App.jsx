import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainPortfolio from "./components/MainPortfolio";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <AnimatePresence>
        {showWelcome ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center h-screen relative bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-400"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Hello Everyone 👋
            </motion.h1>
          </motion.div>
        ) : (
          <MainPortfolio />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
