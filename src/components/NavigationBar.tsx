
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChartBar,
  LayoutDashboard,
  Target,
  Layers,
  FileText,
  Settings,
} from "lucide-react";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/clustering", label: "Clustering", icon: ChartBar },
  { path: "/prediction", label: "Credit Score Prediction", icon: Target },
  { path: "/segmentation", label: "Credit Score Segmentation", icon: Layers },
  { path: "/reports", label: "Reports", icon: FileText },
  { path: "/settings", label: "Settings", icon: Settings },
];

export const NavigationBar = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50 px-4">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Target className="w-8 h-8 text-primary" />
          <span className="text-xl font-semibold text-gray-900">CreditScore</span>
        </div>
        
        <div className="flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
                onMouseEnter={() => setIsHovered(item.path)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="flex items-center space-x-2">
                  <Icon className="w-5 h-5" />
                  <span className={`${isHovered === item.path ? "opacity-100" : "opacity-0 lg:opacity-100"} transition-opacity duration-200`}>
                    {item.label}
                  </span>
                </div>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-scaleIn" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
