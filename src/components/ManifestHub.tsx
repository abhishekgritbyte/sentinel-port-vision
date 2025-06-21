
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ManifestHubProps {
  selectedContainer: string;
}

export const ManifestHub = ({ selectedContainer }: ManifestHubProps) => {
  const declaredItems = [
    "Electronics Components (50 units)",
    "Textiles - Cotton Shirts (200 units)",
    "Automotive Parts (25 units)",
    "Personal Care Products (100 units)"
  ];

  const detectedItems = [
    "Electronics Components (50 units)",
    "Textiles - Cotton Shirts (200 units)", 
    "Automotive Parts (25 units)",
    "Personal Care Products (100 units)",
    "⚠️ Unidentified Metal Object",
    "⚠️ Dense Material (Possible Weapon)"
  ];

  return (
    <Card className="bg-[#1A4A7A] border-[#D4AF37] p-4">
      <h2 className="text-lg font-semibold text-[#D4AF37] mb-4">
        Container Manifest Hub - {selectedContainer}
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-green-400 mb-2 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Declared Items
          </h3>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {declaredItems.map((item, index) => (
              <div key={index} className="text-sm text-gray-300 bg-[#0F3A6B] p-2 rounded">
                {item}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-blue-400 mb-2 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            AI Detected Items
          </h3>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {detectedItems.map((item, index) => (
              <div 
                key={index} 
                className={`text-sm p-2 rounded ${
                  item.includes('⚠️') 
                    ? 'text-red-300 bg-red-900/30 border border-red-600' 
                    : 'text-gray-300 bg-[#0F3A6B]'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-600">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Manifest Status:</span>
          <Badge className="bg-red-600 text-white">
            2 MISMATCHES DETECTED
          </Badge>
        </div>
      </div>
    </Card>
  );
};
