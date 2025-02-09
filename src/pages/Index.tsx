
import { useState } from "react";
import { NavigationBar } from "@/components/NavigationBar";
import { StatsCard } from "@/components/StatsCard";
import { ActionButton } from "@/components/ActionButton";
import { Card } from "@/components/ui/card";
import {
  Users,
  Target,
  CreditCard,
  AlertOctagon,
  UploadCloud,
  Rocket,
  Search,
  FileText,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = (action: string) => {
    setIsLoading(true);
    toast({
      title: "Action triggered",
      description: `${action} action is being processed...`,
    });
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NavigationBar />
      
      <main className="pt-24 px-4 pb-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Credit Scoring Dashboard</h1>
          <p className="text-gray-500">Monitor and analyze credit scoring metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Users"
            value="12,345"
            icon={Users}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Number of Clusters"
            value="5"
            icon={Target}
            trend={{ value: 20, isPositive: true }}
          />
          <StatsCard
            title="Average Credit Score"
            value="725"
            icon={CreditCard}
            trend={{ value: 3, isPositive: true }}
          />
          <StatsCard
            title="Default Risk"
            value="2.4%"
            icon={AlertOctagon}
            trend={{ value: 0.5, isPositive: false }}
          />
        </div>

        <Card className="p-6 bg-card/80 backdrop-blur-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ActionButton
              icon={UploadCloud}
              label="Upload Dataset"
              onClick={() => handleAction("Upload")}
              variant="outline"
            />
            <ActionButton
              icon={Rocket}
              label="Run Clustering"
              onClick={() => handleAction("Clustering")}
            />
            <ActionButton
              icon={Search}
              label="Predict Score"
              onClick={() => handleAction("Prediction")}
              variant="secondary"
            />
            <ActionButton
              icon={FileText}
              label="Generate Report"
              onClick={() => handleAction("Report")}
              variant="outline"
            />
          </div>
        </Card>
      </main>
    </div>
  );
}
