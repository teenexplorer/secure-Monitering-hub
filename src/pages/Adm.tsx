import { motion } from "framer-motion";

const Adm = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto py-6">
        <h1 className="text-3xl font-bold">ADM</h1>
        <p className="mt-4">ADM content will go here.</p>
      </div>
    </motion.div>
  );
};

export default Adm;