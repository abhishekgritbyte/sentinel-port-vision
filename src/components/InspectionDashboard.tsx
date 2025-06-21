
import { useState, useEffect } from "react";
import { VideoGrid } from "./VideoGrid";
import { AlertConsole } from "./AlertConsole";
import { ManifestHub } from "./ManifestHub";
import { CommunicationToolkit } from "./CommunicationToolkit";
import { ReportGenerator } from "./ReportGenerator";
import { Header } from "./Header";

export const InspectionDashboard = () => {
  const [selectedContainer, setSelectedContainer] = useState("AJM-88392");
  const [activeAlerts, setActiveAlerts] = useState([
    {
      id: 1,
      priority: "High Risk",
      item: "Weapons (98%)",
      container: "AJM-88392",
      timestamp: new Date(),
      status: "pending"
    },
    {
      id: 2,
      priority: "Medium Risk", 
      item: "Unlabeled Liquid (76%)",
      container: "AJM-88104",
      timestamp: new Date(),
      status: "pending"
    }
  ]);

  return (
    <div className="min-h-screen bg-[#0A2E5C] text-white">
      <Header />
      
      <div className="grid grid-cols-12 gap-4 p-4 h-[calc(100vh-80px)]">
        {/* Main Video Feed - 60% of screen */}
        <div className="col-span-7 space-y-4">
          <VideoGrid selectedContainer={selectedContainer} />
          <CommunicationToolkit />
        </div>
        
        {/* Side Panel - 40% of screen */}
        <div className="col-span-5 space-y-4">
          <AlertConsole 
            alerts={activeAlerts}
            onAlertAction={(alertId, action) => {
              setActiveAlerts(prev => 
                prev.map(alert => 
                  alert.id === alertId 
                    ? { ...alert, status: action }
                    : alert
                )
              );
            }}
            onSelectContainer={setSelectedContainer}
          />
          
          <ManifestHub selectedContainer={selectedContainer} />
          
          <ReportGenerator alerts={activeAlerts} />
        </div>
      </div>
    </div>
  );
};
