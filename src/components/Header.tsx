
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-[#0F3A6B] border-b border-[#D4AF37] p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
            <span className="text-[#0A2E5C] font-bold text-sm">PA</span>
          </div>
          <h1 className="text-xl font-bold text-[#D4AF37]">Port Authority Inspection System</h1>
        </div>
        <Badge variant="outline" className="border-green-500 text-green-500">
          ONLINE
        </Badge>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className="text-sm text-gray-300">Inspector</div>
          <div className="font-semibold">Officer J. Rodriguez</div>
        </div>
        <Button variant="outline" size="sm" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A2E5C]">
          Shift Report
        </Button>
      </div>
    </header>
  );
};
