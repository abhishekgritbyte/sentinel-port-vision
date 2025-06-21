
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

interface AlertConsoleProps {
  alerts: Alert[];
  onAlertAction: (alertId: number, action: string) => void;
  onSelectContainer: (container: string) => void;
}

export const AlertConsole = ({ alerts, onAlertAction, onSelectContainer }: AlertConsoleProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High Risk": return "bg-red-600 text-white";
      case "Medium Risk": return "bg-orange-600 text-white";
      case "Low Risk": return "bg-yellow-600 text-black";
      default: return "bg-gray-600 text-white";
    }
  };

  return (
    <Card className="bg-[#1A4A7A] border-[#D4AF37] p-4">
      <h2 className="text-lg font-semibold text-[#D4AF37] mb-4">AI Alert Console</h2>
      
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className="bg-[#0F3A6B] rounded-lg p-3 border border-gray-600 hover:border-[#D4AF37] cursor-pointer transition-colors"
            onClick={() => onSelectContainer(alert.container)}
          >
            <div className="flex items-center justify-between mb-2">
              <Badge className={getPriorityColor(alert.priority)}>
                {alert.priority}
              </Badge>
              <span className="text-xs text-gray-400">
                {alert.timestamp.toLocaleTimeString()}
              </span>
            </div>
            
            <div className="text-white font-medium mb-1">
              {alert.item}
            </div>
            
            <div className="text-sm text-gray-300 mb-3">
              Container {alert.container}
            </div>
            
            {alert.status === 'pending' && (
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAlertAction(alert.id, 'confirmed');
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white flex-1"
                >
                  Confirm Threat
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAlertAction(alert.id, 'false_alarm');
                  }}
                  className="border-gray-400 text-gray-300 flex-1"
                >
                  False Alarm
                </Button>
                <Button 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAlertAction(alert.id, 'escalated');
                  }}
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#0A2E5C] flex-1"
                >
                  Escalate
                </Button>
              </div>
            )}
            
            {alert.status !== 'pending' && (
              <div className="text-sm">
                Status: <span className="capitalize text-[#D4AF37]">{alert.status.replace('_', ' ')}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
