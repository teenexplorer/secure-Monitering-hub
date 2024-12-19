import { motion } from "framer-motion";
import { BDOLoginDialog } from "@/components/BDOLoginDialog";

const Subdivision = () => {
  const blocks = Array.from({ length: 10 }, (_, i) => `BLOCK (name${i + 1})`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto py-6">
        <h1 className="text-3xl font-bold mb-8">Subdivision</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blocks.map((blockName) => (
            <BDOLoginDialog key={blockName} blockName={blockName} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Subdivision;