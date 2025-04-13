
import React, { useState } from "react";
import { X, Facebook, Apple, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GoogleIcon from "@/components/GoogleIcon";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative overflow-hidden">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                <span className="font-bold">M</span>
              </div>
              <span className="ml-2 font-bold text-gray-800">MyCourse.io</span>
            </div>
          </div>

          {/* Welcome text */}
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Join us and get more benefits. We promise to keep your data safely.
            </p>
          </div>

          {/* Social login buttons */}
          <div className="space-y-3 mb-6">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 bg-[#1877F2] text-white hover:bg-[#1877F2]/90"
            >
              <Facebook size={18} />
              <span>Sign Up with Facebook</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 bg-black text-white hover:bg-black/90"
            >
              <Apple size={18} />
              <span>Sign Up with Apple</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 border-gray-300"
            >
              <GoogleIcon />
              <span>Sign Up with Google</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="bg-white px-3 text-sm text-gray-500 absolute">or you can</span>
          </div>

          {/* Form */}
          <form>
            <div className="space-y-4">
              <div>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pr-10"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search size={16} />
                  </button>
                </div>
              </div>
              
              <div>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search size={16} />
                  </button>
                </div>
              </div>

              <Button 
                type="button" 
                className="w-full bg-[#40c9a7] hover:bg-[#37b698] text-white"
              >
                Create Account
              </Button>
            </div>
          </form>

          {/* Sign in link */}
          <div className="text-center mt-4 text-sm">
            <span className="text-gray-600">Already have an Account?</span>{" "}
            <a href="#" className="text-[#40c9a7] hover:underline">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
