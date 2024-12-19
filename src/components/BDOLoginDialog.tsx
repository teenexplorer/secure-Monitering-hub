import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

export const BDOLoginDialog = ({ blockName }: { blockName: string }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Attempting BDO ${isLogin ? 'login' : 'signup'} for block ${blockName}`);
    console.log(`Username: ${username}`);
    
    // Here you would typically handle the BDO login/signup logic
    toast({
      title: isLogin ? "Login Attempt" : "Signup Attempt",
      description: `Attempted ${isLogin ? 'login' : 'signup'} for Block ${blockName}`,
    });
  };

  if (!user) {
    return (
      <Button 
        variant="outline" 
        className="w-full justify-start opacity-50 cursor-not-allowed"
        disabled
      >
        {blockName} (Please login as DM first)
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {blockName}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>BDO {isLogin ? "Login" : "Sign Up"} - {blockName}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <Button type="submit" className="w-full">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};