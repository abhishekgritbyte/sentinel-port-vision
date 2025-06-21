
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VideoGridProps {
  selectedContainer: string;
}

export const VideoGrid = ({ selectedContainer }: VideoGridProps) => {
  const [focusMode, setFocusMode] = useState(false);
  const [aiScanEnabled, setAiScanEnabled] = useState(true);
  const [freezeFrame, setFreezeFrame] = useState(false);

  const videoFeeds = [
    { id: 1, name: "Conveyor Belt", status: "active", threats: 2 },
    { id: 2, name: "Sitting Area", status: "active", threats: 0 },
    { id: 3, name: "Storage Zone", status: "active", threats: 1 },
    { id: 4, name: "Handheld Scanner", status: "active", threats: 0 }
  ];

  return (
    <Card className="bg-[#1A4A7A] border-[#D4AF37] p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#D4AF37]">Live Inspection Panel</h2>
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            variant={focusMode ? "default" : "outline"}
            onClick={() => setFocusMode(!focusMode)}
            className="bg-orange-600 hover:bg-orange-700 text-white border-orange-600"
          >
            Focus on Suspicious Item
          </Button>
          <Button 
            size="sm" 
            variant={aiScanEnabled ? "default" : "outline"}
            onClick={() => setAiScanEnabled(!aiScanEnabled)}
            className="bg-purple-600 hover:bg-purple-700 text-white border-purple-600"
          >
            AI Scan {aiScanEnabled ? "ON" : "OFF"}
          </Button>
          <Button 
            size="sm" 
            variant={freezeFrame ? "default" : "outline"}
            onClick={() => setFreezeFrame(!freezeFrame)}
            className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
          >
            Freeze Frame
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {videoFeeds.map((feed) => (
          <div key={feed.id} className="relative">
            <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
              {/* Simulated video feed */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80"></div>
              
              {/* Container visualization */}
              <div className="relative z-10 text-center">
                <div className="text-gray-300 text-sm mb-2">{feed.name}</div>
                <div className="w-16 h-12 bg-gray-600 rounded mx-auto mb-2"></div>
                <div className="text-xs text-gray-400">Container {selectedContainer}</div>
              </div>

              {/* AI Detection Overlays */}
              {aiScanEnabled && feed.threats > 0 && (
                <div className="absolute top-4 left-4">
                  <div className="border-2 border-red-500 bg-red-500/20 rounded p-1">
                    <div className="text-xs text-red-300">
                      THREAT DETECTED
                    </div>
                    <div className="text-xs text-white font-mono">
                      Confidence: 98%
                    </div>
                  </div>
                </div>
              )}

              {/* Status indicators */}
              <div className="absolute top-2 right-2">
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    feed.status === 'active' 
                      ? 'border-green-500 text-green-500' 
                      : 'border-red-500 text-red-500'
                  }`}
                >
                  {feed.status.toUpperCase()}
                </Badge>
              </div>

              {/* Freeze frame overlay */}
              {freezeFrame && (
                <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                  <div className="text-blue-300 font-bold">FROZEN</div>
                </div>
              )}
            </div>
            
            <div className="mt-2 text-sm text-gray-300">
              Camera {feed.id} - {feed.name}
              {feed.threats > 0 && (
                <span className="ml-2 text-red-400">
                  ({feed.threats} threat{feed.threats > 1 ? 's' : ''})
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
