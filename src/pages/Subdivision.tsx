import { motion } from "framer-motion";
import { BDOLoginDialog } from "@/components/BDOLoginDialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Subdivision = () => {
  const subdivisions = Array.from({ length: 4 }, (_, i) => `Subdivision ${i + 1}`);
  const blocksPerSubdivision = Array.from({ length: 10 }, (_, i) => `Block ${i + 1}`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto py-6">
        <h1 className="text-3xl font-bold mb-8">Subdivisions</h1>
        
        <ScrollArea className="h-[calc(100vh-200px)] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {subdivisions.map((subdivisionName, index) => (
              <div 
                key={subdivisionName}
                className="border rounded-lg p-6 space-y-4 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-4">{subdivisionName}</h2>
                <div className="space-y-2">
                  {blocksPerSubdivision.map((blockName) => (
                    <BDOLoginDialog 
                      key={`${subdivisionName}-${blockName}`} 
                      blockName={`${subdivisionName} - ${blockName}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default Subdivision;