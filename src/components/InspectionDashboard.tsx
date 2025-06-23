
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

        {/* Main 2-column layout */}
      <div className="grid grid-cols-12 gap-4 p-4">
        {/* Left: VideoGrid */}
        <div className="col-span-7 space-y-4">
          <VideoGrid selectedContainer={selectedContainer} />
        </div>

        {/* Right: AlertConsole, ManifestHub */}
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
        </div>
      </div>

      <div className="px-4 mt-4">
        <CommunicationToolkit />
      </div>

      <div className="px-4 mt-4 pb-4">
        <ReportGenerator alerts={activeAlerts} />
      </div>
    </div>
  );
};
