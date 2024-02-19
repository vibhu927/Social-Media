import { motion } from "framer-motion";
import { useState } from "react";

const AuthPage = ({ children }) => {
  const [isFlipped, setFlipped] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, rotateY: isFlipped ? 180 : 0 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const flipContainer = () => {
    setFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="bg-white h-screen flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      onClick={flipContainer}
    >
      <motion.div className="grid gap-6 bg-slate-900 rounded p-6">
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AuthPage;
