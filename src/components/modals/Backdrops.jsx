import React, { useState } from "react";
import "./index.css";
import { motion } from "framer-motion";
export default function Backdrops({ onClick, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, visibility: "hidden" }}
      exit={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
      className="backdrop"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
