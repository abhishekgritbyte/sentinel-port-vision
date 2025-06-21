
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export const CommunicationToolkit = () => {
  const [ownerMuted, setOwnerMuted] = useState(false);

  const quickChats = [
    "Show package underside.",
    "Provide commercial invoice.",
    "Remove package from container.",
    "Rotate package 90 degrees.",
    "Open package for inspection."
  ];

  return (
    <Card className="bg-[#1A4A7A] border-[#D4AF37] p-4">
      <h2 className="text-lg font-semibold text-[#D4AF37] mb-4">Communication Toolkit</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-300 mb-2">Owner Audio Controls</h3>
          <div className="space-y-2">
            <Button 
              size="sm" 
              variant={ownerMuted ? "default" : "outline"}
              onClick={() => setOwnerMuted(!ownerMuted)}
              className={`w-full ${ownerMuted ? 'bg-red-600 hover:bg-red-700' : 'border-gray-400 text-gray-300'}`}
            >
              {ownerMuted ? "Unmute Owner" : "Mute Owner"}
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A2E5C]"
            >
              Request Close-up
            </Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-300 mb-2">Quick Chat Presets</h3>
          <div className="space-y-1 max-h-20 overflow-y-auto">
            {quickChats.map((chat, index) => (
              <Button 
                key={index}
                size="sm" 
                variant="ghost"
                className="w-full text-left justify-start text-xs text-gray-300 hover:bg-[#0F3A6B] h-auto py-1"
              >
                "{chat}"
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
