import React from "react";
import { motion } from "framer-motion";

const QuoteDivider = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center py-6 px-4 bg-gradient-to-r from-slate-100 to-blue-50 text-gray-700 italic text-lg md:text-xl font-medium"
  >
    “{text}”
  </motion.div>
);

export default QuoteDivider;
