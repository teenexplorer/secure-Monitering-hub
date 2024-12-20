import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const GPList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8">
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="space-y-4">
          {Array.from({ length: 4 }, (_, i) => (
            <Button
              key={i}
              className="w-full text-left justify-start text-lg p-6"
              variant="outline"
              onClick={() => navigate(`/gp-questionnaire/${i + 1}`)}
            >
              GP {i + 1}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default GPList;