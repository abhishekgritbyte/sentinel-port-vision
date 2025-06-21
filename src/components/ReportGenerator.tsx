
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Alert {
  id: number;
  priority: string;
  item: string;
  container: string;
  timestamp: Date;
  status: string;
}

interface ReportGeneratorProps {
  alerts: Alert[];
}

export const ReportGenerator = ({ alerts }: ReportGeneratorProps) => {
  const violations = alerts.filter(alert => alert.status === 'confirmed').length;
  const totalItems = alerts.length;
  
  return (
    <Card className="bg-[#1A4A7A] border-[#D4AF37] p-4">
      <h2 className="text-lg font-semibold text-[#D4AF37] mb-4">Report Generator</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#0F3A6B] p-3 rounded">
            <div className="text-xs text-gray-400">Total Alerts</div>
            <div className="text-xl font-bold text-white">{totalItems}</div>
          </div>
          <div className="bg-[#0F3A6B] p-3 rounded">
            <div className="text-xs text-gray-400">Confirmed Violations</div>
            <div className="text-xl font-bold text-red-400">{violations}</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-gray-300">
            <span className="font-medium">Shift Start:</span> 08:00 AM
          </div>
          <div className="text-sm text-gray-300">
            <span className="font-medium">Current Time:</span> {new Date().toLocaleTimeString()}
          </div>
          <div className="text-sm text-gray-300">
            <span className="font-medium">Inspector:</span> Officer J. Rodriguez
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-2">Evidence Snapshots</h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 aspect-square rounded flex items-center justify-center">
                <span className="text-xs text-gray-500">IMG_{i}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#0A2E5C] flex-1"
          >
            Export PDF
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A2E5C] flex-1"
          >
            Export Excel
          </Button>
        </div>
        
        {violations > 0 && (
          <Button 
            size="sm" 
            className="w-full bg-red-600 hover:bg-red-700 text-white"
          >
            Send to Port Authorities
          </Button>
        )}
      </div>
    </Card>
  );
};
